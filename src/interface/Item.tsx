export interface ItemI {
  title: string
  description: string
  image: string
  price: string
  email: string
}

export interface ItemDisplayI {
  title: string
  description: string
  image: string
  price: number
  email: string
  isFav: boolean
}

export type ItemKey = keyof ItemI

export interface favItemI {
  title: string
  image: string
}

// export interface ItemsKeys {
//   [key: string]: ItemKey
// }
