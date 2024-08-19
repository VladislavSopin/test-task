import { Module } from '@nestjs/common'
import { WorkingHourController } from './working-hour.controller'
import { WorkingHourService } from './working-hour.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WorkingHour } from './working-hour.entity'
@Module({
  imports: [TypeOrmModule.forFeature([WorkingHour])],
  providers: [WorkingHourService], // Регистрируем CalendarService
  controllers: [WorkingHourController], // Регистрируем контроллеры
  exports: [WorkingHourService],
})
export class WorkingHourModule {}
