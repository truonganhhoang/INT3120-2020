import * as React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';

export default TabBarIcon = () => (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161924"
    },
 });
