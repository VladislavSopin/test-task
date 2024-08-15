import { Controller, Get, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('working-hour')
export class WorkingHourController {
  constructor(private readonly calendarService: CalendarService) {}

  // Маршрут для получения количества рабочих часов за указанный месяц
  @Get('get')
  async getWorkingHours(
    @Query('month') monthQuery: string,
  ): Promise<{ year: number; month: number; hours: number }> {
    const [year, month] = monthQuery.split('-').map(Number);

    // Вычисляем рабочие часы
    const hours = await this.calendarService.calculateWorkingHours(year, month);

    return { year, month, hours };
  }
}
