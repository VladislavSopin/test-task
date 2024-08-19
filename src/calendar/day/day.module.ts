import { Module } from '@nestjs/common'
import { DayController } from './day.controller'
import { DayService } from './day.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Module({
  imports: [TypeOrmModule.forFeature([Repository<object>])],
  providers: [DayService], // Регистрируем DayService
  controllers: [DayController], // Регистрируем контроллеры
})
export class DayModule {}
