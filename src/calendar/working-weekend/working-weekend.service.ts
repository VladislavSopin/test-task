import { Injectable } from '@nestjs/common'
import { JsonObject } from '../../types/json-object'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { WorkingWeekend } from './working-weekend.entity'
import { WorkingHourService } from '../working-hour/working-hour.service'
import * as moment from 'moment'

@Injectable()
export class WorkingWeekendService {
  constructor(
    @InjectRepository(WorkingWeekend)
    private readonly repository: Repository<WorkingWeekend>,
    private readonly workingHourService: WorkingHourService,
  ) {}

  // Метод для получения списка перенесённых рабочих дней
  async getWorkingWeekends(jsonObject: JsonObject<object>) {
    jsonObject.result = await this.repository.query(
      "SELECT to_char(date, 'YYYY-MM-DD') AS date, description FROM working_weekends",
    )
    return jsonObject
  }

  // Метод для добавления перенесённого рабочего дня
  async addWorkingWeekend(
    jsonObject: JsonObject<{ date: string | Date; description?: string }>,
  ) {
    const qbuilder = this.repository.createQueryBuilder('addWorkinWeekend')
    const qrunner = qbuilder.connection.createQueryRunner()
    try {
      await qrunner.startTransaction()
      await qrunner.query(
        'INSERT INTO working_weekends (date, description) VALUES ($1, $2);',
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
    jsonObject.result = { status: 'success', message: 'Working weekend added' }
    return jsonObject
  }

  // Метод для удаления перенесённого рабочего дня
  async deleteWorkingWeekend(jsonObject: JsonObject<{ date: string | Date }>) {
    const date = jsonObject.data.date
    await this.repository.query(
      'DELETE FROM working_weekends WHERE date = $1',
      [date],
    )
    const year: number = moment(jsonObject.data.date).year()
    const month: number = moment(jsonObject.data.date).month()
    await this.workingHourService.calculateWorkingHours(year, month)
    jsonObject.result = {
      status: 'success',
      message: 'Working weekend removed',
    }
    return jsonObject
  }
}
