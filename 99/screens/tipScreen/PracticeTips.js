import React from 'react';
import {Component} from 'react';
import { StyleSheet, View, DrawerLayoutAndroidComponent, ScrollView} from 'react-native';
import Accordian from "../tipScreen/Accordian";
import { Colors } from "../tipScreen/Colors";

export default class PracticeTips extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu :[
        { 
          title: 'Giới thiệu', 
          data: 'demodemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo text text',
        },
        { 
          title: 'Chạy theo vòng só 8',
          data: 'demodemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo text text'
        },
        { 
         title: 'Đi vào đường hẹp',
         data: 'demo text'
        },
        { 
          title: 'Chạy đường quanh co',
          data: 'demo tdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textdemo textext'
        },
        { 
          title: 'Chạy đường quanh co',
          data: 'demo text'
        },
      ]
    }
  }

    render() {
        return (
        <View style={styles.container}>
          <ScrollView>
            { this.renderAccordians() }
          </ScrollView>
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
   backgroundColor:'#1abc9c',
  }
});