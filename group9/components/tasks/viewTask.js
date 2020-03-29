import React from 'react'
import { View, Text } from 'react-native'
import { Header } from 'react-native-elements'

class ViewTask extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          centerComponent={{ text: 'Tasks', style: { color: '#fff', fontSize: 25 } }}
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'center',
          }}
        />
      </View>
    )
  }
}

export default ViewTask
