import React, { Component } from 'react';
import { Text, View ,StyleSheet,FlatList} from 'react-native';
import {firebaseApp} from './confix';

const root = firebaseApp.database().ref();
const animalRef = root.child('animal')
console.log(animalRef)
export default class LoiTh extends Component{
    constructor(props){
        super(props);
        this.state = ({
            animal: [],
            newAnimalName:'',
            loading: false,
        })
    }
  
   componentDidMount(){
    console.log("animal1");
    animalRef.once("value",(childSnapshot) =>{
       var animal = [];
        console.log('hjdkah')
        childSnapshot.forEach((doc) => {
            animal.push({
                key:doc.key,
                animalName:doc.toJSON().animalName,
            });

            this.setstate({
                animal: animal,
                loading: false,
            })
        })
    })
   }
   
   render(){
       return(
                <FlatList
                 data= {this.state.animal}
                renderItem= {({item, index})=>{
                return(
                <View>
                    <Text>{item.animalName}</Text>
                </View>
                
                )
            }}
            />
       )
   }
   } 