import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { View, Text, Image , Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';
import IconFont from 'react-native-vector-icons/FontAwesome';
import  * as Animatable from 'react-native-animatable';
import { Notifications } from 'expo';
import styles from '../AppStyles/Words';
import db from './../data/SQLite';
import PickColor from '../Config/Color'

console.disableYellowBox = true;
export default class Words extends React.Component {
  color
  constructor(props){
    super(props);
    this.state = {
      data: db.getTaggedWord(this, this.props.type),
    }
    // db.clearAllWords();
  }

  keyExtractor = (item, index) => index.toString()
  showWordExample = word => {
    Alert.alert(word.eng, word.example, [{text: 'Đã xem'}]);
  }

  speakWord = word => {
    Speech.speak(word);
  }

  favoriteSwitch = word => {
    if (word.favorite == 1){
      word.favorite = 0;
    }else{
      word.favorite = 1;
    }
    db.updateFavoriteOrRemind('favorite',word.eng, word.favorite);
    if (this.props.type == 'favorite'){
      let filterData = this.state.data.filter(item => item.eng != word.eng);
      this.setState({data: filterData});
    }else{
      this.setState({update: true});
    }
  }

  remindSwitch = async word => {
    if (word.remind == 1){
      word.remind = 0;
      const nID = await db.getNotificationID(word.eng);
      // console.log(nID);
      if (nID != 'null'){
        Notifications.cancelScheduledNotificationAsync(nID);
      }
    }else{
      word.remind = 1;
      const localNotification = {
        title: word.eng,
        body: `${word.eng} có nghĩa là ${word.vie}`,
        data: { data: `${new Date().getTime()}` },
        ios: {sound: true, _displayInForeground: true}
      };
      const schedulingOptions = {
        repeat: "minute",
        time: (new Date()).getTime() + 10000
      }
      const notificationID = await Notifications.scheduleLocalNotificationAsync(
        localNotification, schedulingOptions
      );
      db.setNotificationID(notificationID, word.eng);
    }
    db.updateFavoriteOrRemind('remind',word.eng, word.remind);
    if (this.props.type == 'remind'){
      let filterData = this.state.data.filter(item => item.eng != word.eng);
      this.setState({data: filterData});
    }else{
      this.setState({update: true});
    }
  }

  renderItem = ({ item, index }) => (
    <Animatable.View animation="zoomInLeft" delay={750} duration={2000}>
		<View style = {styles().container}>
			<Image style = {styles().image} source = {{uri: item.picture}}/>
			<View style = {styles().content}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style = {styles().englishWord}>{item.eng} </Text>
          <Icon color={this.color.iconColor} name='volume-high' type='material-community' onPress={() => {console.log(this.color.iconColor);this.speakWord(item.eng)}}/>
        </View>
        <View style={{marginBottom: 7}}>
          <Text style={styles().textColor}>{item.type} {item.pronounce} </Text>
          <Text style={styles().textColor}>{item.vie}</Text>
        </View>  
      </View>
      <View style={styles().add}>
        <IconFont name='exchange' style={styles().add} color={this.color.iconColor}/>
      </View>
		</View>
    </Animatable.View>
  );

  renderHiddenItem = ({ item }) => (
    <View style={styles().iconContainer}>
      <Animatable.View style={{marginLeft: 5}} animation="slideInRight" duration={1000}>
        <TouchableOpacity onPress={() => this.favoriteSwitch(item)}>
          <Icon
              name={'heart'}
              type='material-community'
              color={item.favorite == 1 ? 'red' : 'gray'}
              size={45}
          />
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View style={{marginLeft: 5}} animation="slideInRight" duration={1000}>
        <TouchableOpacity onPress={() => this.remindSwitch(item)}>
          <Icon
          name='alarm'
          type='material-community'
          color={item.remind == 1 ? 'green' : 'gray'}
          size={45}
          />
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View style={{marginLeft: 5}} animation="slideInRight" duration={1000}>
        <TouchableOpacity onPress={() => this.showWordExample(item)}>
          <Icon
          name='comment-text'
          type='material-community'
          color='#457fe1'
          size={45}
          />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
  render(){
    if (this.state.data != undefined){
      this.color = PickColor(global.darkmode);
      return (
        <View>
          <SwipeListView
            style={styles(this.props.type).swipeListView}
            keyExtractor={this.keyExtractor}
            contentContainerStyle={{paddingBottom: 10}}
            data={this.state.data}
            renderItem={this.renderItem}
            renderHiddenItem={this.renderHiddenItem}
            leftOpenValue={0}
            rightOpenValue={-160}
            disableRightSwipe={true}
            refreshing={true}
          />
          <SwipeListView />
        </View>
      )
    }else{
      return(
        <View></View>
      )
    }
  }
}
