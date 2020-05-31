import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native';
import { Container, Content, H3, Fab, Icon, Button } from 'native-base';
import { useScrollToTop } from '@react-navigation/native';
import HeaderScreen1 from '../components/HeaderScreen1';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Course from '../components/Course';
import * as Animatable from 'react-native-animatable';
export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
    render() {
        
        const {navigation} = this.props;
        return (
            <Container >
                <HeaderScreen1 
                    onPress1= {()=> navigation.navigate('Search')}
                    onPress2= {()=> navigation.navigate('MyCourses')}
                />
                <ScrollView showsHorizontalScrollIndicator={false} ref={this.props.scrollRef}> 
                    <Content>
                        <Animatable.View animation="bounceInRight">
                            <Course />
                        </Animatable.View>
                    </Content>
                </ScrollView>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ padding: 0}}
                    style={{ backgroundColor: '#5067FF', padding: 0, width: 50, height: 50 }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="md-funnel"/>
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon name="md-bookmark" />
                    </Button>
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <MaterialIcons name="fiber-new" color="#fff" size={24} />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        {/* <Icon name="md-flame" /> */}
                        <Fontisto name="shopping-sale" size={22} color='white' />
                    </Button>
                    <Button style={{ backgroundColor: '#DD5144' }}>
                        <Icon name="md-flame" color="#fff" />
                    </Button>
                    
                </Fab>
            </Container>
        )
    }
}
