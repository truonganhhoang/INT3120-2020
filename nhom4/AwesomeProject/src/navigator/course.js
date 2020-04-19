import React, { Component } from 'react';
import {
  Text, StyleSheet,
} from 'react-native';
import { Container,List, Header, Title, Content, Right, Body, Icon,  ListItem, View  } from 'native-base';
import { FirebaseApp } from '../component/FirebaseConfig';

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namePage: "kooooo",
      dataCourse: []
    }
  }
  componentDidMount(){
    FirebaseApp.database().ref('Categories/').once('value').then(snapshot => {
      this.setState({ dataCourse: Object.values(snapshot.val()) });
    });
  }
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header style={{justifyContent:'center',alignItems:'center',fontSize:20}}>
            <Title>Chọn bằng lái xe ôn thi</Title>
        </Header>
        <Content>
          <List>
            {this.state.dataCourse.map((obj, i) => {
              return <ShowLicense sub={obj} navigation={navigation} key={i} />
            })}
          </List>
        </Content>
      </Container>
    );
  }
}
const ShowLicense = (props) => {
  return (
    <ListItem noIndent style={styles.Item}
      onPress={() => {
        props.navigation.push("ListSelects", { "namePage": props.sub.name })
      }
      }>
      <View style={styles.TextItem}>
        <Text style={styles.name}>{props.sub.name}</Text>
        <Text style={styles.titles}>{props.sub.title}</Text>
      </View>
      <View style={styles.Icon}>
        <Icon style={{color:'#bcbcbc'}} name="arrow-forward"/>
      </View>
    </ListItem>);
}
const styles=StyleSheet.create({
  Item:{
    flexDirection:"row"
  },
  TextItem:{
    width:'92%',
  },
  name:{
    fontSize:18
  },
  titles:{
    fontSize:14,
    paddingRight:5
  },
  Icon:{ 
    width:'8%',
    justifyContent:'center',
    alignItems:'center'
  }
})