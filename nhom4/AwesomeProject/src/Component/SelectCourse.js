import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
}from 'react-native';

export  default class SelectCourse extends Component{
	constructor(props){
		super(props);
	}
	
	render(){
		navigationOptions = { header: null }
		return(
			
			<View>
				<TouchableOpacity style={styles.select} onPress={() => this.props.navigation.navigate("ListSelect",{key:"A1"})}>
					<Text style={styles.textName} >Bằng lái A1</Text>
					<Text>xe mô tô hai bánh có dung tích xi lanh dưới 175cm3</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.select} onPress={() => this.props.navigation.navigate("ListSelect",{key:"A1"})}>
					<Text style={styles.textName} >demo</Text>
					<Text>qwrewgasdjigakjsga</Text>
				</TouchableOpacity>
			</View>
			)
	};
}

const styles= StyleSheet.create({
	select:{
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	textName:{
		fontSize:18,
	}

})