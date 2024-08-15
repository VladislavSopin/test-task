import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { format, parseISO, isWeekend, subDays, addDays } from 'date-fns';

@Injectable()
export class CalendarService {
  private pool: Pool;

  constructor() {
    // Создаем пул подключений к базе данных
    this.pool = new Pool({
      host: 'localhost',
      port: 5432,
      user: 'calendar',
      password: 'test24password',
      database: 'calendar',
    });
  }

  // Метод для получения списка праздничных дней
  async getHolidays() {
    const result = await this.pool.query(
      'SELECT date, description FROM holidays',
    );
    return result.rows;
  }

  // Метод для добавления праздничного дня
  async addHoliday(date: string, description?: string) {
    await this.pool.query(
      'INSERT INTO holidays (date, description) VALUES ($1, $2)',
      [date, description],
    );
    return { status: 'success', message: 'Holiday added' };
  }

  // Метод для удаления праздничного дня
  async deleteHoliday(date: string) {
    await this.pool.query('DELETE FROM holidays WHERE date = $1', [date]);
    return { status: 'success', message: 'Holiday removed' };
  }

  // Метод для получения списка перенесённых рабочих дней
  async getWorkingWeekends() {
    const result = await this.pool.query(
      'SELECT date, description FROM working_weekends',
    );
    return result.rows;
  }

  // Метод для добавления перенесённого рабочего дня
  async addWorkingWeekend(date: string, description?: string) {
    await this.pool.query(
      'INSERT INTO working_weekends (date, description) VALUES ($1, $2)',
      [date, description],
    );
    return { status: 'success', message: 'Working weekend added' };
  }

  // Метод для удаления перенесённого рабочего дня
  async deleteWorkingWeekend(date: string) {
    await this.pool.query('DELETE FROM working_weekends WHERE date = $1', [
      date,
    ]);
    return { status: 'success', message: 'Working weekend removed' };
  }

  // Метод для проверки типа дня (рабочий, выходной или праздничный)
  async checkDay(date: string) {
    const holiday = await this.pool.query(
      'SELECT description FROM holidays WHERE date = $1',
      [date],
    );
    if (holiday.rows.length > 0) {
      return {
        date,
        type: 'holiday',
        description: holiday.rows[0].description,
      };
    }
    const workingWeekend = await this.pool.query(
      'SELECT description FROM working_weekends WHERE date = $1',
      [date],
    );
    if (workingWeekend.rows.length > 0) {
      return {
        date,
        type: 'working-weekend',
        description: workingWeekend.rows[0].description,
      };
    }
    // Если день не является праздничным или перенесённым рабочим днем, то это обычный рабочий день
    return { date, type: 'working-day' };
  }

  // Метод для получения количества рабочих часов в указанном месяце

  async calculateWorkingHours(year: number, month: number): Promise<number> {
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    let totalHours = 0;

    for (let date = startDate; date <= endDate; date = addDays(date, 1)) {
      const formattedDate = format(date, 'yyyy-MM-dd');

      // Проверяем, является ли день праздником
      const isHoliday = await this.isHoliday(formattedDate);
      if (isHoliday) continue;

      // Проверяем, является ли день перенесенным рабочим днем
      const isWorkingWeekend = await this.isWorkingWeekend(formattedDate);

      if (isWeekend(date) && !isWorkingWeekend) {
        continue; // Пропускаем обычные выходные
      }

      // Определяем предпраздничный день
      const isPreHoliday = await this.isPreHoliday(formattedDate);

      totalHours += isPreHoliday ? 7 : 8;
    }

    // Сохраняем результат в базу данных
    await this.saveWorkingHours(year, month, totalHours);

    return totalHours;
  }

  private async isHoliday(date: string): Promise<boolean> {
    const result = await this.pool.query(
      'SELECT 1 FROM holidays WHERE date = $1',
      [date],
    );
    return result.rowCount > 0;
  }

  private async isWorkingWeekend(date: string): Promise<boolean> {
    const result = await this.pool.query(
      'SELECT 1 FROM working_weekends WHERE date = $1',
      [date],
    );
    return result.rowCount > 0;
  }

  private async isPreHoliday(date: string): Promise<boolean> {
    const nextDay = format(addDays(parseISO(date), 1), 'yyyy-MM-dd');
    return await this.isHoliday(nextDay);
  }

  private async saveWorkingHours(
    year: number,
    month: number,
    hours: number,
  ): Promise<void> {
    await this.pool.query(
      `INSERT INTO working_hours (year, month, hours) VALUES ($1, $2, $3)
       ON CONFLICT (year, month) DO UPDATE SET hours = EXCLUDED.hours`,
      [year, month, hours],
    );
  }

  // Метод для получения рабочих часов за месяц
  async getWorkingHours(year: number, month: number): Promise<number> {
    const result = await this.pool.query(
      'SELECT hours FROM working_hours WHERE year = $1 AND month = $2',
      [year, month],
    );
    return result.rows.length ? result.rows[0].hours : 0;
  }
}
