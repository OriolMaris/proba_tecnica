import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import DropDownCell, { type DropDownCellI } from './DropDownCell'

configure({ adapter: new Adapter() })
describe('DropDownCell', () => {
  const props: DropDownCellI = {
    item: 'title',
    onClick: jest.fn(),
  }

  it('should render a div with the correct class and text', () => {
    const wrapper = shallow(<DropDownCell {...props} />)
    expect(wrapper.find('div').hasClass('drop-down-cell')).toBeTruthy()
    expect(wrapper.find('h3').text()).toEqual(props.item)
  })

  it('should call onClick prop when div is clicked', () => {
    const wrapper = shallow(<DropDownCell {...props} />)
    wrapper.find('div').simulate('click')
    expect(props.onClick).toHaveBeenCalled()
  })
})
