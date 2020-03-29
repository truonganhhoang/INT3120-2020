import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { getTasks } from '../firebaseApi/task'

class ViewTask extends React.Component {
  render() {
    console.log(getTasks());
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
    );
  }
}

export default ViewTask;
