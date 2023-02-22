import React from 'react'

import { observer } from 'mobx-react'

import FavouriteItemCell from './FavouriteItemCell/FavouriteItemCell'
import { type ItemDisplayI } from '../../../../../interface/Item'

interface FavouritesListI {
  favList: ItemDisplayI[] | undefined
}

const FavouritesList: React.FunctionComponent<FavouritesListI> = observer(
  ({ favList }) => {
    return (
      <div>
        {favList?.map((item, key) => {
          return (
            <FavouriteItemCell key={key} favItem={item}></FavouriteItemCell>
          )
        })}
      </div>
    )
  },
)

export default FavouritesList
