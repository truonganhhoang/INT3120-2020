import React,{Component} from 'react';
import {
	View,
	Text,
    StyleSheet,
    Image,
    Button
}from 'react-native';

export default class ListSelect extends Component{

    render(){
        return(
            <View>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.select}>
                            <Text>AAAAAAAA</Text>
                        </View>
                        <View style={styles.select}>
                        <Text>BBBBB</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
}

styles=StyleSheet.create({
    header:{

    },
    textHeader:{

    },
    iconBack:{

    },
    content:{

    },
    row:{

    },
    select:{

    }
});