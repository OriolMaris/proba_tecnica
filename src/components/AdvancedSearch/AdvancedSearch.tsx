import React, { useState } from 'react'

import { observer } from 'mobx-react'

import CustomInputCell from './CustomInputCell/CustomInputCell'
import DropDown from './DropDown/DropDown'
import ItemCollection from './ItemCollection/ItemCollection'
import { type ItemI, type ItemKey } from '../../interface/Item'
import { useDataContext } from '../../store/DataContext'
import { filterByAtr, sortByKey } from '../../utils/utils'

import './AdvancedSearch.css'

const AdvancedSearch: React.FunctionComponent = observer(() => {
  const dataContext = useDataContext()

  const [isSearchKey, setSearchKey] = useState<ItemKey>('title')

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [form, setForm] = useState<ItemI>({
    title: '',
    description: '',
    image: '',
    price: '',
    email: '',
  })

  const handleSearch = () => {
    setSearchKey(isSearchKey)
    setForm({
      title,
      description,
      image: '',
      price,
      email,
    })
  }

  const items =
    sortByKey(filterByAtr(dataContext?._dataStore.data, form), isSearchKey) ??
    []

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
      <div>
        <div className="app-container">
          <ItemCollection searchedItems={items} />
        </div>
      </div>
    </div>
  )
})

export default AdvancedSearch
