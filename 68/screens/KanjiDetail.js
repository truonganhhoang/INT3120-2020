import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Dimensions } from 'react-native'
const deviceWidth = Dimensions.get('window').width

class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('categoryName'),
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
        const widthElement = deviceWidth * 45 / 100;
        return (
            <View>
                <View style={{
                    backgroundColor: '#006265',
                    height: 20,
                    marginTop: 0,

                }}></View>
                <View style={{
                    width: widthElement, height: widthElement,
                    backgroundColor: '#fff',
                    borderWidth: 0,
                    borderRadius: 5,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.55,
                    shadowRadius: 5,
                    elevation: 5,
                    marginTop: -20,
                    left: deviceWidth / 2 - widthElement / 2,
                }}><View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}><Text style={{
                    color: '#006265',
                    fontSize: 100,
                }}>字</Text></View>
                </View>
                <View style={{
                    height: 420,
                    width: deviceWidth * 90 / 100,
                    marginLeft: deviceWidth / 2 - deviceWidth * 45 / 100,
                    marginTop: 20,
                    borderRadius: 2,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 2,
                }}>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <View>
                            <Text style={{
                                width: 80,
                                color: 'red'
                            }}>Âm Kun</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{
                            }}>
                                <Text style={{
                                    borderRadius: 10,
                                    marginLeft: 10,
                                    backgroundColor: '#006265',
                                    color: 'white'
                                }}>あぶら</Text>
                            </View>
                            <View>
                                <Text style={{
                                    padding: 2,
                                    borderRadius: 10,
                                    marginLeft: 10,
                                    backgroundColor: '#006265',
                                    color: 'white'
                                }}>あぶら</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 10 }}>
                        <View>
                            <Text style={{
                                width: 80,
                                color: 'red'
                            }}>Âm On</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{
                            }}>
                                <Text style={{
                                    borderRadius: 10,
                                    marginLeft: 10,
                                    backgroundColor: '#006265',
                                    color: 'white'
                                }}>あぶら</Text>
                            </View>
                            <View>
                                <Text style={{
                                    borderRadius: 10,
                                    marginLeft: 10,
                                    backgroundColor: '#006265',
                                    color: 'white'
                                }}>あぶら</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, marginLeft: 10}}>
                        <View>
                            <Text style={{ color: 'red'}}>
                                Ví Dụ
                            </Text>
                        </View>
 
                        <View style={{flexDirection: 'column',marginTop:10, height:280}}>
                           
                            <View style={{flex:1}}>    
                                <Text style={{color:  '#006265', }}>ひ</Text>
                                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                    <Text style={{color:'#006265', flex: 8, fontSize:30}}>日</Text>
                                    <Text style={{color:'#006265',height:25, flex:8}}>ngày</Text>
                                    <Text style={{color:'#006265', flex: 3}}>loa</Text>
                                </View>
                            </View>

                            <View style={{flex:1}}>    
                                <Text style={{color:  '#006265'}}>ひ</Text>
                                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                    <Text style={{color:'#006265', flex: 8, fontSize:30}}>日</Text>
                                    <Text style={{color:'#006265',height:25, flex:8}}>ngày</Text>
                                    <Text style={{color:'#006265', flex: 3}}>loa</Text>
                                </View>
                            </View>

                            <View style={{flex:1}}>    
                                <Text style={{color:  '#006265', }}>ひ</Text>
                                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                    <Text style={{color:'#006265', flex: 8, fontSize:30}}>日</Text>
                                    <Text style={{color:'#006265',height:25, flex:8}}>ngày</Text>
                                    <Text style={{color:'#006265', flex: 3}}>loa</Text>
                                </View>
                            </View>
                            <View style={{flex:1}}>    
                                <Text style={{color:  '#006265', }}>ひ</Text>
                                <View style={{flexDirection: 'row',alignItems: 'center'}}>
                                    <Text style={{color:'#006265', flex: 8, fontSize:30}}>日</Text>
                                    <Text style={{color:'#006265',height:25, flex:8}}>ngày</Text>
                                    <Text style={{color:'#006265', flex: 3}}>loa</Text>
                                </View>
                            </View>

                        </View>
                    
                    </View>
                </View>
            </View>
        );
    }
}
export default DetailsScreen;
