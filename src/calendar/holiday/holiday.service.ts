import { Injectable } from '@nestjs/common'
import { JsonObject } from '../../types/json-object'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Holiday } from './holiday.entity'
import { WorkingHourService } from '../working-hour/working-hour.service'
import * as moment from 'moment'

@Injectable()
export class HolidayService {
  constructor(
    @InjectRepository(Holiday)
    private readonly repository: Repository<Holiday>,
    private readonly workingHourService: WorkingHourService,
  ) {}

  // Метод для получения списка праздничных дней
  async getHolidays(jsonObject: JsonObject<object>) {
    jsonObject.result = await this.repository.query(
      "SELECT to_char(date, 'YYYY-MM-DD') AS date, description FROM holidays",
    )
    return jsonObject
  }

  // Метод для добавления праздничного дня
  async addHoliday(
    jsonObject: JsonObject<{ date: string | Date; description?: string }>,
  ) {
    const qbuilder = this.repository.createQueryBuilder('addHoliday')
    const qrunner = qbuilder.connection.createQueryRunner()
    try {
      await qrunner.startTransaction()
      await qrunner.query(
        'INSERT INTO holidays (date, description) VALUES ($1, $2);',
        [jsonObject.data.date, jsonObject.data.description],
      )
      await qrunner.commitTransaction()
    } catch (error) {
      await qrunner.rollbackTransaction()
      throw error
    } finally {
      await qrunner.release()
    }
    const year: number = moment(jsonObject.data.date).year()
    const month: number = moment(jsonObject.data.date).month()
    await this.workingHourService.calculateWorkingHours(year, month)
    jsonObject.result = { status: 'success', message: 'Holiday added' }
    return jsonObject
  }

  // Метод для удаления праздничного дня

  async deleteHoliday(jsonObject: JsonObject<{ date: string | Date }>) {
    const date = jsonObject.data.date
    await this.repository.query('DELETE FROM holidays WHERE date = $1', [date])
    const year: number = moment(jsonObject.data.date).year()
    const month: number = moment(jsonObject.data.date).month()
    await this.workingHourService.calculateWorkingHours(year, month)
    jsonObject.result = { status: 'success', message: 'Holiday removed' }
    return jsonObject
  }
}
