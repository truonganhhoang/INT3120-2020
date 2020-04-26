import React from 'react'
import BasePage from '../../../base/BasePage';
import { View } from 'react-native'
import RenderQuestion from './renderQuestion'
export default class LearnDetailsScreen extends BasePage {
    constructor(props) {
        super(props)
        this.dataQuestion = this.props.navigation.state.params
    }
   
    renderContent = () => {
        return (
            <View style={{
                width:'100%',
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <RenderQuestion parent={this} dataQuestion={this.dataQuestion}/>
            </View>
        )
    }
}
