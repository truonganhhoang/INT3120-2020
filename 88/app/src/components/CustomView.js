import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

// const randomHexColor = () => {
//     return 'gray'.replace(function() {
//       return ;
//     });
//   };

const One = (props) => {
    var blur;
    if(props.blur != 1){
        blur = 20;
    }else{
        blur = 0;
    }
    console.log(blur);
  return (
    <View style={styles.styleOne}>
      <TouchableNativeFeedback
        // onPress={() => {
        //   setRippleColor(randomHexColor());
        // //   setRippleOverflow(!rippleOverflow);
        // }}
        background={TouchableNativeFeedback.Ripple(
          'rgba(217, 217, 217, .5)',
          true,
        )}>
        <View>
          <Image
            style={{width: 70, height: 70}}
            borderRadius={40}
            backgroundColor={'gray'}
            blurRadius={blur}
            source={require('../assets/img/user_icon.png')}
          />
        </View>
      </TouchableNativeFeedback>
      <Text style={styles.textStyle}>{props.name}</Text>
    </View>
  );
};

const Two = (props) => {
    var name1 = props.name1.split(" ");
    var name;
    if (name1.length == 3){
        name = name1[0] + '\n ' + name1[1] + ' '+ name1[2];
    }else{
        name = props.name1;
    }
    var blur;
    if(props.blur != 1){
        blur = 20;
    }else{
        blur = 0;
    }
    console.log(props.urlImg);
  return (
    <View style={styles.styleTwo}>
      <View style={styles.styleOne}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            'rgba(217, 217, 217, .5)',
            true,
          )}>
          <View>
            <Image
              style={{width: 70, height: 70}}
              borderRadius={40}
              blurRadius={blur}
              backgroundColor={'gray'}
              source={require('../assets/img/user_icon.png')}
            />
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.textStyle}>{name}</Text>
      </View>

      <View style={styles.styleOne}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            'rgba(217, 217, 217, .5)',
            true,
          )}>
          <View style={styles.touchable}>
            <Image
              style={{width: 70, height: 70}}
              borderRadius={40}
              blurRadius={blur}
              backgroundColor={'gray'}
              source={require('../assets/img/user_icon.png')}
            />
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.textStyle}>{props.name2}</Text>
      </View>
    </View>
  );
};
const CustomListview = () => {
  return (
    <ScrollView>
      <One name="Overview" blur={1}/>
      <One name="Basic Concepts" blur={0}/>
      <Two name1="Conditionals and Loops" name2="Functions" blur={0} urlImg='../assets/img/user_icon.png'/>
      <Two name1="Objects" name2="Core Objects" blur={0}/>
      <One name="DOM & Events" blur={0}/>
      <One name="ECMAScript 6" blur={0}/>
      <One name="Certificate" blur={0}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  styleOne: {
    margin: 20,
    alignItems: 'center',
  },
  styleTwo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textStyle: {
    marginTop: 10,
    marginBottom: 30,
    color: 'gray',
    fontSize: 15,
    textAlign: 'center',
  },
  touchable: {},
});

export default CustomListview;
