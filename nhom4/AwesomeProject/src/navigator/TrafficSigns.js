import React, { Component } from 'react';
import {
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { Container, List,Button, Header, Title, Content, Left, Body, Icon, ListItem, View } from 'native-base';
import { FirebaseApp } from '../component/FirebaseConfig';

export default class TrafficSigns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTrafficSigns:{}
        }
    }
    componentDidMount() {
        FirebaseApp.database().ref('TrafficSigns/').once('value').then(snapshot => {
            this.setState({ dataTrafficSigns:snapshot.val() });
        });
    }
    render() {
        const { navigation } = this.props;
        return (
            <Container>
                <Header >
                    <Left>
                        <Button onPress={() => navigation.goBack()}>
                            <Icon name='menu' ></Icon>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Biển báo giao thông </Title>
                    </Body>
                </Header>
                        {this.ShowTrafficSigns()}
            </Container>
        );
    }
    ShowTrafficSigns(){
        let arr=[];
        for(var keyCategori in this.state.dataTrafficSigns){
            this.state.dataTrafficSigns[keyCategori].show=true;
            arr.push(
                <View key={keyCategori} onPress={()=>{this.state.dataTrafficSigns[keyCategori].show= !this.state.dataTrafficSigns[keyCategori].show }}>
                    <Text  key={keyCategori} style={styles.catagory}>{this.state.dataTrafficSigns[keyCategori].name}</Text>
                </View>
                )
            for(var keySign in this.state.dataTrafficSigns[keyCategori].signs){
                arr.push(
                    <View key={keySign} style={styles.sign} ><Image style={styles.image}
                            source={{uri:this.state.dataTrafficSigns[keyCategori].signs[keySign].source,width:72,height:64}}/>
                        <View style={styles.text}>
                            <Text style={styles.id}>{keySign}</Text>
                            <Text style={styles.name}>{this.state.dataTrafficSigns[keyCategori].signs[keySign].name}</Text>
                            <Text style={styles.title}>{this.state.dataTrafficSigns[keyCategori].signs[keySign].title}</Text>
                        </View>
                    </View>)
            }
        }
            return(
                    arr
            );
    }
}
styles=StyleSheet.create({
    catagory:{
        padding:10,
        fontSize:20,
        backgroundColor:'#7a7a7a',
        color:'#fff'
    },
    sign:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor: '#bcbcbc',
        borderBottomWidth: 2,
    },
    image:{
        resizeMode: 'contain' , 
        backgroundColor:'red'
    },
    text:{
        flex:1,
        padding:10,
    },
    id:{
        fontSize:18
    },
    name:{
        fontSize:18
    },
    title:{
        fontSize:15
    }
})