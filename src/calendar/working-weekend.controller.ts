import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('working-weekend')
export class WorkingWeekendController {
  constructor(private readonly calendarService: CalendarService) {}

  // Маршрут для получения списка перенесённых рабочих дней
  @Get('list')
  async listWorkingWeekends() {
    return this.calendarService.getWorkingWeekends();
  }

  // Маршрут для добавления перенесённого рабочего дня
  @Post('add')
  async addWorkingWeekend(
    @Body() body: { date: string; description?: string },
  ) {
    return this.calendarService.addWorkingWeekend(body.date, body.description);
  }

  // Маршрут для удаления перенесённого рабочего дня
  @Delete('delete')
  async deleteWorkingWeekend(@Body() body: { date: string }) {
    return this.calendarService.deleteWorkingWeekend(body.date);
  }
}
