import { Module } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { HolidayController } from './holiday.controller';
import { DayController } from './day.controller';
import { WorkingWeekendController } from './working-weekend.controller';
import { WorkingHourController } from './working-hour.controller';

@Module({
  providers: [CalendarService], // Регистрируем CalendarService
  controllers: [
    HolidayController,
    WorkingWeekendController,
    DayController,
    WorkingHourController,
  ], // Регистрируем контроллеры
})
export class CalendarModule {}
