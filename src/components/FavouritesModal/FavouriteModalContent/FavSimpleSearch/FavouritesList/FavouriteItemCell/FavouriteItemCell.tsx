import React from 'react'

import favHeatFilled from '../../../../../../assets/favourite-filled.svg'
import favHeat from '../../../../../../assets/favourite-outlined.svg'
import { type ItemDisplayI } from '../../../../../../interface/Item'
import { useDataContext } from '../../../../../../store/DataContext'

import './FavouriteItemCell.css'

interface FavouriteItemCellI {
  favItem: ItemDisplayI
}

const FavouriteItemCell: React.FunctionComponent<FavouriteItemCellI> = ({
  favItem,
}) => {
  const data = useDataContext()
  const store = data?._dataStore

  const handleOnClick = () => {
    store?.handleFavButton(favItem)
  }

  return (
    <div className="fav-item-cell-wrapper">
      <img className="image" src={favItem.image} alt={favItem.title} />
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

export default FavouriteItemCell
