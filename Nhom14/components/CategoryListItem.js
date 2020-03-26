import React from 'react'
import{
    Text,
    View,
    StyleSheet
} from 'react-native'

export default function CategoryListItem(props){
    return (
    <View style={styles.item}>
        <Text>ITEM</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        marginTop: 8,
        marginBottom: 8,
        paddingTop:20,
        paddingBottom:20,
        alignItems:'center',
        width:'100%',
        borderRadius:4,
        
    }
});