import React, { Component } from 'react';
import { View, Text,TouchableOpacity,SafeAreaView,StyleSheet,ScrollView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const navOptionHandler= () => ({
	headerShown: false
})

TraiDat = () =>
 	 <Stack.Navigator>
      <Stack.Screen name="Screen" component={Screen} options={navOptionHandler}/>

   	</Stack.Navigator>

Screen = ({ navigation }) => 
	<SafeAreaView>
	<ScrollView>
        <TouchableOpacity
             onPress={() => navigation.navigate("Câu 1", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>1</Text>
                </View>
                <Text style={styles.textContent}>KHÔNG KHÍ BAO QUANH TRÁI ĐẤT ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Câu 2", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>2</Text>
                </View>
                <Text style={styles.textContent}>TẦNG KHÍ QUYỂN DÀY BAO NHIÊU?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>3</Text>
                </View>
                <Text style={styles.textContent}>VÌ SAO TRÊN KHÔNG Ở VÙNG CỰC TRÁI ĐẤT CÓ LỖ THỦNG OZON?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>4</Text>
                </View>
                <Text style={styles.textContent}>VÌ SAO BẦU TRỜI CÓ MÀU XANH LAM??</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>5</Text>
                </View>
                <Text style={styles.textContent}>ẢO ẢNH TRÊN MẶT BIỂN HÌNH THÀNH NHƯ THẾ NÀO?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>6</Text>
                </View>
                <Text style={styles.textContent}>MÂY ĐƯỢC HÌNH THÀNH NHƯ THẾ NÀO?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>7</Text>
                </View>
                <Text style={styles.textContent}>VÌ SAO MÂY CÓ MÀU SẮC KHÁC NHAU?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>8</Text>
                </View>
                <Text style={styles.textContent}>Vì sao xuất hiện cầu vồng trên bầu trời?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>9</Text>
                </View>
                <Text style={styles.textContent}>Khí tượng, thời tiết và khí hậu có gì khác nhau?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>10</Text>
                </View>
                <Text style={styles.textContent}>Trong một ngày không khí lúc nào trong lành nhất</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
     </ScrollView>
    </SafeAreaView>

export default TraiDat;

const styles = StyleSheet.create({
	stt:{
		flexDirection:'row',
        alignItems: 'center',
		width: '80%',
		margin: 10,
	},
	square:{
		alignItems: 'center',
		justifyContent: 'center',
		width: 40,
		height: 40,
		backgroundColor: 'blue',
		borderRadius: 5
	},
	number:{
		fontSize: 20,
		color: 'white',	
	},
	textContent:{
		fontWeight: 'bold',
		marginLeft : 10
	},
	hr: {
	alignItems: 'center',
    borderBottomColor: '#94b8b8',
    borderBottomWidth: 1,
    width: '90%',
    marginLeft: 12
  },
})