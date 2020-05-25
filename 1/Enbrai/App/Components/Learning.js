import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, ProgressBarAndroid } from 'react-native'
import { withNavigation } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import  ChooseEngFromViewWord  from './ChooseEngFromVieWord'
import  ChooseVieFromEngWord  from './ChooseVieFromEngWord'
import ChooseVieFromEngPronouce from './ChooseVieFromEngPronouce';

const Learning = (props) => {

  const [page, setPage] = useState(0)

  const updatePage = (pageNum) => {
    setPage(pageNum)
  }

  useEffect(() => {
    return () => { }
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <ScrollableTabView
        tabBarPosition="top"
        initialPage={0}
        locked={true}
        page={page}
        tabBarUnderlineStyle={{ backgroundColor: 'white' }}
        renderTabBar={false}
      >
        <ChooseVieFromEngWord
          updatePage={updatePage}
        ></ChooseVieFromEngWord>

        <ChooseEngFromViewWord 
          updatePage={updatePage}
        ></ChooseEngFromViewWord>

        <ChooseVieFromEngPronouce 
          updatePage={updatePage}
        > </ChooseVieFromEngPronouce>
      </ScrollableTabView>
    </View>
  )
}

export default withNavigation(Learning);