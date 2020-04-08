import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Header } from 'react-native-elements';

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {
        '2020-03-19': [
          {
            name: 'Nguyên Lý Hệ Điều Hành',
            abbreviation: 'OS',
            teacher: 'Thầy Thanh',
            type: 'Theory',
            location: '304-G2',
            start: '9:00',
            end: '13:00',
          },
        ],
        '2020-03-20': [
          {
            name: 'Nguyên Lý Hệ Điều Hành',
            abbreviation: 'OS',
            teacher: 'Thầy Thanh',
            type: 'Theory',
            location: '304-G2',
            start: '9:00',
            end: '13:00',
          },
        ],
        '2020-03-02': [
          {
            name: 'Nguyên Lý Hệ Điều Hành',
            abbreviation: 'OS',
            teacher: 'Thầy Thanh',
            type: 'Theory',
            location: '304-G2',
            start: '9:00',
            end: '13:00',
          },
        ],
        '2020-04-19': [
          {
            name: 'Nguyên Lý Hệ Điều Hành',
            abbreviation: 'OS',
            teacher: 'Thầy Thanh',
            type: 'Theory',
            location: '304-G2',
            start: '9:00',
            end: '13:00',
          },
        ],
        '2020-04-06': [
          {
            name: 'Nguyên Lý Hệ Điều Hành',
            abbreviation: 'OS',
            teacher: 'Thầy Thanh',
            type: 'Theory',
            location: '304-G2',
            start: '9:00',
            end: '13:00',
          },
        ],
      },
      isVisible: true,
    };
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item, { height: item.height }]}
        //onPress={}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.itemTitle}>
            {item.name} ({item.abbreviation})
          </Text>
          <Text style={styles.itemTime}>
            {item.start} - {item.end}
          </Text>
          <Text style={styles.itemLocation}>{item.location}</Text>
          <Text style={styles.itemTeacher}>{item.teacher}</Text>
          <Text style={styles.itemType}>{item.type}</Text>
        </View>
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

  render() {
    return (
      <View style={styles.container}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          barStyle="light-content"
          centerComponent={{
            text: 'CALENDAR',
            style: { color: '#fff', fontSize: 25, fontWeight: 'bold', letterSpacing: 4 },
          }}
          containerStyle={{
            backgroundColor: '#1976D2',
            justifyContent: 'center',
            height: 100,
          }}
        />

        <Agenda
          currentDate={Date.now()}
          items={this.state.items}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          pastScrollRange={12}
          futureScrollRange={12}
        />
      </View>
    );
  }
}

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
  itemTitle: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#039BE5',
  },
  itemTime: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 14,
    color: '#455A64',
  },
  itemTeacher: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#512DA8',
  },
  itemLocation: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '600',
    color: '#E64A19',
  },
  itemType: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '500',
    color: '#388E3C',
  },
});
