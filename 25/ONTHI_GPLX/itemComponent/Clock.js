import React, {useState, useEffect} from 'react';

import {Text} from 'native-base';
import {View} from 'react-native';
import { color } from '../Component/color';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Clock = () => {
    var timeLast = new Date();
    timeLast.setMinutes(timeLast.getMinutes() + 15);
    const vaidateTime = (time) => {
        let timeStr = time.toString();
        if(timeStr.length == 1) {
            let firstChar = "0";
            timeStr = firstChar.concat(timeStr);
        }
        return timeStr;
    };
    const calculateTimeLeft = () => {
        var now = new Date();
        let _time =Math.floor(timeLast.getTime()-now.getTime());

        let timeLeft = {};
        if(_time >= 0) {
            let m = Math.floor(_time/60000);
            let s = Math.floor((_time/1000)%60);
            timeLeft = {
                minutes: vaidateTime(m),
                seconds: vaidateTime(s)
            }
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 100);
    }, () => clearInterval(calculateTimeLeft));

    return (
        <View style={{flex: 1,flexDirection:'row', alignSelf: 'center', justifyContent: 'flex-end'}}>
            <FontAwesome5Icon name="clock" 
            style={{fontSize: 20, color: color.textButton, marginRight: 8}} />
        {
            timeLeft.minutes == null && timeLeft.seconds == null ? 
            <Text>
                Break time
            </Text> : <Text style={{color: color.textButton}}>
                {timeLeft.minutes} : {timeLeft.seconds}
            </Text>
        }
        </View>
    );
}


export default Clock;