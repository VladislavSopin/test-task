import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('holiday')
export class HolidayController {
  constructor(private readonly calendarService: CalendarService) {}

  // Маршрут для получения списка праздничных дней
  @Get('list')
  async listHolidays() {
    return this.calendarService.getHolidays();
  }

  // Маршрут для добавления нового праздничного дня
  @Post('add')
  async addHoliday(@Body() body: { date: string; description?: string }) {
    return this.calendarService.addHoliday(body.date, body.description);
  }

  // Маршрут для удаления праздничного дня
  @Delete('delete')
  async deleteHoliday(@Body() body: { date: string }) {
    return this.calendarService.deleteHoliday(body.date);
  }
}
