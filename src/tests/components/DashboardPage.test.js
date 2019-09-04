import { shallow } from 'enzyme'
import React from 'react'
import { DashboardPage } from '../../components/DashboardPage'

test('Should render daily summaries',()=>{
    const wrapper = shallow(<DashboardPage />)
    expect(wrapper).toMatchSnapshot()
})

test('Should call history with correct props',()=>{
    const history = { push: jest.fn() }
    const wrapper = shallow(<DashboardPage logins={0} targetsCompleted={true} history={history} />)
    expect(history.push).not.toHaveBeenCalled()
    wrapper.setProps({ logins:1, targetsCompleted:false})
    expect(history.push).toHaveBeenLastCalledWith('/update-targets')
})

