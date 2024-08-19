import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import * as moment from 'moment'
import { JsonObject } from 'src/types/json-object'
import { Repository } from 'typeorm'

@Injectable()
export class DayService {
  private repository: Repository<object>
  constructor(@InjectRepository(Repository) repository: Repository<object>) {
    this.repository = repository
  }

  // Метод для проверки типа дня (рабочий, выходной или праздничный)
  async checkDay(jsonObject: JsonObject<{ date: string | Date }>) {
    const date = jsonObject.data.date
    const holiday: { description: string }[] = await this.repository.query(
      'SELECT description FROM holidays WHERE date = $1',
      [date],
    )

    if (holiday.length > 0) {
      jsonObject.result = {
        type: 'holiday',
        description: holiday[0].description,
      }
      return jsonObject
    }
    const workingWeekend = await this.repository.query(
      'SELECT description FROM working_weekends WHERE date = $1',
      [date],
    )
    if (workingWeekend.length > 0) {
      jsonObject.result = {
        type: 'working-weekend',
        description: workingWeekend[0].description,
      }
      return jsonObject
    }
    const dayOfWeek = moment(date).toDate().getDay()
    const isWeekend = dayOfWeek === 6 || dayOfWeek === 0
    if (isWeekend) {
      jsonObject.result = {
        type: 'weekend',
      }
      return jsonObject
    }
    // Если день не является праздничным или перенесённым рабочим днем, то это обычный рабочий день или выходной
    jsonObject.result = { type: 'working-day' }
    return jsonObject
  }
}
