import React, { useEffect, useState } from 'react'

import { observer } from 'mobx-react'

import ItemCell from './ItemCell/ItemCell'
import { type ItemDisplayI } from '../../../interface/Item'
import { useDataContext } from '../../../store/DataContext'

interface ItemCollectionI {
  searchedItems: ItemDisplayI[]
}

const ItemCollection: React.FunctionComponent<ItemCollectionI> = observer(
  ({ searchedItems }) => {
    const dataContext = useDataContext()
    const dataStore = dataContext?._dataStore
    const [startIndex, setStartIndex] = useState(0)

    const handleFavButton = (item: ItemDisplayI) => {
      dataStore?.handleFavButton(item)
    }

    useEffect(() => {
      const handleScroll = () => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 2 >=
          document.documentElement.offsetHeight
        ) {
          setStartIndex((value) => value + 5)
        }
      }

      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    const visibleItems = searchedItems.slice(0, startIndex + 5)

    return (
      <div>
        {visibleItems.map((item, key) => {
          return (
            <ItemCell
              key={key}
              item={item}
              onClickFav={() => {
                handleFavButton(item)
              }}
            />
          )
        })}
      </div>
    )
  },
)

export default ItemCollection
