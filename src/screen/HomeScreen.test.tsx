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

/// ///////////////////////////////

// import React from 'react'

// import { configure, mount } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'

// import HomeScreen from './HomeScreen'
// import { useDataContext } from '../store/DataContext'

// configure({ adapter: new Adapter() })
// // Mock useDataContext hook
// jest.mock('../store/DataContext', () => ({
//   useDataContext: jest.fn().mockReturnValue({
//     _dataStore: {
//       getApiData: jest.fn(),
//       data: [],
//     },
//   }),
// }))

// describe('HomeScreen', () => {
//   let wrapper: any
//   const mockGetApiData = jest.fn()
//   useDataContext.mockReturnValue({
//     _dataStore: {
//       getApiData: mockGetApiData,
//     },
//   })
//   beforeEach(() => {
//     // Mock the returned value of useDataContext
//     wrapper = mount(<HomeScreen />)
//   })

//   afterEach(() => {
//     wrapper.unmount()
//     jest.clearAllMocks()
//   })

//   it('should render AdvancedSearch and FavouritesModal', () => {
//     expect(wrapper.find('AdvancedSearch')).toHaveLength(1)
//     expect(wrapper.find('FavouritesModal')).toHaveLength(1)
//   })

//   it('should call getApiData on mount', () => {
//     expect(mockGetApiData).toHaveBeenCalledTimes(1)
//   })
// })

// test('te', async () => {
//   // const element = shallow(node)

//   const element = shallow(node)

//   const element3 = (
//     <DataContext.Provider value={{ _dataStore }}>
//       <HomeScreen />
//     </DataContext.Provider>
//   )
//   const fff = mount(element3)
//   await waitForUpdated(fff)
//   // await waitForUpdated(element)
//   expect(element.find(HomeScreen).text()).toBe('<HomeScreen />')
//   expect(element.find(HomeScreen).dive().text()).toBe('<FavouritesModal />')
// })
// jest.mock('../../../services/RideHistoryHttpClient', () => {
//   return {
//     RideHistoryHttpClient: jest.fn().mockImplementation(() => {
//       return {
//         getRideHistoryList: async function (): Promise<any> {
//           return {
//             cursor_next: 'ARbghfx_2prQm2qilDElYy07fWAi',
//             has_next: true,
//             rides: mockRides,
//           }
//         },
//       }
//     }),
//   }
// })
// let mockRides: any

// export const mockGetData = jest
//   .fn()
//   .mockImplementation(async () => Promise.resolve([]))
// jest.mock('./store/DataStore', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       getApiData: jest.fn().mockResolvedValue({
//         data: 'mock data',
//       }),
//     }
//   })
// })
// jest.mock('./service/DataHttpClient', () => {
//   return {
//     RideHistoryHttpClient: jest.fn().mockImplementation(async () => {
//       return {
//         getRideHistoryList: async function (): Promise<any> {
//           return Promise.resolve([
//             {
//               title: '',
//               description: '',
//               image: '',
//               price: '',
//               email: '',
//             },
//           ])
//         },
//       }
//     }),
//   }
// })
//   test('render App', async () => {
//     await dataStore.getApiData()
//     expect(dataStore.data.length).toEqual(1)
//   })

//   test('enzyme dive', async () => {
//     const element2 = (
//       <DataContext.Provider value={{ _dataStore: dataStore }}>
//         <HomeScreen />
//       </DataContext.Provider>
//     )
//     const element = shallow(element2)

//     const element3 = (
//       <DataContext.Provider value={{ _dataStore: dataStore }}>
//         <HomeScreen />
//       </DataContext.Provider>
//     )
//     const fff = mount(element3)
//     await waitForUpdated(fff)
//     expect(element.find(HomeScreen).text()).toBe('<HomeScreen />')
//     expect(element.find(HomeScreen).dive().text()).toBe('<FavouritesModal />')
//     // expect(mockGetData).toHaveBeenCalledTimes(1)
//   })
