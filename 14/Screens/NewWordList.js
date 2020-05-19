import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import Words from './../components/Words';
import PickColor from '../Config/Color'

export default class NewWordList extends React.Component{ 
  category = this.props.navigation.state.params.type;
  render(){
    const color = PickColor(global.darkmode);
    const {navigate} = this.props.navigation;
    return(
      <View style={{flex: 1, backgroundColor: color.containerColor}}>
          <Header
              leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Word') }}
              centerComponent={{ text: this.category, style: { color: '#fff' } }}
              backgroundColor={color.headerColor}
          />
          <Words type={this.category} />
      </View>
    );
  }
}
