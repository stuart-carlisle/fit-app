import React from 'react'
import { mount, shallow } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { DailySummaryItemDiary  } from '../../components/DailySummaryItemDiary'
import targets from '../fixtures/targets'
import moment from 'moment'

test('Should render daily summary item correctly',()=>{
    const dailyTotal = 640
    const exerciseDailyTotal = 340
    const date = moment().subtract(1,'days').startOf('day')
    const setDateFilter = jest.fn()

    const wrapper = shallow(<DailySummaryItemDiary 
            setDateFilter={setDateFilter}
            dailyTotal={dailyTotal}
            exerciseDailyTotal={exerciseDailyTotal}
            date={date}
            targets={targets}
        />)
    expect(wrapper).toMatchSnapshot()
})


test('Should render display date correctly',()=>{
    const dailyTotal = 640
    const exerciseDailyTotal = 340
    const date = moment().subtract(1,'days').startOf('day')
    const setDateFilter = jest.fn()
    const displayDate = 'YESTERDAY'

    const wrapper = mount(
        <MemoryRouter>
        <DailySummaryItemDiary
            setDateFilter={setDateFilter}
            dailyTotal={dailyTotal}
            exerciseDailyTotal={exerciseDailyTotal}
            date={date}
            targets={targets}
        />
        </MemoryRouter>
    )
    expect(wrapper.find('#display-date-mobile').text()).toBe(displayDate)
    expect(wrapper.find('#display-date-tablet').text()).toBe(displayDate)
    expect(wrapper.find('#display-date-desktop').text()).toBe(displayDate)

    const date2 = moment().startOf('day')
    const displayDate2 = 'TODAY'

    const wrapper2 = mount(
        <MemoryRouter>
        <DailySummaryItemDiary
            setDateFilter={setDateFilter}
            dailyTotal={dailyTotal}
            exerciseDailyTotal={exerciseDailyTotal}
            date={date2}
            targets={targets}
        />
        </MemoryRouter>
    )
    expect(wrapper2.find('#display-date-mobile').text()).toBe(displayDate2)
    expect(wrapper2.find('#display-date-tablet').text()).toBe(displayDate2)
    expect(wrapper2.find('#display-date-desktop').text()).toBe(displayDate2)

    const date3 = moment().subtract(2,'days').startOf('day')
    const displayDate3 = '30th Dec'

    const wrapper3 = mount(
        <MemoryRouter>
        <DailySummaryItemDiary
            setDateFilter={setDateFilter}
            dailyTotal={dailyTotal}
            exerciseDailyTotal={exerciseDailyTotal}
            date={date3}
            targets={targets}
        />
        </MemoryRouter>
    )
    expect(wrapper3.find('#display-date-mobile').text()).toBe(displayDate3)
    expect(wrapper3.find('#display-date-tablet').text()).toBe(displayDate3)
    expect(wrapper3.find('#display-date-desktop').text()).toBe(displayDate3)

    const date4 = moment().add(1,'days').startOf('day')
    const displayDate4 = 'TOMORROW'

    const wrapper4 = mount(
        <MemoryRouter>
        <DailySummaryItemDiary
            setDateFilter={setDateFilter}
            dailyTotal={dailyTotal}
            exerciseDailyTotal={exerciseDailyTotal}
            date={date4}
            targets={targets}
        />
        </MemoryRouter>
    )
    expect(wrapper4.find('#display-date-mobile').text()).toBe(displayDate4)
    expect(wrapper4.find('#display-date-tablet').text()).toBe(displayDate4)
    expect(wrapper4.find('#display-date-desktop').text()).toBe(displayDate4)
})

test('Should render values correctly on the daily summary item',()=>{
    const dailyTotal = 640.23
    const exerciseDailyTotal = 340.82
    const date = moment().subtract(1,'days').startOf('day')
    const setDateFilter = jest.fn()

    const wrapper = mount(
        <MemoryRouter>
            <DailySummaryItemDiary 
                setDateFilter={setDateFilter}
                dailyTotal={dailyTotal}
                exerciseDailyTotal={exerciseDailyTotal}
                date={date}
                targets={targets}
            />
        </MemoryRouter>
    )
    expect(wrapper.find('#target').text()).toBe('2000')
    expect(wrapper.find('#daily-total').text()).toBe('640')
    expect(wrapper.find('#exercise-daily-total').text()).toBe('341')
    expect(wrapper.find('#difference').text()).toBe('1701')
})


test('Should call setDateFilter with date', ()=>{
    const dailyTotal = 640.23
    const exerciseDailyTotal = 340.82
    const date = moment().subtract(1,'days').startOf('day')
    const setDateFilter = jest.fn()

    const wrapper = mount(
        <MemoryRouter>
            <DailySummaryItemDiary 
                setDateFilter={setDateFilter}
                dailyTotal={dailyTotal}
                exerciseDailyTotal={exerciseDailyTotal}
                date={date}
                targets={targets}
            />
        </MemoryRouter>
    )

    wrapper.find('.header__content2').simulate('click',{
    })
    expect(setDateFilter).toHaveBeenCalledWith(date)
})




