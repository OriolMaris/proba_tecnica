import React, { useEffect, useState } from 'react'

import { observer } from 'mobx-react'

import './FavSimpleSearch.css'
import FavouritesList from './FavouritesList/FavouritesList'
import { useDataContext } from '../../../../store/DataContext'
import { filterByAtr } from '../../../../utils/utils'
import CustomInputCell from '../../../AdvancedSearch/CustomInputCell/CustomInputCell'

const FavSimpleSearch: React.FunctionComponent = observer(() => {
  const dataContext = useDataContext()
  const store = dataContext?._dataStore

  const [title, setTitle] = useState<string>('')
  const [showList, setShowList] = useState<boolean>(false)

  const items = filterByAtr(dataContext?._dataStore.getFavItems, {
    title,
    description: '',
    image: '',
    price: '',
    email: '',
  })

  useEffect(() => {
    setShowList(store?.getFavHasData ?? false)
  }, [store?.getFavHasData])

  return (
    <div className="container">
      <div className="row">{CustomInputCell('title', title, setTitle)}</div>
      <div>
        <div className="app-container">
          {showList && items?.length !== 0 ? (
            <FavouritesList favList={items} />
          ) : (
            <h3>There are no fav matches</h3>
          )}
        </div>
      </div>
    </div>
  )
})

export default FavSimpleSearch
