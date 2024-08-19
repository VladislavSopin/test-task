import { Body, Controller, Post } from '@nestjs/common'
import { WorkingHourService } from './working-hour.service'
import { JsonObject } from '../../types/json-object'
import { checkJsonObject } from '../utils/tools'

@Controller('working-hour')
export class WorkingHourController {
  constructor(private readonly workingHourService: WorkingHourService) {}

  // Маршрут для получения количества рабочих часов за указанный месяц
  @Post('get')
  async getWorkingHours(
    @Body()
    body: JsonObject<{ date: string | Date; endDate?: string | Date }>,
  ) {
    checkJsonObject(body)
    return this.workingHourService.getWorkingHours(body)
  }
}
