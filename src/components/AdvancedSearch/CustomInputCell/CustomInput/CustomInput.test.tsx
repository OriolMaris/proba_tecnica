import React from 'react'

import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CustomInput, { type CustomInputI } from './CustomInput'

configure({ adapter: new Adapter() })
describe('CustomInput', () => {
  const props: CustomInputI = {
    name: 'name',
    value: '',
    onChange: jest.fn(),
  }

  it('should render an input field with the correct name and value props', () => {
    const wrapper = shallow(<CustomInput {...props} />)
    expect(wrapper.find('p').text()).toEqual(props.name)
    expect(wrapper.find('input').prop('value')).toEqual(props.value)
  })

  it('should call onChange prop when input value changes', () => {
    const wrapper = shallow(<CustomInput {...props} />)
    wrapper.find('input').simulate('change', { target: { value: 'newValue' } })
    expect(props.onChange).toHaveBeenCalledWith('newValue')
  })
})
