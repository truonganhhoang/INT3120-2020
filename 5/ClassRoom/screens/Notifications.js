import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        {
          key: "a1",
          label: "Hệ thống",
          content: "Chào mừng đến với Classroom",
        },
      ], 
    };
  }

  render() {
    const {notifications} = this.state;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {notifications.map(notification => (
          <OptionButton
            key={notification.key}
            label={notification.label}
            content={notification.content}/>
        ))}
      </ScrollView>
    );
  };
}

function OptionButton({label, content}) {
  return (
    <RectButton style={[styles.option]}>
      <View style={{flex:1}}>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionLabel}>{label}</Text>
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{content}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 15,
  },
  option: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  optionLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 1,
    marginRight: 5,
    color: '#3498db',
    paddingBottom: 5,
  },
});