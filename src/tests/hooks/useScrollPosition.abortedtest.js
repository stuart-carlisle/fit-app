import React from 'react'
import { mount } from 'enzyme'
import { useScrollPosition  } from '../../components/AddExerciseForm'

function HooksWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div>{hook}</div>;
}


test('Should return a value for scroll position', () => {
    const wrapper = mount(<HooksWrapper hook={useScrollPosition} />)
    global.document.scrollTop = 50;
    (wrapper.find('div')).toEqual('50')
})

