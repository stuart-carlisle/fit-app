import React from 'react'
import { shallow } from 'enzyme'
import { AddExerciseConfirmationPage   } from '../../components/AddExerciseConfirmationPage'
import exercises from '../fixtures/exercises'
import moment from 'moment'

test('Should render AddExerciseConfirmationPage with props correctly',()=>{
    const startAddExercisePrivate = jest.fn()
    const startUpdateExercisePrivate = jest.fn()
    const startAddExerciseDiary = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(
        <AddExerciseConfirmationPage 
            startAddExerciseDiary={startAddExerciseDiary}
            startAddExercisePrivate={startAddExercisePrivate} 
            startUpdateExercisePrivate={startUpdateExercisePrivate}
            history={history}
            exercise={exercises[1]}
        />
    )
    expect(wrapper).toMatchSnapshot()
})

test('Should handle add exercise from private exercises',()=>{
    const filters =  {
        date:moment(0).startOf('day'),
        text: '',
        sortBy: 'date',
        referenceDatabase: 'private',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'breakfast'
    }

    const startAddExercisePrivate = jest.fn()
    const startUpdateExercisePrivate = jest.fn()
    const startAddExerciseDiary = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(
        <AddExerciseConfirmationPage 
            startAddExerciseDiary={startAddExerciseDiary}
            startAddExercisePrivate={startAddExercisePrivate} 
            startUpdateExercisePrivate={startUpdateExercisePrivate}
            history={history}
            exercise={exercises[1]}
        />
    )
    wrapper.find('#add-exercise-form').prop('onSubmit')(filters.referenceDatabase, filters.date.valueOf(), moment().valueOf(), {description:exercises[1].description,type:exercises[1].type}, exercises[1].time, exercises[1].energy)
    expect(startUpdateExercisePrivate).toHaveBeenLastCalledWith(
            exercises[1].id,
            { 
                description: exercises[1].description,
                type: exercises[1].type,
                time: exercises[1].time,
                energy: exercises[1].energy,
                lastUsed:moment().valueOf()
            }
             
        )
    expect(startAddExerciseDiary).toHaveBeenLastCalledWith(
            { 
                description: exercises[1].description,
                type: exercises[1].type,
                time: exercises[1].time,
                energy: exercises[1].energy,
                diaryDate:filters.date.valueOf()
            }
    )
    expect(startAddExercisePrivate).not.toHaveBeenCalled()
    expect(history.push).toHaveBeenLastCalledWith('/diary')
})

test('Should handle add exercise from public exercises',()=>{
    const filters = {
        date:moment(0).add(4, 'days').startOf('day'),
        text: '',
        sortBy: 'date',
        referenceDatabase: 'public',
        chartType: {
            chart: 'calorie-tracker', 
            option: 'week'
        },
        meal: 'lunch'
    }
    const startAddExercisePrivate = jest.fn()
    const startUpdateExercisePrivate = jest.fn()
    const startAddExerciseDiary = jest.fn()
    const history = { push: jest.fn() }
    const wrapper = shallow(
        <AddExerciseConfirmationPage 
            startAddExerciseDiary={startAddExerciseDiary}
            startAddExercisePrivate={startAddExercisePrivate} 
            startUpdateExercisePrivate={startUpdateExercisePrivate}
            history={history}
            exercise={exercises[1]}
        />
    )
    wrapper.find('#add-exercise-form').prop('onSubmit')(filters.referenceDatabase, filters.date.valueOf(), moment().valueOf(), {description:exercises[1].description,type:exercises[1].type}, exercises[1].time, exercises[1].energy)
    expect(startAddExercisePrivate).toHaveBeenLastCalledWith(
            { 
                description: exercises[1].description,
                type: exercises[1].type,
                time: exercises[1].time,
                energy: exercises[1].energy,
                lastUsed:moment().valueOf()
            }
             
        )
    expect(startAddExerciseDiary).toHaveBeenLastCalledWith(
        { 
            description: exercises[1].description,
            type: exercises[1].type,
            time: exercises[1].time,
            energy: exercises[1].energy,
            diaryDate:filters.date.valueOf()
        }
    )
    expect(startUpdateExercisePrivate).not.toHaveBeenCalled()
    expect(history.push).toHaveBeenLastCalledWith('/diary')
})
