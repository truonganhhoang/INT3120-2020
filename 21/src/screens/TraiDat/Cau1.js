import React, { Component } from 'react';
import { View, Text, SafeAreaView,ScrollView } from 'react-native';
import {baseApp} from '../FirebaseConfig.js';
import {Button} from 'native-base';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Screen3 extends Component{
	constructor(props){
		super();
		this.rootRef = baseApp.database();
		this.state={
			doan1 : "",
			doan2 : "",
			doan3 : ""
		}
	}
	data(rootRef){
		this.rootRef.ref("TRÁIĐẤT").once('value').then(data => {
			var name = data.val()
			for(var i in name){
				var key = i;
				var value = name[i]
				for(var j in value){
					
				}

			}
			this.setState({
				doan1: name["KHÔNGKHÍ BAO QUANH TRÁI ĐẤT ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?"].doan_1,
				doan2: name["KHÔNGKHÍ BAO QUANH TRÁI ĐẤT ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?"].doan_2,
				doan3: name["KHÔNGKHÍ BAO QUANH TRÁI ĐẤT ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?"].doan_3
			})
		})
	}

	render(){
		return(
			<SafeAreaView style={{backgroundColor: '#ffffb3'}}>

			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={{padding: 10,lineHeight: 20, fontWeight: 'bold',textAlign: 'center'}}>
    				KHÔNG KHÍ BAO QUANH TRÁI ĐẤT ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?
    			</Text>
    			<View style={{borderBottomColor: '#94b8b8',borderBottomWidth: 1, width: '90%', marginLeft: 12}}></View>
				<Text style={{padding: 10,lineHeight: 20, fontSize: 16}}>{this.state.doan1}</Text>
				<Text style={{padding: 10,lineHeight: 20, fontSize: 16}}>{this.state.doan2}</Text>
				<Text style={{padding: 10,lineHeight: 20, fontSize: 16}}>{this.state.doan3}</Text>

			</ScrollView>
			</SafeAreaView>
			
		)
	}
	componentDidMount(){
		this.data(this.rootRef);
	}
}


TTest = ({ navigation,route }) => 
	<View>
		<Button rounded transparent onPress={() => navigation.goBack()}
            style={{width: '10%',alignItems: 'center',justifyContent: 'center',margin: 5}}
        >
            <Icon name="keyboard-backspace" size={25} color={'white'}/>
        </Button>
        <Button rounded transparent 
            style={{width: '10%',alignItems: 'center',justifyContent: 'center',margin: 5}}
        >
            <Icon name="home" size={25} color={'white'}/>
        </Button>
        <View style={{color: 'red'}}>
		<Screen3 />
		</View>
	</View>

export default  TTest;