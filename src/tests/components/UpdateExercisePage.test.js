import React from 'react'
import { shallow } from 'enzyme'
import { UpdateExercisePage  } from '../../components/UpdateExercisePage'
import exercises from '../fixtures/exercises'

let startUpdateExerciseDiary, startRemoveExerciseDiary, history, wrapper

beforeEach(()=>{
    startUpdateExerciseDiary = jest.fn()
    startRemoveExerciseDiary = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <UpdateExercisePage 
            startUpdateExerciseDiary={startUpdateExerciseDiary} 
            startRemoveExerciseDiary={startRemoveExerciseDiary}
            history={history}
            exercise={exercises[1]}
        />
    )
})

test('Should render UpdateExercisePage correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should handle update Exercise',()=>{
    wrapper.find('#update-exercise-form').prop('onSubmit')(exercises[1])
    expect(history.push).toHaveBeenLastCalledWith('/diary')
    expect(startUpdateExerciseDiary).toHaveBeenLastCalledWith(exercises[1].id,exercises[1])
})