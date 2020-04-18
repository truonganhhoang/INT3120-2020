import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { Agenda } from 'react-native-calendars';
import { Header } from 'react-native-elements';
import { getAllTasks } from '../firebaseApi/task';
import { getLessons } from '../firebaseApi/lesson';

export default class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items : {},
      isVisible: true,
      refreshing: false,
    };
  }

  componentDidMount = async () => {
    let lessons = [];
    let tasks = [];
    let data = {};
    try {
      lessons = await getLessons();
      tasks = await getAllTasks();
      lessons.map((item) => {
        for (let i = 0; i < item.week; i++) {
          let day = item.date.toDate();
          day.setDate(day.getDate() + 7 * i);
          day = day.toISOString().substring(0, 10);
          let title = Object.keys(data);
          if (title.filter((it) => it == day).length > 0) {
            data[day].push(item);
          } else {
            let arr = [];
            arr.push(item);
            data[day] = arr;
          }
        }
      });
      tasks.map((item) => {
        let day = item.date.toDate();
        day = day.toISOString().substring(0, 10);
        let title = Object.keys(data);
        let length = title.filter((it) => it == day).length;
        if (length) {
          data[day].push(item);
        } else {
          let arr = [];
          arr.push(item);
          data[day] = arr;
        }
      }); 
    } catch (err) {
      console.log(err);
    } 
      this.setState({ items: data });
      const date = new Date();
      let today ={};
      today.day = date.getDay();
      today.month = date.getMonth();
      today.year = date.getFullYear();
      today.timestamp = date.getTime();
      today.dateString = date.toISOString().substring(0,10);
      this.loadItems(today);
  };

  renderItem(item) {
    if (item.type == 'Theory') {
      return (
        <View style={[styles.theory, { height: item.height }]}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTime}>
              Time: &emsp;&emsp;&emsp; {item.startTime} - {item.endTime}
            </Text>
            <Text style={styles.itemLocation}>Location:&emsp;&emsp;{item.location}</Text>
            <Text style={styles.itemTeacher}>Teacher: &emsp;&emsp;{item.teacher}</Text>
            <Text style={styles.itemType}>Type:  &emsp;&emsp;&emsp;{item.type}</Text>
        </View>
      );
    } else  if ( item.type == 'Practice') {
      return (
        <View style={[styles.practice, { height: item.height }]}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTime}>
              Time: &emsp;&emsp;&emsp; {item.startTime} - {item.endTime}
            </Text>
            <Text style={styles.itemLocation}>Location:&emsp;&emsp;{item.location}</Text>
            <Text style={styles.itemTeacher}>Teacher: &emsp;&emsp;{item.teacher}</Text>
            <Text style={styles.itemType}>Type:  &emsp;&emsp;&emsp;{item.type}</Text>
        </View>
      );
    } else if (item.type == 'Task') {
      return (
        <View style={[styles.task, {height: item.height}]}>
            <Text style={styles.itemTitle}>{item.name} {item.done == true && <Text style={{color: '#00acc1', fontSize: 20}}> (Done)</Text>}</Text>
            <Text style={styles.itemType}>Lesson:  &emsp; &emsp;{item.lesson}</Text>
            <Text style={styles.itemTime}>Description:&emsp;{item.description} </Text>
        </View>
      );
    } else if (item.type == 'Exam') {
      return (
        <View style={[styles.exam, {height: item.height}]}>
            <Text style={styles.itemTitle}>{item.name} {item.done == true && <Text style={{color: '#00acc1', fontSize: 20}}> (Done)</Text>}</Text>
            <Text style={styles.itemType}>Lesson:  &emsp; &emsp;{item.lesson}</Text>
            <Text style={styles.itemTime}>Description:&emsp;{item.description} </Text>
        </View>
      );
    } else {
      return(
        <View style={{height: 0}} />
      );
    }
  }

  onRefresh = () => {
    setTimeout(() => this.setState({ refreshing: false }), 3000);
    this.componentDidMount();
  };

  onDaySelected() {
    return <Text>Day selected </Text>;
  }

  renderCalendar = (day) => {
    this.loadItems(day);
  }

  loadItems(day) { 
      for (let i = -5; i < 5; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
  }


    timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}></View>
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
          refreshControl={
            <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
          }
          items={this.state.items}
          renderItem={(item) => this.renderItem(item)}
          renderEmptyDate={() => this.renderEmptyDate()}
          selected={this.timeToString(new Date())}
          refreshing = { false }
          onDayChange = {(day) => this.renderCalendar(day)}
          rowHasChanged={(r1, r2) => {return r1 !== r2}}
          onDayPress={this.onDaySelected.bind(this)}
          loadItemsForMonth={this.loadItems.bind(this)}
          //minDate={}
          //maxDate ={}
          renderKnob={() => {
            return (
              <View style={{ height: 14, padding: 4 }}>
                <View
                  style={{
                    height: '100%',
                    width: 40,
                    backgroundColor: '#DCDCDC',
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: '#DCDCDC',
                  }}
                />
              </View>
            );
          }}
          theme={{
            //backgroundColor: '#ffffff',
            //calendarBackground: '#f8f5f0',
            selectedDayBackgroundColor: '#1976D2',
            selectedDayTextColor: '#fff',
            todayTextColor: '#000000',
            textDisabledColor: '#888888',
            dayTextColor: '#000000',
            agendaKnobColor: '#DCDCDC',
            dotColor: 'green',
            selectedDotColor: 'blue',
            'stylesheet.calendar.header': {
              week: {
                marginTop: Platform.OS == 'ios' ? 6 : 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            },
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  theory: {
    backgroundColor: '#bbdefb',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  practice: {
    backgroundColor: '#b2ebf2',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  task: {
    backgroundColor: '#dcedc8',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  exam: {
    backgroundColor: '#ffecb3',
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
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 1,
    color: '#039BE5',
    paddingLeft: 10,
  },
  itemTime: {
    paddingLeft: 20,
    paddingTop: 5,
    fontSize: 17,
    color: '#455A64',
  },
  itemTeacher: {
    paddingTop: 5,
    paddingLeft: 20,
    fontSize: 17,
    fontWeight: '500',
    color: '#512DA8',
  },
  itemLocation: {
    paddingTop: 5,
    paddingLeft: 20,
    fontSize: 17,
    fontWeight: '600',
    color: '#E64A19',
  },
  itemType: {
    paddingTop: 5,
    paddingLeft: 20,
    fontSize: 17,
    fontWeight: '500',
    color: '#388E3C',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
