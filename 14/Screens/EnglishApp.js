import React from 'react';
import {  View, Text, ScrollView } from 'react-native';
import {  Header, Icon } from 'react-native-elements';
import DropDownItem from 'react-native-drop-down-item';
import styles from '../AppStyles/EnglishApp';
import PickColor from '../Config/Color';

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
        const color = PickColor(global.darkmode);
        const {navigate} = this.props.navigation;
        return(
            <View style={styles().container}>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Home') }}
                    centerComponent={{ text: "Phần mềm học tiếng anh", style: { color: '#fff' } }}
                    backgroundColor={color.headerColor}
                />
                <ScrollView style={{ alignSelf: 'stretch' }}>
                    {
                    this.state.contents
                        ? this.state.contents.map((param, i) => {
                        return (
                            <DropDownItem
                                key={i}
                                style={styles().dropDownItem}
                                contentVisible={false}
                                invisibleImage={IC_ARR_DOWN}
                                visibleImage={IC_ARR_UP}
                                header={
                                    <View style={styles().title}>
                                      <Icon name='school' color={color.iconColor}/>
                                      <Text style={styles().titleText}>
                                          {param.title}
                                      </Text>
                                    </View>
                                }
                            >
                                <View style={styles().dropDownContentContainer}>
                                    <Text style={styles().dropDownText}>
                                        {param.body}
                                    </Text>
                                </View>
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
