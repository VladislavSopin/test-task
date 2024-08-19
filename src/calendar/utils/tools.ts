import { HttpException, HttpStatus } from '@nestjs/common'
import * as moment from 'moment'
import { JsonObject } from 'src/types/json-object'

export function checkJsonObject(
  jsonObject: JsonObject<{ date: string | Date }>,
) {
  if (typeof jsonObject.data !== 'object')
    throw new HttpException(
      'Поле data должно иметь тип объекта',
      HttpStatus.BAD_REQUEST,
    )
  else if (!moment(jsonObject.data.date).isValid())
    throw new HttpException(
      'Поле data.date должно иметь тип даты',
      HttpStatus.BAD_REQUEST,
    )
}
