import React from 'react';
import {
    Image,
    Text,
    View,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native'
// import soccer from '../assets/cup.png';

export default function CategoryListItem (props){
    const {category} = props;

    return (
        <TouchableOpacity activeOpacity={0.5} 
        onPress={() => {
            Alert.alert('click!')
        }}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                {/* <Image source={soccer} style={styles.categoryImage}></Image> */}
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 40,
        backgroundColor:'#006265',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 30
    },
    // categoryImage: {
    //     width: 64,
    //     height: 64,
    //     color: 'white'
    // },
    title: {
        fontSize: 21,
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700',
        color: 'white'
    }
});
