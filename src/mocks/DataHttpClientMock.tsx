import { type ItemI } from '../interface/Item'

export class DataHttpClientMock {
  getData = jest.fn(async () => {
    return new Promise<ItemI[]>((resolve) => {
      resolve([
        {
          title: 'title',
          description: 'description',
          image: 'image',
          price: 'price',
          email: 'email',
        },
      ])
    })
  })
}
