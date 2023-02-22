import React, { type ReactElement } from 'react'

import { render } from '@testing-library/react'

import App from './App'

describe('App tests', () => {
  // let _dataContext: { _dataStore: DataStore }
  let node: ReactElement

  beforeEach(() => {
    // _dataContext = {
    //   _dataStore: new DataStore(new DataHttpClientMock()),
    // }
    node = (
      <App />

      // <DataContext.Provider value={_dataContext}>
      //   <AdvancedSearch />
      //   <FavouritesModal />
      // </DataContext.Provider>
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('render App', () => {
    render(node)
  })

  // test('when render App data lenght = 0', () => {
  //   mount(node)
  // })
})
