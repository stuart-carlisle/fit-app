import { shallow } from 'enzyme'
import React from 'react'
import { NotFoundPage } from '../../components/NotFoundPage'

test('Should render expense list with expenses',()=>{
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})