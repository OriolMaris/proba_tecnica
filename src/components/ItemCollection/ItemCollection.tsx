import React from 'react'

import { observer } from 'mobx-react'

import { type ItemDisplayI } from '../../interface/Item'
import { useDataContext } from '../../store/DataContext'
import ItemCell from '../ItemDisplay/ItemCell'

interface ItemCollectionI {
  pageNumber: number
}

const ItemCollection: React.FunctionComponent<ItemCollectionI> = observer(
  ({ pageNumber }) => {
    const dataContext = useDataContext()
    const dataStore = dataContext?._dataStore

    const handleFavButton = (item: ItemDisplayI) => {
      dataStore?.handleFavButton(item)
    }

    // reaction(
    //   () => dataStore?.sortedData.slice(0, 4 * pageNumber),
    //   (data) => {
    //     console.log(data)
    //     setItemsCollection(data)
    //   },
    // )

    // useEffect(() => {
    //   // setItemsCollection(data)
    //   console.log('alexxx')
    // }, [pageNumber])

    return (
      <div style={{ overflow: 'scroll' }}>
        {dataStore?.filteredData?.map((item, key) => {
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
