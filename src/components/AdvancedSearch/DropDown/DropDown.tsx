import React, { useState } from 'react'

import chevronDown from '../../../assets/chevron-small-down-svgrepo-com.svg'
import chevronUp from '../../../assets/chevron-small-up-svgrepo-com.svg'
import { type ItemKey } from '../../../interface/Item'

interface DropDownI {
  selctedItemKey: string
  setItemKey: (key: ItemKey) => void
}
const itemsKeys: ItemKey[] = ['title', 'description', 'email', 'price']

const DropDown: React.FunctionComponent<DropDownI> = ({
  selctedItemKey,
  setItemKey,
}: DropDownI) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        width: '20%',
        height: '50px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <h3 style={{ margin: '0px' }}>{selctedItemKey}</h3>
      <button
        onClick={() => {
          setOpen(!open)
        }}
      >
        {!open ? (
          <img
            style={{ maxWidth: '64px' }}
            src={chevronDown}
            className="chevron"
          />
        ) : (
          <img
            style={{ maxWidth: '64px' }}
            src={chevronUp}
            className="chevron"
          />
        )}
      </button>
      <div
        style={{
          height: '30px',
          position: 'absolute',
          backgroundColor: 'white',
        }}
        hidden={!open}
      >
        {itemsKeys.map((item, key) => {
          return (
            <div
              key={key}
              style={{
                margin: 0,
                padding: 0,
                backgroundColor: 'white',
              }}
            >
              {key !== 0 && (
                <hr
                  style={{
                    margin: 0,
                    padding: 0,
                  }}
                ></hr>
              )}
              <h3
                style={{
                  margin: 0,
                  padding: 0,
                }}
                onClick={() => {
                  setItemKey(item)
                  setOpen(!open)
                }}
              >
                {item}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DropDown
