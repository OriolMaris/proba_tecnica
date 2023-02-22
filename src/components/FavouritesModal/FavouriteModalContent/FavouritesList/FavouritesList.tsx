import React from 'react'

import { observer } from 'mobx-react'

import FavouriteItemCell from './FavouriteItemCell/FavouriteItemCell'
import { useDataContext } from '../../../../store/DataContext'

const FavouritesList: React.FunctionComponent = observer(() => {
  const dataContext = useDataContext()
  const dataStore = dataContext?._dataStore

  return (
    <div>
      {dataStore?.getFavItems?.map((item, key) => {
        return <FavouriteItemCell key={key} favItem={item}></FavouriteItemCell>
      })}
    </div>
  )
})

export default FavouritesList
