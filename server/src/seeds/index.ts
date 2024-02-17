import { faker } from '@faker-js/faker'

interface Data {
  name: string;
  surname: string;
  }

export const generateDatas = (num: number) => {
    const datas: Data[] = [];

  for (let i = 0; i < num; i++) {
    const name = faker.lorem.sentences(1)
    const surname = faker.lorem.sentences(1)

    datas.push({
        name,
        surname,
    })
  }

  return datas
}
