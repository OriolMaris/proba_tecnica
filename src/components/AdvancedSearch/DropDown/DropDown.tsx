import React, { useState } from 'react'

import DropDownCell from './DropDownCell/DropDownCell'
import chevronDown from '../../../assets/chevron-small-down-svgrepo-com.svg'
import chevronUp from '../../../assets/chevron-small-up-svgrepo-com.svg'
import { type ItemKey } from '../../../interface/Item'

import './DropDown.css'

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

  const chevronDownSVG = (
    <img style={{ maxWidth: '32px' }} src={chevronDown} className="chevron" />
  )
  const chevronUpSVG = (
    <img style={{ maxWidth: '32px' }} src={chevronUp} className="chevron" />
  )

  return (
    <div className="drop-down-wrapper">
      <h3 style={{ margin: '0px' }}>{selctedItemKey}</h3>
      <button
        onClick={() => {
          setOpen(!open)
        }}
      >
        {!open ? chevronDownSVG : chevronUpSVG}
      </button>
      <div className="drop-down-content" hidden={!open}>
        {itemsKeys.map((item, key) => {
          return (
            <DropDownCell
              key={key}
              item={item}
              onClick={() => {
                setItemKey(item)
                setOpen(!open)
              }}
            ></DropDownCell>
          )
        })}
      </div>
    </div>
  )
}

export default DropDown
