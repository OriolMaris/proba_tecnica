import React, { useEffect, useState } from 'react'

import { observer } from 'mobx-react'

import favHeatFilled from '../../../../assets/favourite-filled.svg'
import favHeat from '../../../../assets/favourite-outlined.svg'
import { type ItemDisplayI } from '../../../../interface/Item'
import './ItemCell.css'

interface ItemCellI {
  item: ItemDisplayI
  onClickFav: () => void
}

const ItemCell: React.FunctionComponent<ItemCellI> = observer(
  ({ item, onClickFav }) => {
    const [isFav, setIsFav] = useState<boolean>(item.isFav)

    const handleFavClick = () => {
      setIsFav(!isFav)
      onClickFav()
    }

    useEffect(() => {
      setIsFav(item.isFav)
    }, [item])

    return (
      <div className="row">
        <div>
          <img className="image" src={item.image} alt={item.title} />
        </div>
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.email}</p>
          <img
            onClick={handleFavClick}
            src={isFav ? favHeatFilled : favHeat}
            className="fav-heat-icon"
          />
        </div>
      </div>
    )
  },
)

export default ItemCell
