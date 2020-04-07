import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

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

const FirstRoute = () => {
  return (
    <View style={[styles.scene, {backgroundColor: 'blue'}]}>
    </View>
  )
}

const SecondRoute = () => {
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
    learn: FirstRoute,
    play: SecondRoute
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
  }
});

export default HomeTabView;