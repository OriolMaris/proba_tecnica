import React from 'react'

import { configure, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App'

jest.mock('axios', () => jest.fn())

configure({ adapter: new Adapter() })
describe('App tests', () => {
  test('App render', () => {
    render(<App />)
  })
})
