/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { render } from '@testing-library/react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import AdvancedSearch from '../components/AdvancedSearch/AdvancedSearch'
import FavouritesModal from '../components/FavouritesModal/FavouritesModal'
import { DataHttpClientMock } from '../mocks/DataHttpClientMock'
import DataContext from '../store/DataContext'
import DataStore from '../store/DataStore'

export const waitForUpdated = async (element?: ReturnType<typeof mount>) =>
  new Promise(process.nextTick).finally(() => element?.update())

export const mockGetAction = jest
  .fn()
  .mockImplementation(async () => Promise.resolve([{}]))

configure({ adapter: new Adapter() })
describe('HomeScreen tests', () => {
  let node: React.ReactElement
  let _dataStore: DataStore
  let consoleSpy: jest.SpyInstance<
    void,
    [message?: any, ...optionalParams: any[]]
  >

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation((message) => {
      if (!message.includes('Warning')) console.error(message)
    })
  })

  beforeEach(() => {
    _dataStore = new DataStore(new DataHttpClientMock())

    node = (
      <DataContext.Provider value={{ _dataStore }}>
        <AdvancedSearch />
        <FavouritesModal />
      </DataContext.Provider>
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should render a CustomInput component', () => {
    render(node)
  })

  test('when render App data lenght = 0', async () => {
    expect(_dataStore.data.length).toBe(0)
    const element = mount(node)
    expect(_dataStore.data.length).toBe(0)
    _dataStore.getApiData()
    await waitForUpdated(element)
    expect(_dataStore.data.length).toBe(1)
  })
})
