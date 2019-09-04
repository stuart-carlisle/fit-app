import React from 'react'
import { shallow } from 'enzyme'
import { UpdatePersonalDetailsForm  } from '../../components/UpdatePersonalDetailsForm'
import  moment from 'moment'

let wrapper, onSubmit

beforeEach(()=>{
    onSubmit=jest.fn()
    wrapper = shallow(<UpdatePersonalDetailsForm onSubmit={onSubmit}/>)
})

test('Should render update personal details form correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should set weight on weight change',()=>{
    const value='94'
    wrapper.find('input').simulate('change',{
                target: { value }
            })
    expect(wrapper.find('input').prop('value')).toBe(value)
})

test('Should set weight on invalid weight change',()=>{
    const value='94.478'
    wrapper.find('input').simulate('change',{
                target: { value }
            })
    expect(wrapper.find('input').prop('value')).toBe('')
})

test('Should set date correctly on date change',()=>{
    const now = moment().add(2,'days')
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.find('withStyles(SingleDatePicker)').prop('date')).toEqual(now)
})

test('Should set calendar on change',()=>{
    const focused = true
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focused})
    expect(wrapper.find('withStyles(SingleDatePicker)').prop('focused')).toEqual(focused)
})

test('Should render error for invalid form submission',()=>{
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(true);
})

test('Should simulate form completion and call onSubmit prop for valid form submission',()=>{
    const value='94'
    wrapper.find('input').simulate('change',{
        target: { value: value }
    })
    const now = moment().add(2,'days')
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(false);
    expect(onSubmit).toHaveBeenLastCalledWith(value,now)
})

