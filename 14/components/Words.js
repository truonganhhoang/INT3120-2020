import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import { StyleSheet, View, Text, Image , Alert} from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';
import IconFont from 'react-native-vector-icons/FontAwesome';
import db from './../data/SQLite';
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

  remindSwitch = word => {
    if (word.remind == 1){
      word.remind = 0;
    }else{
      word.remind = 1;
    }
    db.updateFavoriteOrRemind('remind',word.eng, word.remind);
    if (this.props.type == 'remind'){
      let filterData = this.state.data.filter(item => item.eng != word.eng);
      this.setState({data: filterData});
    }else{
      this.setState({update: true});
    }
  }

  renderItem = ({ item }) => (
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
  );

  renderHiddenItem = ({ item }) => (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => this.favoriteSwitch(item)}>
      <Icon
          style={styles.icon}
          name={item.favorite == 1 ? 'heart' : 'heart-outline'}
          type='material-community'
          color='red'
          size={40}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.remindSwitch(item)}>
        <Icon
        style={styles.icon}
        name='alarm'
        type='material-community'
        color={item.remind == 1 ? 'green': 'gray'}
        size={40}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.showWordExample(item)}>
        <Icon
        style={styles.icon}
        name='comment-text'
        type='material-community'
        color='#457fe1'
        size={40}
        />
      </TouchableOpacity>
    </View>
  );
  render(){   
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
