import {Component} from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import Accordian from "./Accordian";
import React from 'react';
import Colors from "./Colors";

export default class TheoryTips extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'Khái niệm và quy tắc', 
          data: 'demo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo text'
        },
        { 
          title: 'Hệ thống biển báo',
          data: 'demo text'
        },
        { 
         title: 'Sa hình',
         data: 'demo text'
        },
      ]
    }
  }

    render() {
        return (
        <View style={styles.container}>
            { this.renderAccordians() }
        </View>
        );
    }

    renderAccordians=()=> {
        const items = [];
        for (item of this.state.menu) {
            items.push(
                <Accordian 
                    title = {item.title}
                    data = {item.data}
                />
            );
        }
        return items;
    }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   paddingTop:10,
   backgroundColor: '#1abc9c',
  }
});