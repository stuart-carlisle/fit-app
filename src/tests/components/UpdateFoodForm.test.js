import React from 'react'
import { shallow } from 'enzyme'
import { UpdateFoodForm  } from '../../components/UpdateFoodForm'
import foods from '../fixtures/foods'
import targets from '../fixtures/targets'

test('Should render update food form correctly',()=>{
    const wrapper = shallow(<UpdateFoodForm targets={targets}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render update food form with food data',()=>{
    const {id,lastUsed,...food} = foods[0]
    const wrapper = shallow(<UpdateFoodForm food={food} targets={targets}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render correctly for invalid numberOfServings entered',()=>{
    const {id,lastUsed,...food} = foods[0]
    const onSubmit = jest.fn()
    const value = '-3'
    const wrapper = shallow(<UpdateFoodForm food={food} targets={targets} onSubmit={onSubmit} />)
    wrapper.find('input').at(0).simulate('change',{
                target: { value }
            })
    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.find('input').at(0).prop('value')).toBe('1')
})


test('Should simulate form completion and call onSubmit for valid form submission with changes',()=>{
   
    const {id,lastUsed,...food} = foods[0]
    const onSubmit = jest.fn()
    const value = '12'
    const wrapper = shallow(<UpdateFoodForm food={food} targets={targets} onSubmit={onSubmit} />)
    
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    })

    wrapper.find('form').simulate('submit',{
        preventDefault:() => { }
    })
    expect(wrapper.exists('#error-message')).toBe(false);
    expect(onSubmit).toHaveBeenLastCalledWith(
       value,
        { 
            description: food.description,
            nutrition: food.nutrition,
            serving:food.serving
        }
    )
})

test('should call onRemove when remove button is clicked',()=>{
    const {id,lastUsed, ...food} = foods[0]
    const onRemove = jest.fn()
    const wrapper = shallow(<UpdateFoodForm food={food} targets={targets} onRemove={onRemove}/>)
    wrapper.find('button').at(1).simulate('click',{
        preventDefault:() => { }
    })
    expect(onRemove).toHaveBeenCalled()
})