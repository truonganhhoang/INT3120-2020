import * as React from 'react';
import{View,Text,Button} from 'react-native';

export function Home({navigation}){
    return (
        <View>

            <Text>Home Screen</Text>
            <Button title="nhan vao day nay" onPress={()=>navigation.navigate('Profile',{name:"Jane"})}/>
        </View>
    );
}