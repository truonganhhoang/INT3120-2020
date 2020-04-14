import * as React from 'react';
import {StyleSheet,View,Alert,ScrollView,Text,Image,FlatList,TouchableOpacity} from 'react-native';
import styles from '../assets/css/css';
const Lists=[
  {"tu_moi":"Adopt",
  "nghia_rg":"nhận làm con nuôi",
  "tu_loai":{
    "ngoại động từ":
      ["nhận làm con nuôi, nhận làm bố mẹ nuôi","làm theo,theo","chọn(nghề, người cho một chức vụ)"]
    },
  "phien_am":"ə'dɔpt"
  },
  {"tu_moi":"Adult",
  "nghia_rg":"người lớn",
  "tu_loai":{
    "danh từ":
      ["người lớn, người trưởng thành"]
    },
  "phien_am":"'ædʌlt"
  }
]
class TickWords extends React.Component {
  constructor(props) {
    let temp=Lists;
    super(props);
    this.state = {
      data:temp,
    };
  }

  GetItem(item) {
    Alert.alert(item);
  }

  Render_FlatList_Sticky_header = () => {
    var Sticky_header_View = (
        <View style={[styles.banner,{marginBottom:10,}]}>
          <Text style={[styles.paragraph,{ flex: 1, flexDirection: 'column' }]} onPress={this._Done}>
          <Image style={styles.icon_back} source={require('../assets/icon/back.png')}/>
          Học từ đã chọn</Text>
          <Text style={{ flex: 1, flexDirection: 'column' }}></Text>
        </View>
    );

    return Sticky_header_View;
  };

  render() {
    
    return (
    <View style={styles.container}>

      <FlatList
          data={this.state.data}
          renderItem={({ item,index }) => (
            <TouchableOpacity style={styles1.button} onPress={this.GetItem.bind(this,item.tu_moi+"\n"+item.phien_am)}>
                <Text style={styles1.text}>{item.tu_moi}</Text>
                <Text style={{color:"#d3d3d3",fontSize: 14,}}>{item.nghia_rg}</Text>
            </TouchableOpacity>
          )}
          ListHeaderComponent={this.Render_FlatList_Sticky_header}
          stickyHeaderIndices={[0]}
          keyExtractor={(item,index)=>index.toString()}
      />
       <View style={[styles1.button1,{justifyContent: 'center' ,}]}>
         <Text style={[styles.text,{color:'#ffffff'}]} onPress={this._Practice}>Bắt đầu luyện tập</Text>
      </View>
    </View>
  );
  }
  _Practice= async () => {
    this.props.navigation.navigate('Menu');//tới trang luyện tập
    }
  _Done= async () => {
    this.props.navigation.navigate('Menu');
    }

}

const styles1 = StyleSheet.create({
  button: {
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#ffffff',
    height: 50,
    borderWidth: 1,
    borderColor: '#dfeae1',
    paddingLeft: 15,
  },
  button1:{
    backgroundColor:'#0cbb66',
    height:50,
    flexDirection:'row',
    alignItems: 'center',
    color:'#ffffff',
    margin :10,
  },
  text: {
    fontSize: 20,
  },
});
export default TickWords;
