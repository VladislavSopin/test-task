import { Controller, Get, Post, Delete, Body } from '@nestjs/common'
import { WorkingWeekendService } from './working-weekend.service'
import { checkJsonObject } from '../utils/tools'
import { JsonObject } from '../../types/json-object'

@Controller('working-weekend')
export class WorkingWeekendController {
  constructor(private readonly workingWeekendService: WorkingWeekendService) {}
  // Маршрут для получения списка перенесённых рабочих дней
  @Post('list')
  async listWorkingWeekends(@Body() body: JsonObject<object>) {
    return this.workingWeekendService.getWorkingWeekends(body)
  }

  // Маршрут для добавления перенесённого рабочего дня
  @Post('add')
  async addWorkingWeekend(
    @Body() body: JsonObject<{ date: string | Date; description?: string }>,
  ) {
    checkJsonObject(body)
    return this.workingWeekendService.addWorkingWeekend(body)
  }

  // Маршрут для удаления перенесённого рабочего дня
  @Delete('delete')
  async deleteWorkingWeekend(
    @Body() body: JsonObject<{ date: string | Date }>,
  ) {
    checkJsonObject(body)
    return this.workingWeekendService.deleteWorkingWeekend(body)
  }
}
