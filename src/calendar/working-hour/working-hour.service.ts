import { Injectable } from '@nestjs/common'
import * as moment from 'moment'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { WorkingHour } from './working-hour.entity'
import { JsonObject } from '../../types/json-object'

@Injectable()
export class WorkingHourService {
  private repository: Repository<WorkingHour>
  constructor(
    @InjectRepository(WorkingHour) repository: Repository<WorkingHour>,
  ) {
    this.repository = repository
  }

  // Метод для получения количества рабочих часов в указанном месяце

  async calculateWorkingHours(
    startYear: number,
    startMonth: number,
    endYear?: number,
    endMonth?: number,
  ): Promise<number> {
    const startDate = moment([startYear, startMonth]).startOf('month')
    const endDate = moment([startYear, startMonth]).endOf('month')

    let totalHours = 0

    for (
      let date = startDate.clone();
      date.isSameOrBefore(endDate);
      date.add(1, 'day')
    ) {
      const formattedDate = date.format('YYYY-MM-DD')

      // Проверяем, является ли день праздником
      const isHoliday = await this.isHoliday(formattedDate)
      if (isHoliday) continue

      // Проверяем, является ли день перенесенным рабочим днем
      const isWorkingWeekend = await this.isWorkingWeekend(formattedDate)
      const dayOfWeek = date.day()
      const isWeekend = dayOfWeek === 6 || dayOfWeek === 0
      if (isWeekend && !isWorkingWeekend) {
        continue // Пропускаем обычные выходные
      }

      // Определяем предпраздничный день
      const isPreHoliday = await this.isPreHoliday(formattedDate)

      totalHours += isPreHoliday ? 7 : 8
    }

    // Сохраняем результат в базу данных
    await this.saveWorkingHours(startYear, startMonth, totalHours)

    return totalHours
  }

  private async isHoliday(date: string): Promise<boolean> {
    const result = await this.repository.query(
      'SELECT 1 FROM holidays WHERE date = $1',
      [date],
    )

    return result.length > 0
  }

  private async isWorkingWeekend(date: string): Promise<boolean> {
    const result = await this.repository.query(
      'SELECT 1 FROM working_weekends WHERE date = $1',
      [date],
    )
    return result.length > 0
  }

  private async isPreHoliday(date: string): Promise<boolean> {
    const nextDay = moment(date).add(1, 'day').format('YYYY-MM-DD')
    return await this.isHoliday(nextDay)
  }

  private async saveWorkingHours(
    year: number,
    month: number,
    hours: number,
  ): Promise<void> {
    await this.repository.query(
      `INSERT INTO working_hours (year, month, hours) VALUES ($1, $2, $3)
       ON CONFLICT (year, month) DO UPDATE SET hours = EXCLUDED.hours`,
      [year, month, hours],
    )
  }

  // Метод для получения рабочих часов за месяц
  async getWorkingHours(
    jsonObject: JsonObject<{
      date: string | Date
      endDate?: string | Date
    }>,
  ) {
    if (!jsonObject.data.endDate) {
      const year = moment(jsonObject.data.date).year()
      const month = moment(jsonObject.data.date).month()

      const result = await this.repository.query(
        'SELECT hours FROM working_hours WHERE year = $1 AND month = $2',
        [year, month],
      )
      if (result.length < 1) {
        const hours = await this.calculateWorkingHours(year, month) // Вычисляем рабочие часы
        jsonObject.result = { hours }
        return jsonObject
      } else {
        console.log(result)
        jsonObject.result = result
        return jsonObject
      }
    } else {
      const startDate = moment(jsonObject.data.date)
      const endDate = moment(jsonObject.data.endDate)
        ? moment(jsonObject.data.endDate)
        : startDate

      let totalHours = 0

      for (
        let date = startDate.clone();
        date.isSameOrBefore(endDate, 'month');
        date.add(1, 'month')
      ) {
        const year = moment(date).year()
        const month = moment(date).month()
        totalHours += await this.calculateWorkingHours(year, month)
      }

      jsonObject.result = { totalHours }
      return jsonObject
    }
  }
}
