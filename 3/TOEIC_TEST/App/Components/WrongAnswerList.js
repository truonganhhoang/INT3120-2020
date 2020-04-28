import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import styles from './Styles/TestRecentStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { requestGET, HOST } from '../Services/Servies';
import DeviceInfo from 'react-native-device-info';
import { adService, Banner, UNIT_ID_BANNER } from '../Services/AdService'

export default class WrongAnswerList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      data: [],
    };
  }
  componentDidMount() {
    this.getTheme()
    this.fetchData()
  }
  getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('theme')
      if (value === 'true') this.setState({ darkMode: true })
      else if (value === 'false') this.setState({ darkMode: false })
    } catch (e) { console.log(e) }
  }
  fetchData = async () => {
    const data = await requestGET(`${HOST}/tests/viewListWrongAnswers/${DeviceInfo.getDeviceId()}`)
    this.setState({ data: data.data })
  }
  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("WrongAnswer", { id: item.exercise_id, name: item.exercise_description })} >
        <View style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: this.state.darkMode === false ? "#F5F5F5" : "#263238",
          marginVertical: 6,
          marginHorizontal: 15,
          elevation: 5,
          padding: 20,
          borderRadius: 10,
          alignItems: 'center'
        }}>
          <View style={{
            backgroundColor: this.state.darkMode === false ? '#1976D2' : "#212121",
            borderRadius: 40,
            height: 40,
            width: 40,
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
            <Text style={{
              color: this.state.darkMode === false ? "#F5F5F5" : "#F5F5F5",
              alignSelf: 'center', fontWeight: "bold"
            }}>
              {item.exercise_id}
            </Text>
          </View>
          <Text style={{
            color: this.state.darkMode === false ? "#212121" : "#FAFAFA",
            paddingLeft: 20,
            fontWeight: 'bold',
            fontSize: 16
          }}>
            {item.exercise_description}</Text>
        </View>
      </TouchableOpacity >
    )
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: this.state.darkMode === false ? '#EEEEEE' : '#212121' }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 40,
          paddingBottom: 20,
          backgroundColor: this.state.darkMode === false ? '#1976D2' : '#263238',
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Ionicons name="md-arrow-round-back" size={27} color="#F5F5F5" style={styles.iconLeft} />
          </TouchableOpacity>
          <Text style={styles.title}>Câu trả lời sai</Text>
          <Icon name="search" size={27} color="transparent" containerStyle={styles.iconRight} />
        </View>

        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.toString()}
        />
        <View style={{ position: 'absolute', bottom: 0 }}>
          <Banner
            unitId={UNIT_ID_BANNER}
            size={"SMART_BANNER"}
            request={adService.buildRequest().build()}
            onAdLoaded={() => {
              console.log('Advert loaded');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
