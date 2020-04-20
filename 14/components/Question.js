import React from 'react';
import { View, Text } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import styles from '../AppStyles/Question'

export default class Question extends React.Component{
    
    state = {
          one:false,
          two:false,
          three:false,
          correct:false,
          checked:false,
          key:''
        }
      
    onePressed(){
       this.setState({
           one:true,
           two:false,
           three:false
       })
    }
    twoPressed(){
        this.setState({
            one:false,
            two:true,
            three:false
        })
    }
    threePressed(){
        this.setState({
            one:false,
            two:false,
            three:true
        })
    }
    check(result){
        if(result=='one'){
            if(this.state.one) this.setState({correct:true});
        }else if(result=='two'){
            if(this.state.two) this.setState({correct:true});
        }else if(result=='three'){
            if(this.state.three) this.setState({correct:true});
        }
        this.setState({
            checked:true,
            key:result
        })
    }
    reset(){
        this.setState({
            one:false,
            two:false,
            three:false,
            correct:false,
            checked:false,
            key:''
        })
    }
    render(){
        return(
            <View style={styles.container}>                
                <Text>{this.props.question}</Text>
                    <View style={{flexDirection:'row'}}>
                        <CheckBox
                            checked={this.state.one}
                            onPress={() => this.onePressed()}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                        />
                        <Text style={[styles.item, (this.state.key=="one")? styles.Keycorrect:null]}>{this.props.answer1}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <CheckBox
                            checked={this.state.two}
                            onPress={() => this.twoPressed()}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                        />
                        <Text style={[styles.item, (this.state.key=="two")? styles.Keycorrect:null]}>{this.props.answer2}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <CheckBox
                            checked={this.state.three}
                            onPress={() => this.threePressed()}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                        />
                        <Text style={[styles.item, (this.state.key=="three")? styles.Keycorrect:null]}>{this.props.answer3}</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',width:'100%'}} >
                        {this.state.checked?this.state.correct?<Text style={styles.correct}>Correct!</Text>:<Text style={styles.notcorrect}>Not correct!</Text>:null}
                        <Icon name='check' iconStyle={{color:'white',fontSize:25,backgroundColor:'green',borderRadius:15,marginRight:4}} onPress={()=>this.check(this.props.result) }/>
                        <Icon name='refresh' iconStyle={{color:'white',fontSize:25,backgroundColor:'red',borderRadius:15,marginRight:4}} onPress={()=>this.reset()}/>
                    </View>
                    
            </View>
        )
    }
}
