import axios from 'axios'
import * as fs from 'fs'
import * as yaml from 'js-yaml'
import { JsonObject } from '../types/json-object'
import { RequestResult } from './request-result'

// Функция для выполнения запросов к сервису calendar и сохранения результатов в файл YAML
async function executeClient() {
  const baseURL = 'http://localhost:3000'
  const results: RequestResult[] = []

  //Запросы на добавление праздников
  const addHolidayReq = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-01-01',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp.data))

  const addHolidayReq1 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-01-02',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp1 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq1,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp1.data))

  const addHolidayReq2 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-01-03',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp2 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq2,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp2.data))

  const addHolidayReq3 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-01-04',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp3 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq3,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp3.data))

  const addHolidayReq4 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-01-05',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp4 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq4,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp4.data))

  const addHolidayReq5 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-01-06',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp5 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq5,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp5.data))

  const addHolidayReq6 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-01-07',
    description: 'Рождество Христово',
  })
  const addHolidayResp6 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq6,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp6.data))

  const addHolidayReq7 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-01-08',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp7 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq7,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp7.data))

  const addHolidayReq8 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-02-23',
    description: 'День защитника Отечества',
  })
  const addHolidayResp8 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq8,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp8.data))

  const addHolidayReq9 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-02-24',
    description: 'Перенесенный праздничный день 1 января',
  })
  const addHolidayResp9 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq9,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp9.data))

  const addHolidayReq10 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-03-08',
    description: 'Международный женский день',
  })
  const addHolidayResp10 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq10,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp10.data))

  const addHolidayReq11 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-05-01',
    description: 'Праздник Весны и Труда',
  })
  const addHolidayResp11 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq11,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp11.data))

  const addHolidayReq12 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-05-08',
    description: 'Перенесенный праздничный день 8 января',
  })
  const addHolidayResp12 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq12,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp12.data))

  const addHolidayReq13 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-05-09',
    description: 'День Победы',
  })
  const addHolidayResp13 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq13,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp13.data))

  const addHolidayReq14 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-06-12',
    description: 'День России',
  })
  const addHolidayResp14 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq14,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp14.data))

  const addHolidayReq15 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-11-04',
    description: 'День народного единства',
  })
  const addHolidayResp15 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq15,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp15.data))

  const addHolidayReq16 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2023-11-06',
    description: 'Выходной день за 4 ноября',
  })
  const addHolidayResp16 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq16,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp16.data))

  // Получение количества рабочих часов в апреле 2023
  const april2023HoursReq = new JsonObject<{ date: string | Date }>({
    date: '2023-04',
  })
  const april2023HourResp = await axios.post(
    `${baseURL}/working-hour/get`,
    april2023HoursReq,
  )
  results.push(
    new RequestResult(
      'Количество рабочих часов в апреле 2023',
      april2023HourResp.data,
    ),
  )
  // Получение количества рабочих часов в мае 2023
  const may2023HoursReq = new JsonObject<{ date: string | Date }>({
    date: '2023-05',
  })
  const may2023HourResp = await axios.post(
    `${baseURL}/working-hour/get`,
    may2023HoursReq,
  )
  results.push(
    new RequestResult(
      'Количество рабочих часов в мае 2023',
      may2023HourResp.data,
    ),
  )

  // Получение количества рабочих часов с апреля 2023 по март 2024
  const april2023ToMarch2024HoursReq = new JsonObject<{
    date: string | Date
    endDate: string | Date
  }>({
    date: '2023-04',
    endDate: '2024-03',
  })
  const april2023ToMarch2024HoursResp = await axios.post(
    `${baseURL}/working-hour/get`,
    april2023ToMarch2024HoursReq,
  )
  results.push(
    new RequestResult(
      'Количество рабочих часов с апреля по март 2024',
      april2023ToMarch2024HoursResp.data,
    ),
  )

  const addHolidayReq17 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-01-01',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp17 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq17,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp17.data))

  const addHolidayReq18 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-01-02',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp18 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq18,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp18.data))

  const addHolidayReq19 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-01-03',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp19 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq19,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp19.data))

  const addHolidayReq20 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-01-04',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp20 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq20,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp20.data))

  const addHolidayReq21 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-01-05',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp21 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq21,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp21.data))

  const addHolidayReq22 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-01-06',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp22 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq22,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp22.data))

  const addHolidayReq23 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-01-07',
    description: 'Рождество Христово',
  })
  const addHolidayResp23 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq23,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp23.data))

  const addHolidayReq24 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-01-08',
    description: 'Новогодние каникулы',
  })
  const addHolidayResp24 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq24,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp24.data))

  const addHolidayReq25 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-02-23',
    description: 'День защитника Отечества',
  })
  const addHolidayResp25 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq25,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp25.data))

  const addHolidayReq26 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-03-08',
    description: 'Международный женский день',
  })
  const addHolidayResp26 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq26,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp26.data))

  const addHolidayReq27 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-04-29',
    description: 'Перенесенный праздничный день 27 апреля',
  })
  const addHolidayResp27 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq27,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp27.data))

  const addHolidayReq28 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-04-30',
    description: 'Перенесенный праздничный день 2 ноября',
  })
  const addHolidayResp28 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq28,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp28.data))

  const addHolidayReq29 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-05-01',
    description: 'Праздник Весны и Труда',
  })
  const addHolidayResp29 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq29,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp29.data))

  const addHolidayReq30 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-05-09',
    description: 'День Победы',
  })
  const addHolidayResp30 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq30,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp30.data))

  const addHolidayReq31 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-05-10',
    description: 'Перенесенный праздничный день 6 января',
  })
  const addHolidayResp31 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq31,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp31.data))

  const addHolidayReq32 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-06-12',
    description: 'День России',
  })
  const addHolidayResp32 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq32,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp32.data))

  const addHolidayReq33 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-11-04',
    description: 'День народного единства',
  })
  const addHolidayResp33 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq33,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp33.data))

  const addHolidayReq34 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-12-31',
    description: 'Перенесенный праздничный день 7 января',
  })
  const addHolidayResp34 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq34,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp34.data))

  const addHolidayReq35 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-12-30',
    description: 'Перенесенный праздничный день 28 декабря',
  })
  const addHolidayResp35 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq35,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp35.data))

  // Запросы на добавление перенесенного рабочего дня
  const addWorkingWeekendReq1 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-04-27',
    description: 'Рабочая суббота',
  })
  const addWorkingWeekendResp1 = await axios.post(
    `${baseURL}/working-weekend/add`,
    addWorkingWeekendReq1,
  )
  results.push(
    new RequestResult(
      'Добавление перенесенного рабочего дня',
      addWorkingWeekendResp1.data,
    ),
  )

  const addWorkingWeekendReq2 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-11-02',
    description: 'Рабочая суббота',
  })
  const addWorkingWeekendResp2 = await axios.post(
    `${baseURL}/working-weekend/add`,
    addWorkingWeekendReq2,
  )
  results.push(
    new RequestResult(
      'Добавление перенесенного рабочего дня',
      addWorkingWeekendResp2.data,
    ),
  )

  //Запрос на удаление перенесенного рабочего дня
  // const addWorkingWeekendReq = new JsonObject<{ date: string | Date }>({
  //   date: '2024-11-02',
  // })
  // const addWorkingWeekendResp = await axios.delete(
  //   `${baseURL}/working-weekend/delete`,
  //   {
  //     data: addWorkingWeekendReq,
  //   },
  // )
  // results.push(
  //   new RequestResult(
  //     'Удаление перенесенного рабочего дня',
  //     addWorkingWeekendResp.data,
  //   ),
  // )

  // Получение количества рабочих часов в апреле 2024
  const april2024HoursReq = new JsonObject<{ date: string | Date }>({
    date: '2024-04',
  })
  const april2024HourResp = await axios.post(
    `${baseURL}/working-hour/get`,
    april2024HoursReq,
  )
  results.push(
    new RequestResult(
      'Количество рабочих часов в апреле 2024',
      april2024HourResp.data,
    ),
  )
  // Получение количества рабочих часов в мае 2024
  const may2024HoursReq = new JsonObject<{ date: string | Date }>({
    date: '2024-05',
  })
  const may2024HourResp = await axios.post(
    `${baseURL}/working-hour/get`,
    may2024HoursReq,
  )
  results.push(
    new RequestResult(
      'Количество рабочих часов в мае 2024',
      may2024HourResp.data,
    ),
  )

  // Получение количества рабочих часов с апреля 2023 по март 2024
  const april2023ToMarch2024HoursReq2 = new JsonObject<{
    date: string | Date
    endDate: string | Date
  }>({
    date: '2023-04',
    endDate: '2024-03',
  })
  const april2023ToMarch2024HoursResp2 = await axios.post(
    `${baseURL}/working-hour/get`,
    april2023ToMarch2024HoursReq2,
  )
  results.push(
    new RequestResult(
      'Количество рабочих часов с апреля по март 2024',
      april2023ToMarch2024HoursResp2.data,
    ),
  )

  // Запросы для удаления праздников
  const delHolidayReq = new JsonObject<{ date: string | Date }>({
    date: '2024-04-29',
  })
  const delHolidayResp = await axios.delete(`${baseURL}/holiday/delete`, {
    data: delHolidayReq,
  })
  results.push(new RequestResult('Удаление праздника', delHolidayResp.data))

  const delHolidayReq1 = new JsonObject<{ date: string | Date }>({
    date: '2024-04-30',
  })
  const delHolidayResp1 = await axios.delete(`${baseURL}/holiday/delete`, {
    data: delHolidayReq1,
  })
  results.push(new RequestResult('Удаление праздника', delHolidayResp1.data))

  const delHolidayReq2 = new JsonObject<{ date: string | Date }>({
    date: '2024-05-01',
  })
  const delHolidayResp2 = await axios.delete(`${baseURL}/holiday/delete`, {
    data: delHolidayReq2,
  })
  results.push(new RequestResult('Удаление праздника', delHolidayResp2.data))

  // Запросы на доавление новых праздничных дней
  const addHolidayReq36 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-05-06',
    description: 'Праздничный день',
  })
  const addHolidayResp36 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq36,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp36.data))

  const addHolidayReq37 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-05-07',
    description: 'Праздничный день',
  })
  const addHolidayResp37 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq37,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp37.data))

  const addHolidayReq38 = new JsonObject<{
    date: string | Date
    description?: string
  }>({
    date: '2024-05-08',
    description: 'Праздничный день',
  })
  const addHolidayResp38 = await axios.post(
    `${baseURL}/holiday/add`,
    addHolidayReq38,
  )
  results.push(new RequestResult('Добавление праздника', addHolidayResp38.data))

  // Получение количества рабочих часов в апреле 2024
  const april2024HoursReq2 = new JsonObject<{ date: string | Date }>({
    date: '2024-04',
  })
  const april2024HourResp2 = await axios.post(
    `${baseURL}/working-hour/get`,
    april2024HoursReq2,
  )
  results.push(
    new RequestResult(
      'Количество рабочих часов в апреле 2024',
      april2024HourResp2.data,
    ),
  )
  // Получение количества рабочих часов в мае 2024
  const may2024HoursReq2 = new JsonObject<{ date: string | Date }>({
    date: '2024-05',
  })
  const may2024HourResp2 = await axios.post(
    `${baseURL}/working-hour/get`,
    may2024HoursReq2,
  )
  results.push(
    new RequestResult(
      'Количество рабочих часов в мае 2024',
      may2024HourResp2.data,
    ),
  )

  // Получение количества рабочих часов с апреля 2023 по март 2024
  const april2023ToMarch2024HoursReq3 = new JsonObject<{
    date: string | Date
    endDate: string | Date
  }>({
    date: '2023-04',
    endDate: '2024-03',
  })
  const april2023ToMarch2024HoursResp3 = await axios.post(
    `${baseURL}/working-hour/get`,
    april2023ToMarch2024HoursReq3,
  )
  results.push(
    new RequestResult(
      'Количество рабочих часов с апреля по март 2024',
      april2023ToMarch2024HoursResp3.data,
    ),
  )

  //Проверка дня
  // const checkDayRequest = new JsonObject<{ date: string | Date }>({
  //   date: '2023-05-13',
  // })
  // const checkDayResponse = await axios.post(
  //   `${baseURL}/day/check`,
  //   checkDayRequest,
  // )
  // results.push(
  //   new RequestResult('Проверка дня 2023-05-13', checkDayResponse.data),
  // )

  // Запрос для получения списка праздников
  const listWorkingWeeckendReq = new JsonObject({})
  const listWorkingWeeckendResp = await axios.post(
    `${baseURL}/holiday/list`,
    listWorkingWeeckendReq,
  )
  results.push(
    new RequestResult(
      'Получение списка праздников',
      listWorkingWeeckendResp.data,
    ),
  )

  // Запрос для получения списка перенесенных рабочих дней
  const listHolidayReq = new JsonObject({})
  const listHolidayResp = await axios.post(
    `${baseURL}/working-weekend/list`,
    listHolidayReq,
  )
  results.push(
    new RequestResult(
      'Получение списка перенесенных рабочих дней',
      listHolidayResp.data,
    ),
  )

  // Преобразование объекта в YAML и запись в файл
  const yamlString = yaml.dump({ results })
  fs.writeFileSync('results.yaml', yamlString, 'utf8')

  console.log('Результаты сохранены в файл results.yaml')
}

// Запуск функции
executeClient().catch(console.error)
