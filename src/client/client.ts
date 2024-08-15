import axios from 'axios';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

// Функция для выполнения запросов к сервису calendar и сохранения результатов в файл YAML
async function executeClient() {
  const baseURL = 'http://localhost:3000';

  // Запросы для заполнения праздничных и перенесённых рабочих дней за 2023 год
  // await axios.post(`${baseURL}/holiday/add`, {
  //   date: '2023-01-01',
  //   description: "Новый год",
  // });
  // await axios.post(`${baseURL}/holiday/add`, {
  //   date: '2023-05-01',
  //   description: 'Мир, труд, май',
  // });
  // await axios.post(`${baseURL}/working-weekend/add`, {
  //   date: '2023-05-08',
  //   description: 'Рабочие выходные в связи с праздником',
  // });
  // await axios.post(`${baseURL}/holiday/add`, {
  //   date: '2023-05-09',
  //   description: 'День победы',
  // });
  // await axios.post(`${baseURL}/holiday/add`, {
  //   date: '2023-03-08',
  //   description: '8 марта',
  // });

  // Получение количества рабочих часов в марте 2023
  const march2023Hours = await axios.get(`${baseURL}/working-hour/get`, {
    params: { month: '2023-03' }, //184
  });
  // Получение количества рабочих часов в апреле 2023
  const april2023Hours = await axios.get(`${baseURL}/working-hour/get`, {
    params: { month: '2023-04' },
  });

  // Получение количества рабочих часов в мае 2023
  const may2023Hours = await axios.get(`${baseURL}/working-hour/get`, {
    params: { month: '2023-05' },
  });

  // Получение количества рабочих часов с апреля 2023 по март 2024
  const april2023ToMarch2024Hours = await axios.get(
    `${baseURL}/working-hour/get`,
    { params: { month: '2023-04' } },
  );

  // Результаты запросов сохраняются в объекте
  const results = {
    march2023Hours: march2023Hours.data,
    april2023Hours: april2023Hours.data,
    may2023Hours: may2023Hours.data,
    april2023ToMarch2024Hours: april2023ToMarch2024Hours.data,
  };

  // Преобразование объекта в YAML и запись в файл
  const yamlString = yaml.dump(results);
  fs.writeFileSync('results.yaml', yamlString, 'utf8');

  console.log('Результаты сохранены в файл results.yaml');
}

// Запуск функции
executeClient().catch(console.error);
