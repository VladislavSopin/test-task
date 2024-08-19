import { Module } from '@nestjs/common'
import { HolidayService } from './holiday.service'
import { HolidayController } from './holiday.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Holiday } from './holiday.entity'
import { WorkingHourModule } from '../working-hour/working-hour.module'

@Module({
  imports: [TypeOrmModule.forFeature([Holiday]), WorkingHourModule],
  providers: [HolidayService], // Регистрируем DayService
  controllers: [HolidayController], // Регистрируем контроллеры
})
export class HolidayModule {}
