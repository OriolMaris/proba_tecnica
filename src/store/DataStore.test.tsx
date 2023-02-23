import DataStore from './DataStore'
import { type ItemI, type ItemDisplayI } from '../interface/Item'
import { DataHttpClientMock } from '../mocks/DataHttpClientMock'

jest.mock('axios')

describe('DataStore', () => {
  let dataStore: DataStore
  const dataItem: ItemI[] = [
    {
      title: 'test',
      description: 'testItem',
      image: '',
      price: '10',
      email: '',
    },
  ]
  const dataItemDisplay: ItemDisplayI[] = [
    {
      title: 'test',
      description: 'testItem',
      image: '',
      price: 10,
      email: '',
      isFav: false,
    },
  ]

  const items = [
    {
      title: 'test',
      description: 'testItem1',
      image: '',
      price: 10,
      email: '',
      isFav: false,
    },
    {
      title: 'test2',
      description: 'testItem2',
      image: '',
      price: 20,
      email: '',
      isFav: true,
    },
    {
      title: 'test3',
      description: 'testItem3',
      image: '',
      price: 30,
      email: '',
      isFav: true,
    },
  ]

  beforeEach(() => {
    dataStore = new DataStore(new DataHttpClientMock())
  })

  test('it should set and get data', () => {
    dataStore.setData(dataItemDisplay)
    expect(dataStore.data).toEqual(dataItemDisplay)
  })

  test('it should initialize data', () => {
    dataStore.inicializeData(dataItem)
    expect(dataStore.data).toEqual(dataItemDisplay)
  })

  test('it should toggle item favorite state', () => {
    const item = {
      title: 'test',
      description: 'testItem',
      image: '',
      price: 10,
      email: '',
      isFav: false,
    }
    dataStore.setData([item])
    expect(dataStore.data[0].isFav).toBe(false)
    dataStore.handleFavButton(item)
    expect(dataStore.data[0].isFav).toBe(true)
    dataStore.handleFavButton({ ...item, isFav: !item.isFav })
    expect(dataStore.data[0].isFav).toBe(false)
  })

  test('it should get favorite items', () => {
    dataStore.setData(items)
    expect(dataStore.getFavItems).toEqual([items[1], items[2]])
  })

  test('it should check if favorite items exist', () => {
    dataStore.setData(items)
    expect(dataStore.getFavHasData).toBe(true)
    dataStore.setData([
      {
        title: 'test',
        description: 'testItem',
        image: '',
        price: 10,
        email: '',
        isFav: false,
      },
    ])
    expect(dataStore.getFavHasData).toBe(false)
  })
})
