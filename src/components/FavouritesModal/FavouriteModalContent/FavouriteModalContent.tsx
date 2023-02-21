import React, { useEffect, useState } from 'react'

import { useDataContext } from '../../../store/DataContext'
import FavouritesList from '../FavouritesList/FavouritesList'

const FavouriteModalContent: React.FunctionComponent = () => {
  const data = useDataContext()
  const store = data?._dataStore
  const [showList, setShowList] = useState<boolean>(false)

  useEffect(() => {
    setShowList(store?.getFavHasData ?? false)
  }, [store?.getFavHasData])

  return (
    <div style={{ display: 'flex', flex: 1 }}>
      {showList ? (
        <FavouritesList />
      ) : (
        <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <h1>The are no favourites</h1>
        </div>
      )}
    </div>
  )
}

export default FavouriteModalContent
