import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native';
import SliderHome from '../components/SliderHome';
import { Styles } from '../../styles';
import Provideo from '../components/Provideo';
import { Container, Content, H3 } from 'native-base';
import { useScrollToTop } from '@react-navigation/native';
import HeaderScreen1 from '../components/HeaderScreen1';
class Store extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        
        const {navigation} = this.props;
        return (
            <Container >
                <HeaderScreen1 onPress1= {()=> navigation.navigate('Search')}
                        onPress2= {()=> navigation.navigate('MyCourses')}
                />
                <ScrollView showsHorizontalScrollIndicator={false} ref={this.props.scrollRef}>
                    
                    <Content>
                        <SliderHome />
                        <H3 style={{margin: 8, marginTop:16}}>Khuyến mại</H3>
                        <Provideo toDetail={()=> navigation.navigate('Details1')} />
                        <H3 style={{margin: 8, marginTop:16}}>Top bán chạy</H3>
                        <Provideo toDetail={()=> navigation.navigate('Details1')}/>
                        <H3 style={{margin: 8, marginTop:16}}>Đánh giá cao</H3>
                        <Provideo toDetail={()=> navigation.navigate('Details1')}/>
                        <H3 style={{margin: 8, marginTop:16}}>Mới nhất</H3>
                        <Provideo />
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}

export default function Screen1(props) {
    const ref = React.useRef(null);
  
    useScrollToTop(ref);
  
    return <Store {...props} scrollRef={ref} />;
  }