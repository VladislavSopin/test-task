import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarModule } from './calendar/calendar.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Подключение конфигурации из .env файла
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      autoLoadEntities: true,
      synchronize: true, // Для автоматической синхронизации схемы базы данных с моделями (только для разработки)
    }),
    CalendarModule, // Подключаем модуль Calendar
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
