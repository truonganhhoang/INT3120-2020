import React from 'react';
import { StyleSheet, View, Text, FlatList, ScrollView } from 'react-native';
import { ListItem, Header, CheckBox, Card, Icon } from 'react-native-elements';
import DropDownItem from 'react-native-drop-down-item';

const IC_ARR_DOWN = require('../assets/images/down-arrow.png');
const IC_ARR_UP = require('../assets/images/up-arrow.png');
export default class EnglishApp extends React.Component{
    state = {
        contents: [
          {
            title: 'Học tiếng Anh hàng ngày',
            body: '\n - Ghi lại giọng nói của bạn và kiểm tra \n - Chơi trò chơi từ vựng \n - Học bằng nhiều video hữu ích khác',
          },
          {
            title: 'Học ngữ pháp tiếng Anh',
            body: '\n - Chủ đề đa dạng, dùng Offline \n - Nhiều bài tập trắc nghiệm, cho phép tra từ TFLAT trong App \n - Nhiều danh ngôn, thành ngữ, truyện cười',
          },
          {
            title: 'Bài giải hay SGK, Sách bài tập',
            body: '\n - Không cần mua sách giải, sách bài tập, sách giáo khoa nữa. Đã có app SGK cho phép bạn tra bài học, bài giải một cách nhanh chóng \n - Hỗ trợ dùng offline',
          },
        ],
      };
    render(){
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Home') }}
                    centerComponent={{ text: "Phần mềm học tiếng anh", style: { color: '#fff' } }}
                />
                <ScrollView style={{ alignSelf: 'stretch' }}>
                    {
                    this.state.contents
                        ? this.state.contents.map((param, i) => {
                        return (
                            <DropDownItem
                                key={i}
                                style={styles.dropDownItem}
                                contentVisible={false}
                                invisibleImage={IC_ARR_DOWN}
                                visibleImage={IC_ARR_UP}
                                header={
                                    <View style={styles.title}>
                                      <Icon name='school'/>
                                      <Text style={{marginLeft:16}}>
                                          {param.title}
                                      </Text>
                                    </View>
                                }
                                visi
                            >
                                <Text>
                                      {param.body}
                                  </Text>
                                
                            </DropDownItem>
                        );
                        })
                        : null
                    }
                    <View style={{ height: 96 }}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d2d6d9'
    },
    header: {
      width: '100%',
      paddingVertical: 8,
      paddingHorizontal: 12,
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
    },
    dropDownItem:{
      marginTop:16,
      marginLeft:16,
      marginRight:16,
      
    },
    title:{
      flexDirection:'row',
      paddingLeft:16,
      backgroundColor:'white',
      paddingTop:16,
      paddingBottom:16
    }
  });