import React from 'react';
import { View, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { Header } from 'react-native-elements';
import styles from '../AppStyles/Translate';

const ENGLISH_LABEL = 'English';
const VIETNAM_LABEL = 'Tiếng Việt';

export default class Translate extends React.Component {
  constructor(props){
    super(props)
    this.state={
      input: '',
      output: '',
      inputLanguage: 'en',
      outputLanguage: 'vi',
      inputLabel: ENGLISH_LABEL,
      outputLabel: VIETNAM_LABEL
    }
  }

  changeLanguage = () => {
    this.textInput.clear();
    if (this.state.inputLanguage == 'en'){
      this.setState({
        input: '',
        output: '',
        inputLanguage: 'vi',
        outputLanguage: 'en',
        inputLabel: VIETNAM_LABEL,
        outputLabel: ENGLISH_LABEL
      });
    }else if (this.state.inputLanguage == 'vi'){
      this.setState({
        input: '',
        output: '',
        inputLanguage: 'en',
        outputLanguage: 'vi',
        inputLabel: ENGLISH_LABEL,
        outputLabel: VIETNAM_LABEL
      });
    }
  }

  updateInput = async newInput => {
    this.state.input = newInput;
    if (newInput != '') {
      const response = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200425T124630Z.3ff43949bfa28bca.c59ae6ffef4f6681edf391e60552396b938426b0&text=${newInput}&lang=${this.state.inputLanguage}-${this.state.outputLanguage}`);
      const data = await response.json();
      if (this.state.input != ''){
        this.setState({output: data.text});
      }
    }else{
      this.setState({output: ''});
    }
  }

  render(){
    const {navigate} = this.props.navigation;
    return(
    <View style={styles().container}>
      <Header
        leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Home') }}
        centerComponent={{ text: "Dịch online", style: { color: '#fff' } }}
        containerStyle={styles().header}
      />
      <View style={styles().content}>

      <View style={{marginTop: 20}}>
          <View style={styles().label}>
            <Text style={styles().textLabel}>{this.state.outputLabel}</Text>
          </View>
          <ScrollView style={styles().outputContainer}>
            <Text style={styles().outputText}>{this.state.output}</Text>
          </ScrollView>
        </View>

        <View>
          <View style={styles().label}>
            <Text style={styles().textLabel}>{this.state.inputLabel}</Text>
            <TouchableOpacity 
              onPress={()=>this.changeLanguage()}
              style={styles().changeLanguageIcon}
            >
              <Icon name="swap-vert" size={32} color="white"/>
            </TouchableOpacity>
          </View>
          <TextInput
            ref = {input => this.textInput = input}
            style={styles().inputTextField} 
            multiline={true}
            onChangeText={newInput => this.updateInput(newInput)}
          />
        </View>

      </View>
    </View>
    );  
  }
}