import { action, computed, makeObservable, observable } from 'mobx'

import { type ItemDisplayI, type ItemI } from '../interface/Item'
import { type DataHttpClient } from '../service/DataHttpClient'

export default class DataStore {
  @observable
  data: ItemDisplayI[] = [] // where all data is sotred

  @observable
  filteredData: ItemDisplayI[] = []

  @computed
  get getFavHasData(): boolean {
    return this.data.filter((element) => element.isFav).length !== 0
  }

  @computed
  get getFavItems() {
    return this.data.filter((element) => element.isFav)
  }

  constructor(private readonly dataHttpClient: DataHttpClient) {
    makeObservable(this)
  }

  getApiData = async () => {
    return this.dataHttpClient
      .getData()
      .then((response) => {
        this.inicializeData(response)
      })
      .catch(() => {})
  }

  @action
  handleFavButton = (item: ItemDisplayI) => {
    const index = this.data?.findIndex(
      (favItem) => favItem.image === item.image,
    )
    const newItem: ItemDisplayI = {
      ...item,
      isFav: !item.isFav,
    }
    this.data[index] = newItem
  }

  @action
  inicializeData = (value: ItemI[]) => {
    this.data = [
      ...value.map(({ title, description, image, price, email }) => {
        const newItem: ItemDisplayI = {
          title,
          description,
          image,
          price: parseInt(price),
          email,
          isFav: false,
        }
        return newItem
      }),
    ]
  }

  @action
  setData = (value: ItemDisplayI[]) => {
    this.data = value
  }
}
