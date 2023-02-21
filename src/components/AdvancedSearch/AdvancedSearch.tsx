import React, { useState } from 'react'

import CustomInput from './CustomInput/CustomInput'
import DropDown from './DropDown/DropDown'
import { type ItemKey } from '../../interface/Item'
import { useDataContext } from '../../store/DataContext'

import './AdvancedSearch.css'

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

const AdvancedSearch: React.FunctionComponent = () => {
  const dataContext = useDataContext()

  const [isSearchKey, setSearchKey] = useState<ItemKey>('title')

  const [title, setTitle] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const handleSearch = () => {
    dataContext?._dataStore.filterByAtr({
      title,
      description,
      price: parseInt(price) ?? -1,
      email,
      image: '',
      isFav: false,
    })
    dataContext?._dataStore.sortByKey(isSearchKey)
  }

  return (
    <div className="container">
      <div className="row">
        {CustomInputCell('title', title, setTitle)}
        {CustomInputCell('description', description, setDescription)}
      </div>
      <div className="row">
        {CustomInputCell('price', price, setPrice)}
        {CustomInputCell('email', email, setEmail)}
      </div>
      <div className="drop-down-row">
        <DropDown
          selctedItemKey={isSearchKey}
          setItemKey={setSearchKey}
        ></DropDown>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default AdvancedSearch
