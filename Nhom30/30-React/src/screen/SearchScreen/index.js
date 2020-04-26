import React from 'react'
import View from 'react-native'
import BasePage from '../../base/BasePage'
import { dataSearchScreen } from '../../helper/constant'
import Header from '../../base/header'
import { Body,Icon,Container, Text, Tab, Content, TabHeading, ScrollableTab, Tabs } from 'native-base';

const typeRef = [""]
export default class SearchScreen extends BasePage{

  constructor(props) {
      super(props)
      this.state = {
          index: 0
      }
  }

  renderTab = (item) => {
    return
    (
      <Tab
        heading={
          <TabHeading style ={{backgroundColor:'green'}}>
            <Icon name={item.itemName} size = {28} />
          </TabHeading>}
        tabStyle={{ backgroundColor: '#2f2483' }}>
      </Tab>
    )
}

  render (){

    return(
      <Container>
      <View>
      <Header parent = {this}/>
      </View>
      <Tabs renderTabBar={()=> <ScrollableTab />}>
      <Tab
        heading="test">
        <Text>test</Text>
      </Tab>
      <Tab
        heading="test">
        <Text>test</Text>
      </Tab>
      <Tab
        heading="test">
        <Text>test</Text>
      </Tab>
      </Tabs>
      </Container>
    )
}
}
