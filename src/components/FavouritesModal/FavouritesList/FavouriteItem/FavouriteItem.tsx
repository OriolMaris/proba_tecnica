import React from 'react'

import favHeatFilled from '../../../../assets/favourite-filled.svg'
import favHeat from '../../../../assets/favourite-outlined.svg'
import { type ItemDisplayI } from '../../../../interface/Item'
import { useDataContext } from '../../../../store/DataContext'

interface FavouriteItemI {
  favItem: ItemDisplayI
}

const FavouriteItem: React.FunctionComponent<FavouriteItemI> = ({
  favItem,
}) => {
  const data = useDataContext()
  const store = data?._dataStore

  const handleOnClick = () => {
    setTimeout(() => {
      // funcio de teure de fav del context
      // animacio cor
      store?.handleFavButton(favItem)
    }, 1000)
  }

  return (
    <div
      style={{
        border: '5px',
        borderColor: 'black',
        display: 'flex',
        alignSelf: 'flex-start',
      }}
    >
      <img src={favItem.image} alt={favItem.title} />
      <div className="row">
        <h2>{favItem.title}</h2>
        <img
          style={{ maxHeight: '64px' }}
          src={favItem.isFav ? favHeatFilled : favHeat}
          onClick={handleOnClick}
        />
      </div>
    </div>
  )
}

export default FavouriteItem
