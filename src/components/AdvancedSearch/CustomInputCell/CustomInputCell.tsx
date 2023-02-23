import React from 'react'

import CustomInput from './CustomInput/CustomInput'

import './CustomInputCell.css'
interface CustomInputCellI {
  name: string
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}
const CustomInputCell = ({ name, value, onChange }: CustomInputCellI) => {
  return (
    <div className="input-cell">
      <CustomInput name={name} onChange={onChange} value={value}></CustomInput>
    </div>
  )
}
export default CustomInputCell
