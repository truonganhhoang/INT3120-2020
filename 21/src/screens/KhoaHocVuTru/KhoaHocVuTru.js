import React, { Component } from 'react';
import { View, Text,TouchableOpacity,SafeAreaView,StyleSheet,ScrollView } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const navOptionHandler= () => ({
	headerShown: false
})

KhoaHocVuTru = () =>
 	 <Stack.Navigator>
      <Stack.Screen name="Screen" component={ScreenKHVT} options={navOptionHandler}/>

   	</Stack.Navigator>

ScreenKHVT = ({ navigation }) => 
	<SafeAreaView>
	<ScrollView>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>1</Text>
                </View>
                <Text style={styles.textContent}>Vì sao phải nghiên cứu thiên văn?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>2</Text>
                </View>
                <Text style={styles.textContent}>Thiên văn và khí tượng quan hệ với nhau như thế nào?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>3</Text>
                </View>
                <Text style={styles.textContent}>Bốn phát hiện lớn của thiên văn học trong thập kỷ 60 của thế kỷ XX là gì?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>4</Text>
                </View>
                <Text style={styles.textContent}>Vì sao phải nghiên cứu thiên văn trong vũ trụ?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>5</Text>
                </View>
                <Text style={styles.textContent}>Vì sao phải nghiên cứu những phân tử giữa các vì sao?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>6</Text>
                </View>
                <Text style={styles.textContent}>Vì sao nói vũ trụ có thể khởi nguồn tử một vụ nổ lớn?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>7</Text>
                </View>
                <Text style={styles.textContent}>Thế nào là "bức xạ phông vũ trụ 3 K"?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>8</Text>
                </View>
                <Text style={styles.textContent}>Vì sao phòng quan trắc của các đài thiên văn phần nhiều có kết cấu đỉnh tròn?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <TouchableOpacity
             onPress={() => navigation.navigate("Screen 3", { name: "param 31" })}>
            <View style={styles.stt}>
            	<View style={styles.square}>
                	<Text style={styles.number}>9</Text>
                </View>
                <Text style={styles.textContent}>Vì sao các đài thiên văn thường đặt trên đỉnh núi?</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.hr}></View>
        <View style={styles.hr}></View>
     </ScrollView>
    </SafeAreaView>

export default KhoaHocVuTru;

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
		alignItems: 'center',
		justifyContent: 'center',
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