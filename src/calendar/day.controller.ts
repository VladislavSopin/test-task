import { Controller, Get, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('day')
export class DayController {
  constructor(private readonly calendarService: CalendarService) {}

  // Маршрут для проверки типа дня
  @Get('check')
  async checkDay(@Query('date') date: string) {
    return this.calendarService.checkDay(date);
  }
}
