
import React from 'react';
import { FlipCard } from '../../components/FlipCard';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import styles from './styles';
import MenuButton from '../../components/Menu/Menu';
import {Back} from '../../components/Back';
const FlipCardWord = (props: { navigation?: any, route?: any }) => {
    const { navigation, route } = props;
    const { data } = route.params;
    console.log(data);
    return (
        <View style={{backgroundColor:'#E65100'}}>
            <Header
                containerStyle={styles.header}
                leftComponent={
                    <Back navigation={navigation} color={'#fff'} />
                }
                rightComponent={
                    <MenuButton />
                }
                centerComponent={{ text: data.word_group_name, style: styles.centerComponent }}
            />
            <FlipCard data={data} />
        </View>
    );
}
export default FlipCardWord;