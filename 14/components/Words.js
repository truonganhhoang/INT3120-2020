import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { StyleSheet, View, Text, Image , Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';
import IconFont from 'react-native-vector-icons/FontAwesome';
import  * as Animatable from 'react-native-animatable';
import { Notifications } from 'expo';
import db from './../data/SQLite';

console.disableYellowBox = true;
export default class Words extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: db.getTaggedWord(this, this.props.type)
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
      console.log(nID);
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
		<View style = {styles.container}>
			<Image style = {styles.image} source = {{uri: item.picture}}/>
			<View style = {styles.content}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style = {styles.englishWord}>{item.eng} </Text>
          <Icon name='volume-high' type='material-community' onPress={() => this.speakWord(item.eng)}/>
        </View>
        <Text>
          <Text>{item.type} </Text>
          <Text>{item.pronounce}</Text></Text>
				<Text>{item.vie}</Text>  
      </View>
      <View style={styles.add}>
        <IconFont name='exchange' iconStyle={styles.add}/>
      </View>
		</View>
    </Animatable.View>
  );

  renderHiddenItem = ({ item }) => (
    <View style={styles.iconContainer}>
      <Animatable.View animation="slideInRight" duration={1000}>
        <TouchableOpacity onPress={() => this.favoriteSwitch(item)}>
          <Icon
              style={styles.icon}
              name={'heart'}
              type='material-community'
              color={item.favorite == 1 ? 'red' : 'gray'}
              size={40}
          />
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View animation="slideInRight" duration={1000}>
        <TouchableOpacity onPress={() => this.remindSwitch(item)}>
          <Icon
          style={styles.icon}
          name='alarm'
          type='material-community'
          color={item.remind == 1 ? 'green' : 'gray'}
          size={40}
          />
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View animation="slideInRight" duration={1000}>
        <TouchableOpacity onPress={() => this.showWordExample(item)}>
          <Icon
          style={styles.icon}
          name='comment-text'
          type='material-community'
          color='#457fe1'
          size={40}
          />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
  render(){   
    if (this.state.data != undefined){
      return (
        <View>
          <SwipeListView
            style={styles.swipeListView}
            keyExtractor={this.keyExtractor}
            contentContainerStyle={{paddingBottom: 240}}
            data={this.state.data}
            renderItem={this.renderItem}
            renderHiddenItem={this.renderHiddenItem}
            leftOpenValue={0}
            rightOpenValue={-150}
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

const styles = StyleSheet.create({
  swipeListView:{
      paddingLeft: 10,
      paddingRight: 10,
      height:'100%'
  },
  listitem:{
      marginTop: 8,
      marginBottom: 8
	},
	container:{
		backgroundColor: 'white', // Set your own custom Color
		flexDirection: 'row',
		marginBottom: 10
	},
	image:{
		width: 70, 
		height: 70,
		marginVertical: 10,
  	marginHorizontal: 20
	},
	content:{
		marginVertical: 10
	},
	englishWord:{
		fontSize: 20,
		color: 'blue'
  },
  add:{
    right:2,
    top:4,
    position:'absolute'
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight:15,
    marginTop:15
  }
});
