import React,{Component} from 'react';
import {
	View,
	Text,
    StyleSheet,
    Image,
}from 'react-native';

export default class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {
          m: 15,
          s: 0
        };
      }
      start() {
        if (this.state.s ==0) {
          this.setState({
            m: this.state.m - 1,
            s: 59
          });
        } else {
          this.setState({
            s: this.state.s - 1
          });
//chuyen man hinh:

        }
      }
    render(){
        setTimeout(this.start.bind(this), 1000);
        return(
            <View>
                <View style={styles.header}>
                    <View style={styles.showListQuestion}>
                        <Image/>
                    </View>
                    <Text style={styles.nameHeader}></Text>
                    <View style={styles.submit}>
                        <Image/>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.time}>
                            <Text>{this.state.m}:{this.state.s} </Text>
                        </View>
                        <View style={styles.listQuestion}>
                        </View>
                    </View>
                </View>
            </View>
        );
    };
}

styles=StyleSheet.create({
    header:{
        height :50,
        flexDirection:'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems  :'center',
        backgroundColor:'#1687cb',
    },
    textHeader:{
        fontSize:20,
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