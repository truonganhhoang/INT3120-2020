import React, { useState, useEffect } from 'react'; 
import { View, Text } from 'react-native'; 

const CountDown = (props: {hours?: any, minutes?: any,
  seconds?: any, id?: any, setTimeOut?: any, stop?: any }) => {
  const { hours, minutes, seconds, id, setTimeOut, stop } = props; 
  const [ over, setOver ] = useState(false); 
  const [ paused, setPaused ] = useState(false);
  const [ time, setTime ] = useState({
    hours: parseInt(hours, 10), 
    minutes: parseInt(minutes, 10), 
    seconds: parseInt(seconds, 10)
  })

  const tick = () => {
    if (over || paused) return; 

    // Time up
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
      setTimeOut(true)
      setOver(true)
    }

    else if (time.minutes === 0 && time.seconds === 0) {
    // decrement hours
      setTime({
        hours: time.hours - 1, 
        minutes: 59, 
        seconds: 59
      })
    }
    else if (time.seconds === 0) {
      // decrement minutes
      setTime({
        hours: time.hours, 
        minutes: time.minutes - 1, 
        seconds: 59
      })
    }
    else {
      // decrement seconds
      setTime({
        hours: time.hours, 
        minutes: time.minutes, 
        seconds: time.seconds - 1
      })
    }
  }

  useEffect(() => {
    let timeID = setInterval(() => tick(), 1000); 
    return () => clearInterval(timeID)
  }, [time])

  useEffect(() => {
    setTime({
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds)
    });
    setOver(false);
  }, [id])

  useEffect(() => {
    if ( stop == true ) {
      setPaused(true)
    }
  }, [stop])

  return (
    <View style={{alignItems:'center'}}>
      <Text style={{color:'#ff5e00',fontSize:16,fontWeight:'bold'}}>
        {/* {time.hours.toString().padStart(2, '0')}:  */}
        {time.minutes.toString().padStart(2, '0')}:
        {time.seconds.toString().padStart(2, '0')}
      </Text>
    </View>
  )
}

export default CountDown; 