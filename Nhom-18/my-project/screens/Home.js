import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, FlatList, Alert, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import{NavigationContainer} from '@react-navigation/native'

import { TouchableOpacity } from 'react-native';


export default class Home extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     GridListItems: [
  //       {icon:"", key: "THI SÁT HẠNH" },
  //       {icon:"", key: "HỌC LÝ THUYẾT" },
  //       {icon:"", key: "BIỂN BÁO ĐƯỜNG BỘ" },
  //       {icon:"", key: "MẸO THI KẾT QUẢ CAO" },
  //       {icon:"", key: "TRA CỨU LUẬT (NĐ 100/2019/" },
  //       {icon:"", key: "CÁC CÂU HAY SAI" },
  //     ]
  //   };
  // }
  // GetGridViewItem(item) {
  //   Alert.alert(item);
  // }
  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar
                  barStyle = "light-content"
                  hidden = {false}
                  backgroundColor = "#4cb050"
                  translucent = {false}
               />
               <View style={styles.Header}>
                 <Icon name='ios-menu' size={40} color='white' onPress={() => this.props.navigation.openDrawer()} />
                 <Text style={styles.textHeader}>Ôn thi giấy phép lái xe</Text>
               </View> */}

        <View style={{ backgroundColor: '#31edd1', flex: 3.5 }}>
          <Image source={require('../image/img1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>

        <View style={styles.gridList}>
          <View style={styles.button}>
            <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Test')}>
              <Image style={styles.imageButton}  source={require('../image/home/img1.png')}/>
              <Text style={styles.button1}>THI SÁT HẠNH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Learn')}>
              <Image style={styles.imageButton}  source={require('../image/home/img2.png')}/>
              <Text style={styles.button1}>HỌC LÝ THUYẾT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('upload')}>
              <Image style={styles.imageButton}  source={require('../image/home/img3.png')}/>
              <Text style={styles.button1}>BIỂN BÁO ĐƯỜNG BỘ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Setting')}>
              <Image style={styles.imageButton}  source={require('../image/home/img4.png')}/>
              <Text style={styles.button1}>MẸO THIẾT QUẢ CAO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Setting')}>
              <Image style={styles.imageButton}  source={require('../image/home/img5.png')}/>
              <Text style={styles.button1}>TRA CỨU LUẬT NHANH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => this.props.navigation.navigate('Setting')}>
              <Image style={styles.imageButton}  source={require('../image/home/img6.png')}/>
              <Text style={styles.button1}>CÁC CÂU HAY SAI</Text>
            </TouchableOpacity>
          </View>
          {/* <FlatList
                    data={ this.state.GridListItems }
                    renderItem={ ({item}) =>
                      <View style={styles.GridViewContainer}>
                        <Image />
                        <Text style={styles.GridViewTextLayout} onPress={this.GetGridViewItem.bind(this, item.key)} > {item.key} </Text>
                      </View> }
                    numColumns={3}
                /> */}
        </View>
        <View style={{ flex: 3 }}>
          <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../image/img2.jpg')} />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.iconButton}>+</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    flex: 1,
    backgroundColor: '#66bb6a',
    flexDirection: 'row',
    height: '10%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  textHeader: {
    left: 20,
    fontSize: 22,
    color: 'white',
  },
  gridList: {
    flex: 4.5,
    backgroundColor: "#00000017"
  },

  button: {
    flexDirection: 'row',
    height: '50%',
    justifyContent: 'space-between',
  },
  button2: {
    backgroundColor: '#fff',
    width: 0,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0.5,
    padding: 2
  },
  imageButton: {
    resizeMode: 'cover',
    marginBottom:10
  },
  button1: {
    fontSize: 15,
    textAlign: 'center'
  },


  headerText: {
    fontSize: 10,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    borderWidth: 0.5,
    borderColor: '#9d9d9d',
  },
  GridViewTextLayout: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    padding: 10,
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 30,
    bottom: 30,
    backgroundColor: '#66bb6a',
    height: 70,
    width: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  iconButton: {
    color: '#fff',
    fontSize: 24,
  }
})
