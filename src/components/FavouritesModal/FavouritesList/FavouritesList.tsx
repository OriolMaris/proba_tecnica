import React from 'react'

import { observer } from 'mobx-react'

import FavouriteItem from './FavouriteItem/FavouriteItem'
import { useDataContext } from '../../../store/DataContext'

const FavouritesList: React.FunctionComponent = observer(() => {
  const dataContext = useDataContext()
  const dataStore = dataContext?._dataStore

  return (
    <div>
      {dataStore?.getFavItems?.map((item, key) => {
        return <FavouriteItem key={key} favItem={item}></FavouriteItem>
      })}
    </div>
  )
})

export default FavouritesList
