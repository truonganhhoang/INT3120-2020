import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import Words from './../components/Words';

export default class NewWordList extends React.Component{ 
  category = this.props.navigation.state.params.type;
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>
          <Header
              leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Word') }}
              centerComponent={{ text: this.category, style: { color: '#fff' } }}
          />
          <Words type={this.category} />
      </View>
    );
  }
}
