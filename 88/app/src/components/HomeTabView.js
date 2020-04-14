import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/Feather';

import PlatformTouchable from '../utils/touchable';

const currentLearn = 'Condition and Loop';
const currentLesson = 1;

const learnList = [
  {
    iconName: 'search',
    title: 'Overview',
    stack: 1
  },
  {
    iconName: 'search',
    title: 'Basic Concepts',
    stack: 1
  },
  {
    iconName: 'search',
    title: 'Conditionals and Loop',
    stack: 2
  },
  {
    iconName: 'search',
    title: 'Functions',
    stack: 2
  },
  {
    iconName: 'search',
    title: 'Objects',
    stack: 2
  },
  {
    iconName: 'search',
    title: 'Core Objects',
    stack: 2
  },
  {
    iconName: 'search',
    title: 'DOM & Events',
    stack: 1
  },
  {
    iconName: 'search',
    title: 'ECMAScript 6',
    stack: 1
  },
  {
    iconName: 'search',
    title: 'Certificate',
    stack: 1
  }
];

const renderTabBar = (props) => {
  return (
    <TabBar
      {...props}
      style={{
        backgroundColor: '#00bcd4',
        elevation: 0
      }}
      indicatorStyle={{ backgroundColor: '#fff' }}
    />
  );
}

const LearnItem = () => {
  return (
    <PlatformTouchable style={styles.touchable} rippleColor='rgba(0, 0, 0, .03)' rippleOverflow >
      <View style={styles.learningIconContainer}>
        <Icon name='search' style={styles.icon} />
      </View>
      <Text style={styles.title}>Overview</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressNumber}>1/7</Text>
        <View style={styles.progressBar}>
          <View style={{ flexGrow: 1/7, backgroundColor: '#00bcd4'}}></View>
        </View>
      </View>
    </PlatformTouchable>
  );
}

const LearnTab = () => {
  return (
    <ScrollView
      style={[styles.scene, {backgroundColor: '#f5f5f5'}]}
      centerContent={true}
      contentContainerStyle={{flex: 1, alignItems:'center'}}
    >
      <LearnItem />
      <LearnItem />
    </ScrollView>
  )
}

const PlayTab = () => {
  return (
    <View style={[styles.scene, {backgroundColor: 'red'}]}>
    </View>
  )
}

const initialLayout = {
  width: Dimensions.get('window').width
};

const HomeTabView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'learn', title: 'LEARN' },
    { key: 'play', title: 'PLAY' }
  ]);

  const renderScene = SceneMap({
    learn: LearnTab,
    play: PlayTab
  });
  
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  },
  touchable: {
    width: 155,
    height: 142,
    alignItems: 'center'
  },
  learningIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bcd4',
    width: 73,
    height: 73,
    borderRadius: 50,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6
  },
  icon: {
    fontSize: 30,
    color: 'white'
  },
  title: {
    textAlign: 'center',
    marginTop: 10,
    color: '#757575',
    fontSize: 16
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  progressNumber: {
    fontSize: 11,
    color: '#757575',
    marginRight: 4
  },
  progressBar: {
    flexDirection:'row',
    flexGrow:1,
    height: 4,
    backgroundColor: '#e0e0e0'
  },

});

export default HomeTabView;