import React, { useEffect, useState } from 'react'

import { observer } from 'mobx-react'

import FavouritesList from './FavouritesList/FavouritesList'
import { useDataContext } from '../../../store/DataContext'

import './FavouriteModalContent.css'

const FavouriteModalContent: React.FunctionComponent = observer(() => {
  const data = useDataContext()
  const store = data?._dataStore
  const [showList, setShowList] = useState<boolean>(false)

  useEffect(() => {
    setShowList(store?.getFavHasData ?? false)
  }, [store?.getFavHasData])

  return (
    <div className="favourite-modal-content">
      {/* <FavouriteSearch></FavouriteSearch> */}
      {showList ? (
        <FavouritesList />
      ) : (
        <div className="favourite-modal-missing-content">
          <h1>The are no favourites</h1>
        </div>
      )}
    </div>
  )
})

export default FavouriteModalContent
