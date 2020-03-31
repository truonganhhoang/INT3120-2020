import * as React from 'react';
import {  View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';




const trafficSignData = [
    {
        id: '1',
        title: 'Biển đỏ',
        image: require('../../assets/images/home/biendo.jpg'),
        route:'Biển đỏ',
    },
    {
        id: '2',
        title: 'Biển xanh',
        image: require('../../assets/images/home/bienxanh.jpg'),
        route:'Biển xanh',
    },
     {
        id: '3',
        title: 'Biển vàng',
        image: require('../../assets/images/home/bienvang.jpg'),
        route:'Biển vàng',
    },
  
];

  
function Item( props) {
    const {route,image,title,navigation}=props;
    return (
        
       <TouchableOpacity style={styles.item}   onPress={() => {
        navigation.navigate('Detail', { route: route });
      }} >
                <View >
                    <View >
                        <Text style={styles.item_title}>{title}</Text>
                    </View>

                    <View>
                     <Image style={styles.tinyLogo} source={image}/>    
                    </View>
                </View>
            </TouchableOpacity>
    );
}

export default function TrafficSignList(props) {
    const {navigation}=props;
    return (
        <View>
     
            <FlatList
                horizontal={false}
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={trafficSignData}
                renderItem={({ item }) => 
                <Item title={item.title} route={item.route} image={item.image}  navigation={navigation}/>}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#dcdcdc',
        width: null,
        marginBottom:20,
    },
 
    item_title: {
        color: '#696969',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tinyLogo: {
        width: null,
        height: 200,
        resizeMode: 'cover',
      },
});