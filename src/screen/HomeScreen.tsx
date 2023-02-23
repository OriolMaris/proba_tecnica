import React, { useEffect } from 'react'

import AdvancedSearch from '../components/AdvancedSearch/AdvancedSearch'
import FavouritesModal from '../components/FavouritesModal/FavouritesModal'
import { useDataContext } from '../store/DataContext'

const HomeScreen = () => {
  const _dataContext = useDataContext()

  useEffect(() => {
    _dataContext?._dataStore.getApiData()
    // trigger only once on create Component
  }, [])

  return (
    <>
      <AdvancedSearch />
      <FavouritesModal />
    </>
  )
}

export default HomeScreen
