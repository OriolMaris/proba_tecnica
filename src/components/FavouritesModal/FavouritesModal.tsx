import React, { useState } from 'react'

import FavouriteModalContent from './FavouriteModalContent/FavouriteModalContent'

import './FavouritesModal.css'

const FavouritesModal: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fav-modal">
      <div className="fav-modal-wrapper">
        <div
          className="fav-modal-button-wrapper"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
        {open && (
          <div className="fav-modal-content">
            <FavouriteModalContent></FavouriteModalContent>
          </div>
        )}
      </div>
    </div>
  )
}

export default FavouritesModal
