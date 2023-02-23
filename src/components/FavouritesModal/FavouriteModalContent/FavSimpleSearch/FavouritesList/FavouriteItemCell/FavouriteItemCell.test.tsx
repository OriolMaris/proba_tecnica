import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FavouriteItemCell from './FavouriteItemCell'
import DataContext from '../../../../../../store/DataContext'

configure({ adapter: new Adapter() })
describe('FavouriteItemCell component', () => {
  const mockFavItem = {
    title: 'testTitle',
    description: 'testDes',
    image: 'testImage.jpg',
    price: 10,
    email: 'test@xx.xx',
    isFav: true,
  }

  it('should render the correct data', () => {
    const wrapper = shallow(<FavouriteItemCell favItem={mockFavItem} />, {
      wrappingComponent: DataContext.Provider,
      wrappingComponentProps: { value: { _dataStore: {} } },
    })

    expect(wrapper.find('img').at(0).prop('src')).toEqual('testImage.jpg')
    expect(wrapper.find('h2').text()).toEqual('testTitle')
  })
})
