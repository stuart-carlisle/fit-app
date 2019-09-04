import { useState, useEffect } from 'react'

//custom hooks
const useScrollPosition = () => { 
    const [ position, setPosition ] = useState(0) 
    
    // const throttle = (callback, limit) => {
    //     let wait = false;
    //     return () => {
    //       if (!wait) {
    //         callback.apply(null, arguments);
    //         wait = true;
    //         setTimeout(() => {
    //           wait = false;
    //         }, limit);
    //       }
    //     }
    //   }

    useEffect(()=>{
        const handleScroll = (e) => {
            let pather
            if(e.path){
                pather = e.path[1].scrollY
            }else{
                pather = (window.scrollY);
            }
                setPosition(Math.round(pather))
            }
                window.addEventListener('scroll', handleScroll)
                return ()=> {
                    window.removeEventListener('scroll', handleScroll)
                }
    },[])

    return position
} 
            

export { useScrollPosition as default}