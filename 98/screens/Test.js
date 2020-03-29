import React from 'react';
import { StyleSheet,Image,FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://192.168.1.128:3000/admin/trafficsigns/json')
      .then((response) =>response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={
            ({item}) => 
            <View>
            <Text
            style={styles.textLogo}
            >{item.tfs_name}, {item.tfs_category_id}</Text>
            <Image
      style={styles.tinyLogo}
      source={{
        uri: 'http://192.168.1.128:3000'+item.tfs_image,
      }}
    />
      <Text
            style={styles.textLogo}
            >{item.tfs_content}</Text>
            </View>
          }
          keyExtractor={({id}, index) => id}
        />
      
      </View>
    
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: null,
    height: 500,
    resizeMode: 'contain',
  },
  textLogo:
  {
    fontSize:30,
    textAlign:"center",
  },
});