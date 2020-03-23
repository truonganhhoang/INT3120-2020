import React, { Component } from 'react'
import { Text, View, Dimensions, TouchableOpacity, Alert, StyleSheet } from 'react-native'
import { Agenda } from 'react-native-calendars'
import { Header } from 'react-native-elements'

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  container: {
    flex: 1,
  },
})

export default class Calendar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: {
        '2020-03-19': [{ name: 'toan', start: '9:00', end: '13:00' }],
        '2020-03-20': [{ name: 'tieng anh', start: '3:00', end: '15:00' }],
      },
      isVisible: true,
    }
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        //onPress={}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    )
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          centerComponent={{ text: 'Calendar', style: { color: '#fff', fontSize: 25 } }}
          containerStyle={{
            backgroundColor: '#3D6DCC',
            justifyContent: 'center',
          }}
        />

        <Agenda
          currentDate={'2020-3-21'}
          items={this.state.items}
          //loadItemsForMonth={this.loadItems.bind(this)}
          renderItem={this.renderItem.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
        />
      </View>
    )
  }
}
