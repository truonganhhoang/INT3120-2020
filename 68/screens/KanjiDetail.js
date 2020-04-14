import * as React from 'react';
import { Image, View, Text, ScrollView, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native'
const deviceWidth = Dimensions.get('window').width;
import Speaker from './../components/Speaker';
import KanjiPanel from '../components/KanjiPanel';
const screen = (percent)=> deviceWidth * percent / 100;
class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, }) => {
        return {
            title: "Kanji Chi Tiết",
            headerTitleAlign: 'center',

            headerTitleStyle: {
                textAlign: 'center',
                color: 'white',
            },
            headerTintColor: 'white',
            headerStyle: {
                height: 100,
                backgroundColor: '#006265',
                borderBottomWidth: 0,
                elevation: 0,
                shadowColor: 'transparent',
                shadowRadius: 0,
                shadowOffset: {
                    height: 0,
                },
            },
        };
    };
    render() {
        const {navigation} = this.props;
        const example = navigation.getParam('example');
        const on = navigation.getParam('on');
        const kun = navigation.getParam('kun');
        const kanji = navigation.getParam('kanji');

        return (
            <ScrollView>
                <View style={ styles.bottomHeader}></View>
                <View style={{ flexDirection: 'column', alignItems:'center'}}>
                <KanjiPanel kanji={kanji}/>
                <View style={styles.KanjiPanelDetail}>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <View>
                            <Text style={{width: 80,color: 'red'}}>Âm Kun</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {
                                kun.map((kunItem, index)=>
                                    <View key={index}>
                                        <Text style={styles.styleLabel}>{kunItem}</Text>
                                    </View>)
                            }
                        
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <View>
                            <Text style={{width: 80,color: 'red'}}>Âm On</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                        {
                            on.map((onItem, index)=>
                                <View key={index}>
                                    <Text style={styles.styleLabel}>{onItem}</Text>
                                </View>)
                        }
                            
                        </View>
                    </View>

                    <View style={{ marginTop: 20, marginLeft: 10}}>
                        <View>
                            <Text style={{ color: 'red'}}>
                                Ví Dụ
                            </Text>
                        </View>
 
                        <View style={{flexDirection: 'column',marginTop:10, height:280}}>
                            {
                                example.map((exampleItem, index)=>
                                    <View style={{flex:1}} key={index}>    
                                        <Text style={{color:  '#006265',fontSize:12}}>{exampleItem.hiragana}</Text>
                                        <View style={{flexDirection: 'row',alignItems: 'center',marginRight:10}}>
                                            <Text style={{color:'#006265', flex: 8, fontSize:30}}>{exampleItem.ja}</Text>
                                            <Text style={{color:'#006265', flex:8}}>{exampleItem.vi}</Text>
                                            <Speaker Text={exampleItem.ja}/>
                                        
                                        </View>
                                    </View>
                                )
                            }
                        </View>
                    
                    </View>
                </View>
            </View>
            </ScrollView>
           
        );
    }
}

const styles = StyleSheet.create({
    bottomHeader: {
        backgroundColor: '#006265',
        height: 20,
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    
    centerAlighElement: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    KanjiPanelDetail : {
        width: '90%',
        height: screen(120),
        marginTop: 20,
        paddingHorizontal: 8,
        paddingTop: 15,
        marginBottom: 20,
        borderRadius: 2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    styleLabel:{
        borderRadius: 10,
        minWidth:40,
        textAlign:'center',
        marginLeft: 10,
        backgroundColor: '#006265',
        color: 'white'
   }
})
export default DetailsScreen;
