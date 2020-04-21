import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


export default function MapScreen() {

    return (
        <View style={styles.container}>

            <MapView style={styles.map}
                initialRegion={{
                    latitude: 105.78825,
                    longitude: 18.4324,
                    latitudeDelta: 0.1,
                    longitudeDelta: 0.1,
                }}
            />
               <Marker
                coordinate={{
                    latitude: 105.78825,
                    longitude: 18.4324,
                }}
                    title={'test'}
                    description={"test"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map:
    {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    }
});

