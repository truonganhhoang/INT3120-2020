import React,{Component} from 'react';
import {
	View,
	Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity

}from 'react-native';

export default class ListSelect extends Component{
    render(){
        return(
            <View>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SelectCourse")}>
                        <Image source={require('../image/iconSetting.png')} 
                            style={styles.iconBack} >
                        </Image>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>[Name Course]</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.select,{backgroundColor:'#ffa101'}]}
                            onPress={() => this.props.navigation.navigate("Test")}
                        >
                            <Image source={require('../image/Layer1.png')} />
					        <Text style={styles.textSelect}>Đề ngẫu nhiên</Text> 
				        </TouchableOpacity>
                        <TouchableOpacity style={[styles.select,{backgroundColor:'#ff3334'}]}>
                            <Image source={require('../image/Layer2.png')} />
					        <Text style={styles.textSelect}>Thi theo bộ đề</Text> 
				        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.select,{backgroundColor:'#8bc24a'}]}>
                            <Image source={require('../image/Layer3.png')} />
					        <Text style={styles.textSelect}>Xem câu bị sai</Text> 
				        </TouchableOpacity>
                        <TouchableOpacity style={[styles.select,{backgroundColor:'#34bbbf'}]}>
                            <Image source={require('../image/Layer8.png')} />
					        <Text style={styles.textSelect}>Ôn tập câu hỏi</Text> 
				        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity  style={[styles.select,{backgroundColor:'#338bd5'}]}>
                            <Image source={require('../image/Layer4.png')} />
					        <Text style={styles.textSelect}>Các biển báo</Text> 
				        </TouchableOpacity>
                        <TouchableOpacity style={[styles.select,{backgroundColor:'#cc73e1'}]}>
                            <Image source={require('../image/Layer7.png')} />
					        <Text style={styles.textSelect}>Mẹo ghi nhớ</Text> 
				        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={[styles.select,{backgroundColor:'#795547'}]}>
                            <Image source={require('../image/Layer6.png')} />
					        <Text style={styles.textSelect}>Bài thi sa hình</Text> 
				        </TouchableOpacity>
                        <TouchableOpacity  style={[styles.select,{backgroundColor:'#607d8b'}]}>
                            <Image source={require('../image/Layer5.png')} />
					        <Text style={styles.textSelect}>Tốp 50 câu sai</Text> 
				        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        );
    };
}

const styles=StyleSheet.create({
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
        resizeMode:'stretch'
    },
    content:{
        paddingTop:20,
        paddingBottom:50
    },
    row:{
        
        flexDirection:'row',
        justifyContent :'space-around',
        marginBottom:20
    },
    select:{
        width:150,
        height:120,
        padding:10,
        alignItems:'center',
        justifyContent:'flex-end',
    },
    textSelect:{
        paddingTop:10,
        fontSize: 20,
    }
});