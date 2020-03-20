import React, {Component} from 'react';
import {Text, View, Dimensions, TochableOpacity} from 'react-native';
import {CalendarList,Agenda} from 'react-native-calendars';
import {Header,} from 'react-native-elements';

export default class Calendar extends Component {
  
 constructor(props) {
  super(props);

  this.state = {
      items: {}
    };
  }
  
  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity 
        style={[styles.item, {height: item.height}]} 
        onPress={() => Alert.alert(item.name)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }
  
  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  render () {
    return (
      <View style={{flex:1}}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content" 
          centerComponent={{ text: 'Calendar', style: { color: '#fff', fontSize:25 } }}
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'center',
          }}
        />
        
        <Agenda
          currentDate={'2020-3-21'}
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          renderItem={this.renderItem.bind(this)}
          renderDay={(day, item) => {return (<View />);}}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          renderEmptyData = {() => {return (<View />);}}
          rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
        />
      </View>
    )
  }
}
