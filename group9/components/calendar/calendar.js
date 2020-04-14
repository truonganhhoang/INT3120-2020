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
      data: {},
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
          if (title.filter((it) => it == day).length != 0) {
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
        if (title.filter((it) => it == day).lenght != 0) {
          console.log('A');
          data[day].push(item);
        } else {
          let arr = [];
          arr.push(item);
          data[day] = arr;
        }
      });
      this.setState({ data: data });
    } catch (err) {
      console.log(err);
    }
  };

  renderItem(item) {
    if (item.type == 'Theory' || item.type == 'Practice') {
      return (
        <TouchableOpacity style={[styles.item, { height: item.height }]}>
          <View style={{ flex: 1 }}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTime}>
              {item.startTime} - {item.endTime}
            </Text>
            <Text style={styles.itemLocation}>{item.location}</Text>
            <Text style={styles.itemTeacher}>{item.teacher}</Text>
            <Text style={styles.itemType}>{item.type}</Text>
          </View>
        </TouchableOpacity>
      );
    } else if (item.type == 'Exam') {
      return (
        <TouchableOpacity style={[styles.item, { height: item.height }]}>
          <View style={{ flex: 1, backgroundColor: '#e0e0e0' }}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTeacher}>{item.lesson}</Text>
            <Text style={styles.Time}>{item.description} </Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={[styles.item, { height: item.height }]}>
          <View style={{ flex: 1, backgroundColor: '#0e0e0e' }}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemTeacher}>{item.lesson}</Text>
            <Text style={styles.Time}>{item.description} </Text>
          </View>
        </TouchableOpacity>
      );
    }
  }

  renderEmptyDate = (foo) => {
    const emptyDate = new Date(foo).toUTCString().split('T')[0];
    return (
      <TouchableOpacity
        onPress={async () => {
          await this.setState({ emptyDate }, console.log(this.state.emptyDate));
          console.log(foo, emptyDate, this.state.emptyDate);
        }}
      >
        <Text style={{ color: 'gray', paddingBottom: 4 }}>{emptyDate}</Text>
        <Text>Your container message here.</Text>
      </TouchableOpacity>
    );
  };

  onRefresh = () => {
    setTimeout(() => this.setState({ refreshing: false }), 3000);
    this.componentDidMount();
  };

  onDaySelected() {
    return <Text>Day selected </Text>;
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
          items={this.state.data}
          renderItem={(item) => this.renderItem(item)}
          // renderDay={(day, item) =>this.renderItemDay(day, item)}
          renderEmptyDate={() => this.renderEmptyDate()}
          //  rowHasChanged={(r1, r2) =>this.rowHasChanged(r1,r2)}
          onDayPress={this.onDaySelected.bind(this)}
          //                    minDate={}
          //                    maxDate ={}
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
          markedDates={this.props.markedDates}
          theme={{
            //backgroundColor: '#ffffff',
            calendarBackground: '#f8f5f0',
            selectedDayBackgroundColor: '#E0D2BC',
            selectedDayTextColor: '#000000',
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
