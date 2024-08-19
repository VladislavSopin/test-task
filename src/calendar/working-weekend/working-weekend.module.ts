import { Module } from '@nestjs/common'
import { WorkingWeekendService } from './working-weekend.service'
import { WorkingWeekendController } from './working-weekend.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WorkingWeekend } from './working-weekend.entity'
import { WorkingHourModule } from '../working-hour/working-hour.module'

@Module({
  imports: [TypeOrmModule.forFeature([WorkingWeekend]), WorkingHourModule],
  providers: [WorkingWeekendService], // Регистрируем DayService
  controllers: [WorkingWeekendController], // Регистрируем контроллеры
})
export class WorkingWeekendModule {}
