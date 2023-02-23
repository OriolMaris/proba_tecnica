import React, { useRef } from 'react'

import HomeScreen from './screen/HomeScreen'
import { DataHttpClient } from './service/DataHttpClient'
import DataContext from './store/DataContext'
import DataStore from './store/DataStore'

import './App.css'

const App = () => {
  const _dataContext = useRef({
    _dataStore: new DataStore(new DataHttpClient()),
  }).current

  return (
    <DataContext.Provider value={_dataContext}>
      <HomeScreen />
    </DataContext.Provider>
  )
}

export default App
