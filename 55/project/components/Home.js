import * as React from 'react';
import { Component } from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Category extends Component {
    
    render(){
        
        return(
            <View style={{backgroundColor: "blue", height: 150, width: 160}}>
                <TouchableOpacity>
                    <Image
                        source={"ng"}
                        resizeMode="stretch"
                        style={{ width: "100%", height: "100%" }}
                    />
                </TouchableOpacity>
            </View>

        )
    }
}
export function Home({ navigation }) {
    //const {navigate} = this.props.navigation;

    return (
        <View style={styles.screen}>
            <View style={styles.image}>
                <Image
                    source={require("../images/qc.jpg")}
                    resizeMode="stretch"
                    style={{ width: "100%", height: "100%" }}
                />
            </View>


            <View style={styles.content}>

                <View style={styles.row1}>
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={ () => navigation.navigate('Profile', {name: 'Chien', age: '17'})}
                    >
                        <Image
                            source={require("../images/thi_sat_hach.jpg")}
                            resizeMode="stretch"
                            style={ styles.icon }
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch}
                        onPress={ () => Alert.alert("Chiến Ca", width.toString())}
                    >
                        <Image
                            source={require("../images/tra_cuu_luat.jpg")}
                            resizeMode="stretch"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>


                <View style={styles.row1}>
                    <View style={styles.cell}>
                        <TouchableOpacity style={styles.touch}
                        onPress={() => navigation.navigate('Profile', { name: 'Chien', age: '17' })}>
                            <Image
                                source={require("../images/thi_sat_hach.jpg")}
                                resizeMode="stretch"
                                style={styles.icon}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cell1}>
                        
                    </View>
                </View>

                <View style={styles.row1}>
                    <TouchableOpacity
                        style={styles.touch}
                        onPress={() => navigation.navigate('Profile', { name: 'Chien', age: '17' })}
                    >
                        <Image
                            source={require("../images/thi_sat_hach.jpg")}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touch}
                        onPress={() => Alert.alert("Chiến Ca", width.toString())}
                    >
                        <Image
                            source={require("../images/tra_cuu_luat.jpg")}
                            resizeMode="contain"
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>

                
            </View>

            
            
        </View>        
    
    );
   
}

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

    image: {
        flex: 4,
        backgroundColor: "white",
    },

    content: {
        flex: 10,
        
    },

    row1: {
        flex: 1,
        flexDirection: "row",
        
    },
    row2: {
        flex: 1,
        backgroundColor: "red",
        flexDirection: "row",
    },

    cell: {
        flex: 1,
        backgroundColor: "blue",
    },

    cell1: {
        flex: 1,
        backgroundColor: "yellow",
    },

    icon: {
        flex: 1,
        width: 200,
        height: 100,

        justifyContent: 'center',
        alignItems: 'center',
        
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    icon2: {
        flex: 1,
        backgroundColor: "gray",
    },

    touch: {
        flex: 1,
        
    },

    foot: {
        flex: 1,
        backgroundColor: "yellow",
    }

});