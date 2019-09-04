import React from 'react'
import { shallow } from 'enzyme'
import { CreateExercisePage   } from '../../components/CreateExercisePage'
import exercises from '../fixtures/exercises'

test('Should render CreateExercisePage with props correctly',()=>{
    const startAddExercisePrivate = jest.fn()
    const startAddExerciseDiary = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(
        <CreateExercisePage 
            startAddExerciseDiary={startAddExerciseDiary}
            startAddExercisePrivate={startAddExercisePrivate} 
            history={history}
        />
    )
    expect(wrapper).toMatchSnapshot()
})

test('should call the startAddExercisePrivate and startAddExerciseDiary actions when submitted',()=>{
    const {id, ...exercise} = exercises[0]
    const privateExercise = {
        ...exercise,
        description: exercise.description.toUpperCase()
    }
    const startAddExercisePrivate = jest.fn()
    const startAddExerciseDiary = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(
        <CreateExercisePage 
            startAddExerciseDiary={startAddExerciseDiary}
            startAddExercisePrivate={startAddExercisePrivate} 
            history={history}
        />
    )
    wrapper.find('#exercise-form').prop('onSubmit')(privateExercise)
    expect(startAddExercisePrivate).toHaveBeenLastCalledWith(privateExercise)
    expect(startAddExerciseDiary).toHaveBeenLastCalledWith(privateExercise)
    expect(history.push).toHaveBeenCalledWith('/diary')
})



