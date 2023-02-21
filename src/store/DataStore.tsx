import { action, computed, makeObservable, observable } from 'mobx'

import { type ItemDisplayI, type ItemI, type ItemKey } from '../interface/Item'
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
        this.setData(response)
        this.sortByKey('title')
      })
      .catch(() => {})
  }

  sortByKey = (key: ItemKey) => {
    const sortedArray = this.filteredData.sort(
      (a: ItemDisplayI, b: ItemDisplayI) => {
        if (a[key] > b[key]) return 0
        else return -1
      },
    )
    this.setFilteredData(sortedArray)
  }

  filterByAtr = ({ title, description, price, email }: ItemDisplayI) => {
    const filteredItem = this.data.filter((value) => {
      if (
        title !== '' &&
        !value.title.toLowerCase().startsWith(title.toLowerCase())
      )
        return false
      if (
        description !== '' &&
        !value.description.toLowerCase().startsWith(description.toLowerCase())
      )
        return false

      if (price > 0 && value.price !== price) return false
      if (email !== '' && !value.email.startsWith(email)) return false
      return true
    })
    this.setFilteredData(filteredItem)
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
    // actualize data to mantain the data
    this.data[index] = newItem

    const index2 = this.filteredData?.findIndex(
      (favItem) => favItem.image === item.image,
    )
    const newItem2: ItemDisplayI = {
      ...item,
      isFav: !item.isFav,
    }
    // actualize data to dispkay the correct one
    this.filteredData[index2] = newItem2
  }

  setData = (value: ItemI[]) => {
    this.data = [
      ...(value.map(({ title, description, image, price, email }) => {
        const newItem: ItemDisplayI = {
          title,
          description,
          image,
          price: parseInt(price),
          email,
          isFav: false,
        }
        return newItem
      }) ?? []),
    ]
    this.setFilteredData(this.data)
  }

  @action
  setFilteredData = (value: ItemDisplayI[]) => {
    this.filteredData = value
  }
}
