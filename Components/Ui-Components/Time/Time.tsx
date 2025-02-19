import React, { useEffect, useState } from 'react'

export default function Time() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setDate(new Date());
        }, 1000)
    
        return () => clearInterval(intervalId);
      }, [])
    
  return (
    <div className='time-wrapper'>  {date.toLocaleTimeString()}</div>
  )
}
