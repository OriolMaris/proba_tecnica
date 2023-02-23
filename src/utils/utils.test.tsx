/* eslint-disable max-lines-per-function */
import { filterByAtr, sortByKey } from './utils'
import { type ItemI, type ItemDisplayI } from '../interface/Item'

describe('utils test', () => {
  const data: ItemDisplayI[] = [
    {
      title: 'iPhone 13 Pro',
      description: 'The latest and greatest iPhone yet',
      image: 'https://example.com/iphone-13-pro.jpg',
      price: 1299,
      email: 'seller@example.com',
      isFav: false,
    },
    {
      title: 'Samsung Galaxy S21',
      description: 'Powerful Android smartphone with 5G',
      image: 'https://example.com/galaxy-s21.jpg',
      price: 899,
      email: 'seller@example.com',
      isFav: false,
    },
    {
      title: 'MacBook Pro M1',
      description: "Apple's new laptop with their own processor",
      image: 'https://example.com/macbook-pro-m1.jpg',
      price: 1599,
      email: 'seller@example.com',
      isFav: false,
    },
  ]

  describe('filterByAtr', () => {
    it('filters data by title', () => {
      const filter: ItemI = {
        title: 'iPhone',
        image: '',
        description: '',
        price: '',
        email: '',
      }
      const expected = [
        {
          title: 'iPhone 13 Pro',
          description: 'The latest and greatest iPhone yet',
          image: 'https://example.com/iphone-13-pro.jpg',
          price: 1299,
          email: 'seller@example.com',
          isFav: false,
        },
      ]
      expect(filterByAtr(data, filter)).toEqual(expected)
    })

    it('filters data by description', () => {
      const filter: ItemI = {
        title: '',
        image: '',
        description: 'Powerful',
        price: '',
        email: '',
      }
      const expected = [
        {
          title: 'Samsung Galaxy S21',
          description: 'Powerful Android smartphone with 5G',
          image: 'https://example.com/galaxy-s21.jpg',
          price: 899,
          email: 'seller@example.com',
          isFav: false,
        },
      ]
      expect(filterByAtr(data, filter)).toEqual(expected)
    })

    it('filters data by price', () => {
      const filter: ItemI = {
        title: '',
        image: '',
        description: '',
        price: '1599',
        email: '',
      }
      const expected = [
        {
          title: 'MacBook Pro M1',
          description: "Apple's new laptop with their own processor",
          image: 'https://example.com/macbook-pro-m1.jpg',
          price: 1599,
          email: 'seller@example.com',
          isFav: false,
        },
      ]
      expect(filterByAtr(data, filter)).toEqual(expected)
    })

    it('filters data by email', () => {
      const filter: ItemI = {
        title: '',
        image: '',
        description: '',
        price: '',
        email: 'seller@example.com',
      }
      const expected = [
        {
          title: 'iPhone 13 Pro',
          description: 'The latest and greatest iPhone yet',
          image: 'https://example.com/iphone-13-pro.jpg',
          price: 1299,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'Samsung Galaxy S21',
          description: 'Powerful Android smartphone with 5G',
          image: 'https://example.com/galaxy-s21.jpg',
          price: 899,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'MacBook Pro M1',
          description: "Apple's new laptop with their own processor",
          image: 'https://example.com/macbook-pro-m1.jpg',
          price: 1599,
          email: 'seller@example.com',
          isFav: false,
        },
      ]
      expect(filterByAtr(data, filter)).toEqual(expected)
    })

    it('returns all data if no filter is provided', () => {
      const filter: ItemI = {
        title: '',
        image: '',
        description: '',
        price: '',
        email: '',
      }
      const expected = [
        {
          title: 'iPhone 13 Pro',
          description: 'The latest and greatest iPhone yet',
          image: 'https://example.com/iphone-13-pro.jpg',
          price: 1299,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'Samsung Galaxy S21',
          description: 'Powerful Android smartphone with 5G',
          image: 'https://example.com/galaxy-s21.jpg',
          price: 899,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'MacBook Pro M1',
          description: "Apple's new laptop with their own processor",
          image: 'https://example.com/macbook-pro-m1.jpg',
          price: 1599,
          email: 'seller@example.com',
          isFav: false,
        },
      ]
      expect(filterByAtr(data, filter)).toEqual(expected)
    })

    it('returns [] if filter has no matches', () => {
      const filter: ItemI = {
        title: 'No WAY this NAme exists',
        image: '',
        description: '',
        price: '',
        email: '',
      }
      expect(filterByAtr(data, filter)).toEqual([])
    })
  })

  describe('sortByKey', () => {
    it('sorts data by title in ascending order', () => {
      const expected = [
        {
          title: 'MacBook Pro M1',
          description: "Apple's new laptop with their own processor",
          image: 'https://example.com/macbook-pro-m1.jpg',
          price: 1599,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'Samsung Galaxy S21',
          description: 'Powerful Android smartphone with 5G',
          image: 'https://example.com/galaxy-s21.jpg',
          price: 899,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'iPhone 13 Pro',
          description: 'The latest and greatest iPhone yet',
          image: 'https://example.com/iphone-13-pro.jpg',
          price: 1299,
          email: 'seller@example.com',
          isFav: false,
        },
      ]
      expect(sortByKey(data, 'title')).toEqual(expected)
    })

    it('sorts data by price in ascending order', () => {
      const expected = [
        {
          title: 'Samsung Galaxy S21',
          description: 'Powerful Android smartphone with 5G',
          image: 'https://example.com/galaxy-s21.jpg',
          price: 899,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'iPhone 13 Pro',
          description: 'The latest and greatest iPhone yet',
          image: 'https://example.com/iphone-13-pro.jpg',
          price: 1299,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'MacBook Pro M1',
          description: "Apple's new laptop with their own processor",
          image: 'https://example.com/macbook-pro-m1.jpg',
          price: 1599,
          email: 'seller@example.com',
          isFav: false,
        },
      ]
      expect(sortByKey(data, 'price')).toEqual(expected)
    })

    it('sorts data by description in ascending order', () => {
      const expected = [
        {
          title: 'MacBook Pro M1',
          description: "Apple's new laptop with their own processor",
          image: 'https://example.com/macbook-pro-m1.jpg',
          price: 1599,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'Samsung Galaxy S21',
          description: 'Powerful Android smartphone with 5G',
          image: 'https://example.com/galaxy-s21.jpg',
          price: 899,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'iPhone 13 Pro',
          description: 'The latest and greatest iPhone yet',
          image: 'https://example.com/iphone-13-pro.jpg',
          price: 1299,
          email: 'seller@example.com',
          isFav: false,
        },
      ]
      expect(sortByKey(data, 'description')).toEqual(expected)
    })

    it('sorts data by email in ascending order', () => {
      const expected = [
        {
          title: 'iPhone 13 Pro',
          description: 'The latest and greatest iPhone yet',
          image: 'https://example.com/iphone-13-pro.jpg',
          price: 1299,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'Samsung Galaxy S21',
          description: 'Powerful Android smartphone with 5G',
          image: 'https://example.com/galaxy-s21.jpg',
          price: 899,
          email: 'seller@example.com',
          isFav: false,
        },
        {
          title: 'MacBook Pro M1',
          description: "Apple's new laptop with their own processor",
          image: 'https://example.com/macbook-pro-m1.jpg',
          price: 1599,
          email: 'seller@example.com',
          isFav: false,
        },
      ]
      expect(sortByKey(data, 'email')).toEqual(expected)
    })

    it('return [] if data is undefined', () => {
      expect(sortByKey(undefined, 'email')).toEqual([])
    })
  })
})
