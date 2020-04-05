import React from 'react';
import { StyleSheet, View, Text, Image , Alert} from 'react-native';
import { Header,Icon } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import newWords from './../data/new-word/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';
import IconFont from 'react-native-vector-icons/FontAwesome';

export default class NewWordList extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      update: false
    }
  }
    
  static navigationOptions = ({navigation}) => {
      return{
          title: navigation.getParam('name'),
      };
  };

  keyExtractor = (item, index) => index.toString()

  showWordExample = word => {
    Alert.alert(word.eng, word.example, [{text: 'Đã xem'}]);
  }

  speakWord = (word) => {
    Speech.speak(word);
  }

  favoriteSwitch = word => {
    if (word.favorite) {
      word.favorite = false;
      this.setState({update: true});
    } else {
      word.favorite = true;
      this.setState({update: true});
    }
  }

  remindSwitch = word => {
    if (word.remind) {
      word.remind = false;
      this.setState({update: true});
    } else {
      word.remind = true;
      this.setState({update: true});
    }
  }

  renderItem = ({ item }) => (
		<View style = {styles.container}>
			<Image style = {styles.image} source = {{uri: item.picture_url}}/>
			<View style = {styles.content}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style = {styles.englishWord}>{item.eng}</Text>
          <Icon name='volume-high' type='material-community' onPress={() => this.speakWord(item.eng)}/>
        </View>
        <Text>
          <Text>{item.type} </Text>
          <Text>{item.pronounce}</Text></Text>
				<Text>{item.vie}</Text>  
      </View>
      <View style={styles.add}>
        <IconFont name='exchange' size={18} iconStyle={styles.add}/>
      </View>
		</View>
  );

  renderHiddenItem = ({ item }) => (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => this.favoriteSwitch(item)}>
      <Icon
          iconStyle={styles.icon}
          name={item.favorite ? 'heart' : 'heart-outline'}
          type='material-community'
          color='red'
          size={40}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.remindSwitch(item)}>
        <Icon
        iconStyle={styles.icon}
        name='alarm'
        type='material-community'
        color={item.remind ? 'green': 'gray'}
        size={40}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.showWordExample(item)}>
        <Icon
        iconStyle={styles.icon}
        name='comment-text'
        type='material-community'
        color='#457fe1'
        size={40}
        />
      </TouchableOpacity>
    </View>
  );

  render(){
      const {navigate,state} = this.props.navigation;
      return(
          <View>
              <Header
                  leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Word') }}
                  centerComponent={{ text: 'Thể thao', style: { color: '#fff' } }}
              />
              <SwipeListView
				          style={styles.flatlist}
					        contentContainerStyle={{ paddingBottom: 80}}
                  keyExtractor={this.keyExtractor}
                  data={newWords.sports}
                  renderItem={this.renderItem}
                  renderHiddenItem={this.renderHiddenItem}
                  leftOpenValue={0}
                  rightOpenValue={-150}
                  showsVerticalScrollIndicator={true}
                  disableRightSwipe={true}
              />
              <SwipeListView />
          </View>
      );
  }
}

const styles = StyleSheet.create({
  flatlist:{
      paddingLeft: 10,
			paddingRight: 10
  },
  listitem:{
      marginTop: 8,
      marginBottom: 8
	},
	container:{
		flex: 1,
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
    right:8,
    top:8,
    position:'absolute'
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 'auto',
    marginTop:18
  },
  icon:{
    marginRight:4,
  }
});