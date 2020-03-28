import React from 'react';
import {View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import Swipeout from 'react-native-swipeout'
import {Header, CheckBox} from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8e99f3',
  },
  block: {
    marginTop: 7,
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 5,
  },
  rowContainer: {
    height: 60,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
  },
  note: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default class ViewTask extends React.Component {
  
    state = {
      data:[
        {name:'here is an title 1', lesson: 'toan', date: '25 3 1019', description:'here is an description'  }, 
        {name:'here is an title 2', lesson: 'van', date: '24 3 1019', description:'here is an description'  },
        {name:'here is an title 3', lesson: 'anh', date: '25 3 2020', description:'here is an description'  },
        {name:'here is an title 4', lesson: 'ly', date: '25 9 1019', description:'here is an description'  },
    ]}

    deleteItem = (id) => {
      this.state.data.splice(id,1);
      this.setState({data: this.state.data.filter(i => i!== id)});
    } 

    renderRow = (item,id) => {
    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',      
      onPress: ()=> {this.deleteItem(id)},
    }];

    return (
      <Swipeout right={swipeBtns}
        key={id}
        autoClose='true'
        style={styles.block}
        backgroundColor= 'transparent'>
          <View>
            <View style={styles.rowContainer}>
              <CheckBox
                checked={this.state.checked}
              />
              <Text style={styles.note}>{id+1}. {item.name}</Text>
            </View>
        </View>
      </Swipeout>
    )
  }

  render() {
    return (  
      <View style={styles.container}> 
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content"
        centerComponent={{
          text: 'List Task',
          style: { fontSize: 25, color: '#fff'},
        }}
        containerStyle={{
          backgroundColor: '#5c6bc0',
          height: '12%',
        }}
      />

        {this.state.data.map((item, id) => this.renderRow(item,id))}
      </View>
    )
  }
}
