import * as React from 'react';
import { Button, View, Image, Text, StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import StackScreen from './Stack';
import Help from './Help';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function Usage({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

function CustomDrawerContent(props) {

    return (

        <DrawerContentScrollView {...props}>

            <StatusBar
                translucent={true}
                backgroundColor={'transparent'}
                barStyle={'dark-content'}
            />

            <Image
                resizeMode="stretch"
                source={require("../images/cat.jpg")}
                style={{ height: 200, width: "100%" }}
            />

            <DrawerItem
                label='Học, học nữa, học mãi!'
                color="red"
                onPress={() => props.navigation.navigate('Stack')}
                icon={() => <Icon size={25} name='car' />}
            />

            <DrawerItem
                label='Mà vẫn dốt...'
                onPress={() => props.navigation.navigate('Help')}
                icon={() => <Icon size={25} color='gray' name='help-circle-outline' />}
            />

        </DrawerContentScrollView>
    );
}


const Drawer = createDrawerNavigator();


export default class MyDrawer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;
        return (
            <Drawer.Navigator

                initialRouteName="Home"
                // hideStatusBar={true}

                drawerContent={(props) => <CustomDrawerContent {...props} />}
                // drawerContent={() => <CustomDrawerContent />}

                drawerStyle={{
                    // backgroundColor: "red",
                    width: 310,
                }}

                drawerContentOptions={{

                    // activeTintColor: "green",
                    // activeBackgroundColor: "#eee",
                    labelStyle: {
                        color: "green",
                    },
                    itemStyle: {
                        // height: 200,
                        // backgroundColor: "yellow",
                    },

                }}
            >



                <Drawer.Screen name="Stack" component={StackScreen} />
                <Drawer.Screen name="Help" component={Help} />
            </Drawer.Navigator>
        );
    }
}

