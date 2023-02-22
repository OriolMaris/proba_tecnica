import React from 'react'

import CustomInput from './CustomInput/CustomInput'

import './CustomInputCell.css'

const CustomInputCell = (
  name: string,
  value: string,
  onChange: React.Dispatch<React.SetStateAction<string>>,
) => {
  return (
    <div className="input-cell">
      <CustomInput name={name} onChange={onChange} value={value}></CustomInput>
    </div>
  )
}
export default CustomInputCell
