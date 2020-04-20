import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import PlatformTouchable from '../utils/touchable';
const currentLesson = 'Conditionals and Loop';
const currentLe = 4;
const learnList = [
  {
    iconName: 'search',
    title: 'Overview',
    headStack: true,
    lessonsTotal: 7,
  },
  {
    iconName: 'search',
    title: 'Basic Concepts',
    headStack: true,
    lessonsTotal: 7,
  },
  {
    iconName: 'search',
    title: 'Conditionals and Loop',
    headStack: true,
    lessonsTotal: 7,
  },
  {
    iconName: 'search',
    title: 'Functions',
    headStack: false,
    lessonsTotal: 7,
  },
  {
    iconName: 'search',
    title: 'Objects',
    headStack: true,
    lessonsTotal: 7,
  },
  {
    iconName: 'search',
    title: 'Core Objects',
    headStack: false,
    lessonsTotal: 7,
  },
  {
    iconName: 'search',
    title: 'DOM & Events',
    headStack: true,
    lessonsTotal: 7,
  },
  {
    iconName: 'search',
    title: 'ECMAScript 6',
    headStack: true,
    lessonsTotal: 7,
  },
  {
    iconName: 'search',
    title: 'Certificate',
    headStack: true,
    lessonsTotal: 7,
  },
];

const LearnItem = (props) => {
  const {iconName, title, progressUp, progressDown} = props;
  return (
    <PlatformTouchable
      style={styles.itemContainer}
      rippleColor="rgba(0, 0, 0, .03)"
      rippleOverflow>
      <View style={styles.iconContainer}>
        <Icon name={iconName} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressNumber}>
          {progressUp + '/' + progressDown}
        </Text>
        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, {flexGrow: progressUp / progressDown}]}
          />
        </View>
      </View>
    </PlatformTouchable>
  );
};

const LearnTab = () => {
  const tempNode = [];
  let k = 0,
    space = false;
  const renderedList = learnList.reduce((newArray, current, index) => {
    const {iconName, title, lessonsTotal} = current;
    if (tempNode && current.headStack) {
      newArray.push(
        <View
          key={index}
          style={[
            styles.rowContainer,
            space && tempNode.length > 1 && styles.rowSpace,
          ]}>
          {[...tempNode]}
        </View>,
      );
      space = tempNode.length > 1;
      tempNode.length = 0;
    }
    tempNode.push(
      <LearnItem
        key={k++}
        iconName={iconName}
        title={title}
        progressUp={currentLe}
        progressDown={lessonsTotal}
      />,
    );
    return newArray;
  }, []);

  if (tempNode) {
    renderedList.push(
      <View
        key={k++}
        style={[
          styles.rowContainer,
          space && tempNode.length > 1 && styles.rowSpace,
        ]}>
        {[...tempNode]}
      </View>,
    );
  }

  return (
    <ScrollView
      style={styles.mainContainer}
      contentContainerStyle={styles.contentContainer}>
      {[...renderedList]}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#f5f5f5',
    paddingTop: 7,
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
  rowSpace: {
    marginTop: 17,
  },
  itemContainer: {
    width: 155,
    paddingTop: 13,
    marginBottom: 13,
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bcd4',
    width: 73,
    height: 73,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  icon: {
    fontSize: 30,
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    color: '#757575',
    fontSize: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressNumber: {
    fontSize: 11,
    color: '#757575',
    marginRight: 4,
  },
  progressBar: {
    flexDirection: 'row',
    flexGrow: 1,
    height: 4,
    backgroundColor: '#e0e0e0',
  },
  progressFill: {
    backgroundColor: '#00bcd4',
  },
});

export default LearnTab;
