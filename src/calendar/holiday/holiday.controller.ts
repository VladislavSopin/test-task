import { Controller, Post, Delete, Body } from '@nestjs/common'
import { HolidayService } from './holiday.service'
import { checkJsonObject } from '../utils/tools'
import { JsonObject } from '../../types/json-object'

@Controller('holiday')
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  // Маршрут для получения списка праздничных дней
  @Post('list')
  async listHolidays(@Body() body: JsonObject<object>) {
    return this.holidayService.getHolidays(body)
  }

  // Маршрут для добавления нового праздничного дня
  @Post('add')
  async addHoliday(
    @Body() body: JsonObject<{ date: string | Date; description?: string }>,
  ) {
    checkJsonObject(body)
    return this.holidayService.addHoliday(body)
  }

  // Маршрут для удаления праздничного дня
  @Delete('delete')
  async deleteHoliday(@Body() body: JsonObject<{ date: string | Date }>) {
    checkJsonObject(body)
    return this.holidayService.deleteHoliday(body)
  }
}
