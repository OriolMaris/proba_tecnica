import axios from 'axios'

import { type ItemI } from '../interface/Item'

interface DataHttpClientI {
  getData: () => Promise<ItemI[]>
}

export class DataHttpClient implements DataHttpClientI {
  getData = async () => {
    return await new Promise<ItemI[]>((resolve, reject) => {
      axios
        .get(
          'https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json',
        )
        .then((response) => {
          resolve(response.data.items)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
