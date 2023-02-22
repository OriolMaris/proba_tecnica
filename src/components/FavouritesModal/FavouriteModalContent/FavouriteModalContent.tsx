import React from 'react'

import { observer } from 'mobx-react'

import FavSimpleSearch from './FavSimpleSearch/FavSimpleSearch'

import './FavouriteModalContent.css'

const FavouriteModalContent: React.FunctionComponent = observer(() => {
  return (
    <div className="favourite-modal-content">
      <FavSimpleSearch />
    </div>
  )
})

export default FavouriteModalContent
