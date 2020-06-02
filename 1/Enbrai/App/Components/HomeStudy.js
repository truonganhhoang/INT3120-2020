import React, { useState, useEffect } from 'react';
import { View, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { withNavigation } from 'react-navigation';

const HomeStudy = (props) => {
    const [isReady, setIsReady] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [dataSelected, setDataSelected] = useState([])

    const handleDataSelected = (data) => {
        var selected = dataSelected
        var order = 0
        data.map(item => {
            item.order = order
            order++;
            selected.push(item)
        })
        setDataSelected(selected)
    }
    
    const handleReady = () => {
        setIsReady(true)
    }
    const handleFinished = () => {
        setIsFinished(true)
    }
    useEffect(() => {
    }, [isReady])

    if (isReady) {
        return (
            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                <StatusBar backgroundColor='#0288D1' barStyle='light-content'></StatusBar>
                <LinearGradient
                    style={styles.linearGradient}
                    colors={['#0592D2', '#39D57F']}
                >
                    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                        <Button
                            title='HỌC TỪ MỚI HÔM NAY'
                            buttonStyle={{ backgroundColor: 'white', borderRadius: 30, height: 50 }}
                            titleStyle={{ color: '#0592D2', fontSize: 15 }}
                            containerStyle={{ width: 265, display: 'flex', alignSelf: 'center', marginBottom: 25 }}
                            onPress={() => { props.navigation.navigate('ReadyScreen', { dataSelected: dataSelected, isFinished: isFinished, handleFinished: handleFinished})}}
                        />
                    </View>
                </LinearGradient>
            </View>
        )
    }
    // else if (isReady && isFinished) {
    //     return (
    //         <KeyboardAvoidingView>
    //             <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
    //                 <StatusBar backgroundColor='#0288D1' barStyle='light-content'></StatusBar>
    //                 <LinearGradient
    //                     style={styles.linearGradient}
    //                     colors={['#0592D2', '#39D57F']}
    //                 >
    //                     <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
    //                         <Button
    //                             title='BẠN ĐÃ HỌC HẾT TỪ CHO HÔM NAY!'
    //                             buttonStyle={{ backgroundColor: 'white', borderRadius: 30, height: 50 }}
    //                             titleStyle={{ color: '#0592D2', fontSize: 15 }}
    //                             containerStyle={{ width: 265, display: 'flex', alignSelf: 'center', marginBottom: 25 }}
    //                         />
    //                     </View>
    //                 </LinearGradient>
    //             </View>
    //         </KeyboardAvoidingView>
    //     )
    // }
    else {
        return (
            <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                <StatusBar backgroundColor='#1976D2' barStyle='light-content'></StatusBar>
                <LinearGradient
                    style={styles.linearGradient}
                    colors={['#0592D2', '#39D57F']}
                >
                    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
                        <Button
                            title='CHỌN 4 TỪ MỚI CHO HÔM NAY'
                            buttonStyle={{ backgroundColor: 'white', borderRadius: 30, height: 50 }}
                            titleStyle={{ color: '#0592D2', fontSize: 15 }}
                            containerStyle={{ width: 265, display: 'flex', alignSelf: 'center', marginBottom: 25 }}
                            onPress={() => props.navigation.navigate('PickNewWordScreen', { handleReady: handleReady, handleDataSelected: handleDataSelected })}
                        />
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