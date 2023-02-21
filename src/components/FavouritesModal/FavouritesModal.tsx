import React, { useState } from 'react'

import FavouriteModalContent from './FavouriteModalContent/FavouriteModalContent'

import './FavouritesModal.css'

const FavouritesModal: React.FunctionComponent = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="fav-modal">
      <div style={{ position: 'relative', display: 'flex', flex: 1 }}>
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            backgroundColor: '#13C1AC',
            width: '100%',
            justifyContent: 'center',
            borderTopLeftRadius: '25px',
            borderTopRightRadius: '25px',
          }}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <p>{open ? 'Close' : 'Open'}</p>
        </div>
        {open && (
          <div style={{ display: 'flex', flex: 1, paddingTop: '7%' }}>
            <FavouriteModalContent></FavouriteModalContent>
          </div>
        )}
      </div>
    </div>
  )
}

export default FavouritesModal
