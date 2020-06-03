import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, ProgressBarAndroid } from 'react-native'
import { withNavigation } from 'react-navigation';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import  ChooseEngFromViewWord  from './ChooseEngFromVieWord'
import  ChooseVieFromEngWord  from './ChooseVieFromEngWord'
import ChooseVieFromEngPronouce from './ChooseVieFromEngPronouce';
import WriteEngFromEngWord from './WriteEngFromEngWord';

const Learning = (props) => {

  const [page, setPage] = useState(0) 
  const data = props.navigation.getParam('data')
  const list = props.navigation.getParam('list')

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
          data={data}
          list={list}
        ></ChooseVieFromEngWord>

        <ChooseEngFromViewWord 
          updatePage={updatePage}
          data={data}
          list={list}
        ></ChooseEngFromViewWord>

        <ChooseVieFromEngPronouce 
          updatePage={updatePage}
          data={data}
          list={list}
        > </ChooseVieFromEngPronouce>

        <WriteEngFromEngWord
          updatePage={updatePage}
          data={data}
          list={list}
        ></WriteEngFromEngWord>
      </ScrollableTabView>
    </View>
  )
}

export default withNavigation(Learning);