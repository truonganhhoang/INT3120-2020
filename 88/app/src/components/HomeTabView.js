import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, ScrollView, Text} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';

import LearnTab from './HomeLearnTab';

const renderTabBar = (props) => {
  return (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicatorStyle}
    />
  );
};

const PlayTab = () => {
  return <View style={[styles.scene, {backgroundColor: 'red'}]}></View>;
};

const initialLayout = {
  width: Dimensions.get('window').width,
};

const HomeTabView = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'learn', title: 'LEARN'},
    {key: 'play', title: 'PLAY'},
  ]);

  const renderScene = SceneMap({
    learn: LearnTab,
    play: PlayTab,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabBar: {
    backgroundColor: '#00bcd4',
    elevation: 0,
  },
  indicatorStyle: {
    backgroundColor: '#fff',
  },
});

export default HomeTabView;
