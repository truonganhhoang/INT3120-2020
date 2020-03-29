import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  contructor: {
    flex: 1,
    paddingTop: 25,
  },
  listItem: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
})

class DayView extends React.Component {
  state = {
    schedule: [
      { start: '9:00', end: '11:00', lesson: 'The Duc' },
      { start: '13:00', end: '15:00', lesson: 'Toan' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
      { start: '15:00', end: '17:00', lesson: 'Van' },
    ],
  }

  render() {
    return (
      <View style={styles.contructor}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
        {this.state.schedule.map((item, i) => {return (
          <ListItem
            key={i}
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95}
            title={item.lesson}
            background={{ color: 'yellow' }}
            titleStyle={{ fontWeight: 'bold' }}
            subtitle={item.start + ' ' + item.end}
            badge={{ value: 3, status: 'success' }}
            chevron
            style={styles.listItem}
          />
        )})}
      </ScrollView>
      </View>
    )
  }
}

export default DayView
