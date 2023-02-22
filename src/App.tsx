import React, { useEffect, useRef } from 'react'

import './App.css'
import AdvancedSearch from './components/AdvancedSearch/AdvancedSearch'
import FavouritesModal from './components/FavouritesModal/FavouritesModal'
import { DataHttpClient } from './service/DataHttpClient'
import DataContext from './store/DataContext'
import DataStore from './store/DataStore'

const App = () => {
  const _dataContext = useRef({
    _dataStore: new DataStore(new DataHttpClient()),
  }).current

  useEffect(() => {
    _dataContext._dataStore.getApiData()
    // trigger only once on create Component
  }, [])

  return (
    <DataContext.Provider value={_dataContext}>
      <AdvancedSearch />
      <FavouritesModal />
    </DataContext.Provider>
  )
}

export default App
