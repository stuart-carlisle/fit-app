import { useState, useEffect } from 'react'

const useFade = () => {
    const [className,setClassName]= useState('loader__fade')
  
    useEffect(()=>{
        setClassName('loader__fade loader__fade--start')
    },[])

    return className
}

export { useFade as default }