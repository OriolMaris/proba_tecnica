import { type ItemDisplayI, type ItemI } from '../interface/Item'

export default class DataStoreMock {
  data: ItemDisplayI[] = [] // where all data is sotred

  filteredData: ItemDisplayI[] = []

  get getFavHasData(): boolean {
    return this.data.filter((element) => element.isFav).length !== 0
  }

  get getFavItems() {
    return this.data.filter((element) => element.isFav)
  }

  getApiData = jest.fn()

  handleFavButton = (item: ItemDisplayI) => jest.fn()

  inicializeData = (value: ItemI[]) => jest.fn()

  setData = (value: ItemDisplayI[]) => jest.fn()
}
