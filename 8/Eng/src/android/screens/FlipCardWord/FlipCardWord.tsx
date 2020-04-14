
import React from 'react';
import { FlipCard } from '../../components/FlipCard';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import styles from './styles';
import MenuButton from '../../components/Menu/Menu';
import { Back } from '../../components/Back';
import { ScrollView } from 'react-native-gesture-handler';
const Data = require('../../../../data/topic_detail.json');
// export class WordDetailResponse {
//     word_name: string;
//     en_meaning: string;
//     image_url: string;
//     spelling: string;
//     vn_meaning: string;
//     void_uri: string;
//     constructor() {
//         this.en_meaning = '',
//             this.word_name = '',
//             this.spelling = '',
//             this.vn_meaning = '',
//             this.void_uri = '',
//             this.image_url = ''
//     }
// }
const FlipCardWord = (props: { navigation?: any, route?: any }) => {

    const { navigation, route } = props;
    const { data, topic_name } = route.params;
    const listWords: any = [];
    //get value people
    Object.keys(Data).forEach((item, index) => {
        if (item == topic_name) {
            //get value lessons_detail
            Object.keys(Data[item].lessons_detail).forEach((item1, index1) => {
                if (data == item1) {
                    Object.keys(Data[item].lessons_detail[item1]).forEach((item2, index2) => {
                        listWords.push(Data[item].lessons_detail[item1][item2])
                        listWords[index2].word_name = item2;
                    })
                }
            })
        }
    });
    // console.log(listWords);
    // let wordGroupDetails = [];
    // wordGroupDetails = lessions.map((item: any) => {
    //     Object.keys(item).forEach((value, index) => {
    //         var respone = {
    //             word_name: value,
    //             en_meaning: item[value].en_meaning,
    //             image_uri: item[value].image_uri,
    //             spelling: item[value].spelling,
    //             vn_meaning: item[value].vn_meaning,
    //             void_uri: item[value].void_uri
    //         }
    //         return respone;
    //     })
    // });
    return (
        <View style={{ backgroundColor: '#E65100' }}>
            <Header
                containerStyle={styles.header}
                leftComponent={
                    <Back navigation={navigation} color={'#fff'} />
                }
                rightComponent={
                    <MenuButton />
                }
                centerComponent={{ text: 'People', style: styles.centerComponent }}
            />
            <ScrollView horizontal={true}>
                {
                    listWords.map((e: any) =>
                        <FlipCard data={e} />
                    )
                }
            </ScrollView>
        </View>
    );
}
export default FlipCardWord;