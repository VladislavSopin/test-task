import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './DataSource';
import { DayModule } from './calendar/day/day.module';
import { HolidayModule } from './calendar/holiday/holiday.module';
import { WorkingWeekendModule } from './calendar/working-weekend/working-weekend.module';
import { WorkingHourModule } from './calendar/working-hour/working-hour.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Подключение конфигурации из .env файла
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
    // Подключаем модули
    DayModule,
    HolidayModule,
    WorkingWeekendModule,
    WorkingHourModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
