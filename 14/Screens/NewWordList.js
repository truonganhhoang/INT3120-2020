import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, Image ,TouchableWithoutFeedback} from 'react-native';
import { ListItem, Header,Icon } from 'react-native-elements';
import newWord from './../data/new-word/index';


export default class NewWordList extends React.Component{
    
  static navigationOptions = ({navigation}) => {
      return{
          title: navigation.getParam('name'),
      };
  };

  keyExtractor = (item, index) => index.toString()
  

  renderItem = ({ item }) => (
		<View style = {styles.container}>
			<Image style = {styles.image} source = {{uri: item.picture_url}}/>
			<View style = {styles.content}>
				<Text style = {styles.englishWord}>{item.eng}</Text>
                <Text>{item.pronounce}</Text>
				<Text>{item.vie}</Text>
                
            </View>
            <View style={styles.add}>
            <Icon name='menu' iconStyle={styles.add}/>
            </View>
            
		</View>
  )

  render(){
      const {navigate,state} = this.props.navigation;
      return(
          <View>
              <Header
                  leftComponent={{ icon: 'reply', color: '#fff', onPress: () => navigate('Word') }}
                  centerComponent={{ text: 'Thể thao', style: { color: '#fff' } }}
              />
              <FlatList
				    style={styles.flatlist}
					contentContainerStyle={{ paddingBottom: 80}}
                  keyExtractor={this.keyExtractor}
                  data={newWord.sports}
                  renderItem={this.renderItem}
                  showsVerticalScrollIndicator={true}
              />
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
        right:2,
        top:4,
        position:'absolute'
    }
});