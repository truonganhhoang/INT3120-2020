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
    lessonsTotal: 6,
  },
  {
    iconName: 'book-open',
    title: 'Basic Concepts',
    headStack: true,
    lessonsTotal: 8,
  },
  {
    iconName: 'refresh-cw',
    title: 'Conditionals and Loop',
    headStack: true,
    lessonsTotal: 8,
  },
  {
    iconName: 'settings',
    title: 'Functions',
    headStack: false,
    lessonsTotal: 5,
  },
  {
    iconName: 'box',
    title: 'Objects',
    headStack: true,
    lessonsTotal: 4,
  },
  {
    iconName: 'cpu',
    title: 'Core Objects',
    headStack: false,
    lessonsTotal: 6,
  },
  {
    iconName: 'server',
    title: 'DOM & Events',
    headStack: true,
    lessonsTotal: 9,
  },
  {
    iconName: 'hash',
    title: 'ECMAScript 6',
    headStack: true,
    lessonsTotal: 9,
  },
  {
    iconName: 'check-square',
    title: 'Certificate',
    headStack: true,
    lessonsTotal: 0,
  },
];

const LearnItem = (props) => {
  const {iconName, title, progressUp, progressDown, status} = props;
  return (
    <PlatformTouchable
      style={[styles.itemContainer]}
      rippleColor="rgba(0, 0, 0, .03)"
      rippleOverflow>
      <View
        style={[
          styles.iconContainer,
          status === 'learned'
            ? styles.doneIconContainer
            : status === 'learning'
            ? styles.learningIconContainer
            : styles.notDoneIconContainer,
        ]}>
        <Icon
          name={iconName}
          style={
            status === 'learned' || status === 'learning'
              ? styles.icon
              : styles.notDoneIcon
          }
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      {status === 'learned' || progressDown === 0 ? (
        <View style={styles.hiddenProgressContainer} />
      ) : (
        <View style={styles.progressContainer}>
          <Text style={styles.progressNumber}>
            {progressUp + '/' + progressDown}
          </Text>
          <View
            style={
              status === 'learned' || status === 'learning'
                ? styles.progressBar
                : styles.hiddenProgressBar
            }>
            <View
              style={[
                styles.progressFill,
                {flexGrow: progressUp / progressDown},
              ]}
            />
          </View>
        </View>
      )}
    </PlatformTouchable>
  );
};

const LearnTab = () => {
  const tempNode = [];
  let k = 0,
    space = false,
    learn = false;
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
    let status = '';
    if (title === currentLesson) {
      status = 'learning';
      learn = true;
    } else if (!learn) {
      status = 'learned';
    }
    tempNode.push(
      <LearnItem
        key={k++}
        iconName={iconName}
        title={title}
        progressUp={status === 'learning' ? currentLe : 0}
        progressDown={lessonsTotal}
        status={status}
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
    width: 73,
    height: 73,
    borderRadius: 50,
  },
  doneIconContainer: {
    backgroundColor: '#8bc34a',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  learningIconContainer: {
    backgroundColor: '#00bcd4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  notDoneIconContainer: {
    backgroundColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  icon: {
    fontSize: 30,
    color: '#fff',
  },
  notDoneIcon: {
    fontSize: 30,
    color: '#9e9e9e',
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
  hiddenProgressContainer: {
    height: 15,
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
  hiddenProgressBar: {
    display: 'none',
  },
  progressFill: {
    backgroundColor: '#00bcd4',
  },
});

export default LearnTab;
