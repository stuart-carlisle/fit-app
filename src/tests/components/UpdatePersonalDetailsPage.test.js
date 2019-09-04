import React from 'react'
import { shallow } from 'enzyme'
import { UpdatePersonalDetailsPage   } from '../../components/UpdatePersonalDetailsPage'
import moment from 'moment'

let wrapper, startUpdateWeight, history

beforeEach(()=>{
    startUpdateWeight = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <UpdatePersonalDetailsPage 
            startUpdateWeight={startUpdateWeight}
            history={history}
        />
    )
})

test('Should render UpdatePersonalDetailsPage with props correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should update weight on submission',()=>{
    const weight='94'
    const date=moment().add(2,'days')
    wrapper.find('UpdatePersonalDetailsForm').prop('onSubmit')(weight,date)
    const newDate = date.startOf('day').format('x')
    expect(startUpdateWeight).toHaveBeenLastCalledWith(weight,newDate)
    expect(history.push).toHaveBeenLastCalledWith('/')
})
