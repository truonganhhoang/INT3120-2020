import * as React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';



const trafficSignData = [
    {
        id: '1',
        title: 'Biển cấm',
        image: require('../../assets/images/home/biendo.jpg'),
        route:'Biển đỏ',
    },
    {
        id: '2',
        title: 'Biển báo nguy hiểm',
        image: require('../../assets/images/home/bienxanh.jpg'),
        route:'Biển xanh',
    },
     {
        id: '3',
        title: 'Biển hiệu lệnh',
        image: require('../../assets/images/home/bienvang.jpg'),
        route:'Biển vàng',
    },
    {
        id: '4',
        title: 'Biển chỉ dẫn',
        image: require('../../assets/images/home/biendo.jpg'),
        route: 'Biển vàng',
    },
    {
        id: '5',
        title: 'Biển phụ',
        image: require('../../assets/images/home/bienxanh.jpg'),
        route: 'Biển vàng',
    },
    {
        id: '6',
        title: 'Vạch kẻ đường',
        image: require('../../assets/images/home/bienvang.jpg'),
        route: 'Biển vàng',
    },
];

  
function Item( props) {
    const {route,image,title,navigation}=props;
    return (
        
       <TouchableOpacity onPress={() => {
        navigation.navigate('Detail', { route: route });
      }} >
            <View style={styles.item}>
                <Image style={styles.tinyLogo} source={image} />    
                <Text style={styles.item_title}>{title}</Text>
            </View>
       </TouchableOpacity>
    );
}

export default function TrafficSignListCategories(props) {
    const {navigation}=props;
    return (
        <View >
     
            <FlatList
                horizontal={false}
                numColumns={1}
                keyExtractor={(item) => item.id}
                data={trafficSignData}
                renderItem={({ item }) => 
                <Item title={item.title} route={item.route} image={item.image}  navigation={navigation}/> }
            />
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        paddingVertical: 3,
        borderBottomWidth: 1.2,
        borderColor: '#d3d3d3',
        flexDirection: 'row',
        //elevation: 0.8,
    },
 
    item_title: {
        color: '#696969',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 9,
        //textAlign: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        //borderColor: "#CED0CE",
        //borderWidth: 1,
        marginLeft: 13,
    },
});