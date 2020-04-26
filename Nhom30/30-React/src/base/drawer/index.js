import React, { Component } from 'react'
import { routes } from '../../../route/config';
import Item from './item'
import { StyleProvider, Container, List } from "native-base";
import { View, Image, Text} from 'react-native'


export default class Drawer extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <StyleProvider>
                <Container>
                    <Image
                        source={require('../../../icon/background_menu_left.jpg')}
                        style={styles.image}
                        />
                    <View style={{marginTop:10}}>
                        <List
                            dataArray={routes}
                            renderRow={data => {
                                return (
                                    <Item data={data} navigation={this.props.navigation}/>
                                );
                            }}
                        />
                    </View>
                </Container>
            </StyleProvider>
        )
    }
}
const styles = {
    image:{
        width:'100%',
        height:150
    }
}