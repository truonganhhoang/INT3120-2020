import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';

class HomeStudy extends Component {
    render() {
        return (
            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                <StatusBar backgroundColor='#0592D2' barStyle='light-content'></StatusBar>
                <LinearGradient
                    style={styles.linearGradient}
                    colors={['#0592D2', '#39D57F']}
                >
                    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                        <Button
                            title='CHỌN 8 TỪ MỚI CHO HÔM NAY'
                            buttonStyle={{ backgroundColor: 'white', borderRadius: 30, height: 50 }}
                            titleStyle={{ color: '#0592D2', fontSize: 15 }}
                            containerStyle={{ width: 265, display: 'flex', alignSelf: 'center', marginBottom: 25}}
                            onPress={() => this.props.navigation.navigate('PickNewWordScreen')}
                        />
                        <Button
                            title='TÌM KIẾM MỘT TỪ'
                            type='clear'
                            titleStyle={{ color: 'white', fontSize: 14 }}
                            containerStyle={{ width: 265, display: 'flex', alignSelf: 'center', marginTop: 25 }}
                        ></Button>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}

export default withNavigation(HomeStudy);

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
})