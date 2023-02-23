import React from 'react'

import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CustomInput from './CustomInput/CustomInput'
import CustomInputCell from './CustomInputCell'

configure({ adapter: new Adapter() })
describe('CustomInputCell f ', () => {
  it('should render a CustomInput component with the correct props', () => {
    const name = 'name'
    const value = 'Value'
    const onChange = jest.fn()
    const wrapper = mount(
      <CustomInputCell name={name} value={value} onChange={onChange} />,
    )
    expect(wrapper.find(CustomInput)).toHaveLength(1)
    expect(wrapper.find(CustomInput).prop('name')).toEqual(name)
    expect(wrapper.find(CustomInput).prop('value')).toEqual(value)
    expect(wrapper.find(CustomInput).prop('onChange')).toEqual(onChange)
  })
})
