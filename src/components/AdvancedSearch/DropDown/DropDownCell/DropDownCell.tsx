import React from 'react'

import { type ItemKey } from '../../../../interface/Item'

import './DropDownCell.css'

export interface DropDownCellI {
  item: ItemKey
  onClick: () => void
}

const DropDownCell: React.FunctionComponent<DropDownCellI> = ({
  item,
  onClick,
}) => {
  return (
    <div className="drop-down-cell" onClick={onClick}>
      <h3>{item}</h3>
    </div>
  )
}

export default DropDownCell
