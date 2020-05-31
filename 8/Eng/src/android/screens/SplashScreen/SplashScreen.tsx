import React from 'react';
import { StyleSheet, SafeAreaView, View, ImageBackground, Dimensions } from 'react-native';
const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
import { CirclesLoader, PulseLoader, TextLoader, DotsLoader,EatBeanLoader } from 'react-native-indicator'
const SplashScreen = () => {
    const backgroundImg = "../../../../images/bg.jpg";
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#f57f17', width: SLIDER_WIDTH, height: SLIDER_HEIGHT }}>
            <ImageBackground
                source={require(backgroundImg)} style={{ width: SLIDER_WIDTH, height: SLIDER_HEIGHT }}
            >
                <View style={{justifyContent:'center',alignItems:'center',top:SLIDER_HEIGHT*0.7}}>
                    <EatBeanLoader color='#f57f17' size={50}/>
                </View>
            </ImageBackground>

        </View>

    )
}
const styles = StyleSheet.create({

});

export default SplashScreen;