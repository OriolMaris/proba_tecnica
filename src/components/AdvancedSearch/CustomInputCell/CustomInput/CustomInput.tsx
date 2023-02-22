import React from 'react'

export interface CustomInputI {
  name: string
  value: string
  onChange: (e: string) => void
}
const CustomInput = ({ name, value, onChange }: CustomInputI) => {
  return (
    <>
      <p>{name}</p>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      ></input>
    </>
  )
}
export default CustomInput
