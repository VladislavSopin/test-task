import { Body, Controller, Post } from '@nestjs/common'
import { JsonObject } from '../../types/json-object'
import { DayService } from './day.service'
import { checkJsonObject } from '../utils/tools'

@Controller('day')
export class DayController {
  constructor(private readonly dayService: DayService) {}

  // Маршрут для проверки типа дня
  @Post('check')
  async checkDay(@Body() body: JsonObject<{ date: string | Date }>) {
    checkJsonObject(body)
    return this.dayService.checkDay(body)
  }
}
