import React, { Component } from 'react';
import { View, Text, SafeAreaView,ScrollView } from 'react-native';
import {baseApp} from '../FirebaseConfig.js';

export default class Screen3 extends Component{
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
			console.log(name["TẦNGKHÍ QUYỂN DÀY BAO NHIÊU?"].doan_1)
			this.setState({
				doan1: name["TẦNGKHÍ QUYỂN DÀY BAO NHIÊU?"].doan_1,
				doan2: name["TẦNGKHÍ QUYỂN DÀY BAO NHIÊU?"].doan_2,
				doan3: name["TẦNGKHÍ QUYỂN DÀY BAO NHIÊU?"].doan_3
			})
		})
	}

	render(){
		return(
			<SafeAreaView style={{backgroundColor: '#ffffb3'}}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={{padding: 10,lineHeight: 20, fontWeight: 'bold',textAlign: 'center'}}>
    				TẦNG KHÍ QUYỂN DÀY BAO NHIÊU?
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
