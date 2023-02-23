import React from 'react'

import { configure, shallow, type ShallowWrapper } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import DropDown from './DropDown'
import DropDownCell from './DropDownCell/DropDownCell'

configure({ adapter: new Adapter() })
describe('DropDown', () => {
  let wrapper: ShallowWrapper
  const setItemKey = jest.fn()

  beforeEach(() => {
    wrapper = shallow(
      <DropDown selctedItemKey="title" setItemKey={setItemKey} />,
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render a wrapper div, a heading, a button and a dropdown content div', () => {
    expect(wrapper.find('.drop-down-wrapper')).toHaveLength(1)
    expect(wrapper.find('h3')).toHaveLength(1)
    expect(wrapper.find('button')).toHaveLength(1)
    expect(wrapper.find('.drop-down-content')).toHaveLength(1)
  })

  it('should render a chevron-down icon when the dropdown is closed, and a chevron-up icon when it is open', () => {
    expect(wrapper.find('.chevron').prop('src')).toContain(
      'chevron-small-down-svgrepo-com.svg',
    )

    wrapper.find('button').simulate('click')
    expect(wrapper.find('.chevron').prop('src')).toContain(
      'chevron-small-up-svgrepo-com.svg',
    )

    wrapper.find('button').simulate('click')
    expect(wrapper.find('.chevron').prop('src')).toContain(
      'chevron-small-down-svgrepo-com.svg',
    )
  })

  it('should render a DropDownCell for each item key in itemsKeys', () => {
    expect(wrapper.find(DropDownCell)).toHaveLength(4)
    expect(wrapper.find(DropDownCell).at(0).prop('item')).toEqual('title')
    expect(wrapper.find(DropDownCell).at(1).prop('item')).toEqual('description')
    expect(wrapper.find(DropDownCell).at(2).prop('item')).toEqual('email')
    expect(wrapper.find(DropDownCell).at(3).prop('item')).toEqual('price')
  })

  it('should call setItemKey and close the dropdown content when a DropDownCell is clicked', () => {
    expect(wrapper.find('.drop-down-content').prop('hidden')).toBe(true)
    wrapper.find(DropDownCell).at(1).simulate('click')
    expect(setItemKey).toHaveBeenCalledWith('description')
    expect(wrapper.find('.drop-down-content').prop('hidden')).toBe(false)
  })
})
