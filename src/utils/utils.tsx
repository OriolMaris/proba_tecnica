import { type ItemKey, type ItemDisplayI, type ItemI } from '../interface/Item'

export const getObjectKeys = <T extends Object>(obj: T): Array<keyof T> => {
  return Object.keys(obj) as Array<keyof T>
}

export const filterByAtr = (
  data: ItemDisplayI[] | undefined,
  { title, description = '', price = '', email = '' }: ItemI,
) => {
  const filteredItem = data?.filter((value) => {
    if (
      title !== '' &&
      !value.title.toLowerCase().startsWith(title.toLowerCase())
    )
      return false
    if (
      description !== '' &&
      !value.description.toLowerCase().startsWith(description.toLowerCase())
    )
      return false

    if (parseInt(price) > 0 && value.price !== parseInt(price)) return false
    if (email !== '' && !value.email.startsWith(email)) return false
    return true
  })
  return filteredItem
}
export const sortByKey = (data: ItemDisplayI[] | undefined, key: ItemKey) => {
  return (
    data?.sort((a: ItemDisplayI, b: ItemDisplayI) => {
      if (a[key] > b[key]) return 0
      else return -1
    }) ?? []
  )
}
