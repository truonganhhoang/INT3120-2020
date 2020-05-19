import React from 'react'
import {Image} from 'react-native'


function LogoTitle() {
    return (
      <Image
        style={{ width: 75, height: 75 }}
        source={require('../assets/logo.png')}
      />
    );
}

export default LogoTitle;