import * as React from 'react';
import {StyleSheet,View,Alert,ScrollView,Text,Image,FlatList,TouchableOpacity} from 'react-native';
import styles from '../assets/css/css';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("dict_hh.db");

class TickWords2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      search:''
    };
    }

    async componentWillMount(){
        var query="CREATE TABLE if not exists av (id INTEGER,word TEXT,html TEXT,description TEXT,pronounce TEXT,PRIMARY KEY(id))";
        db.transaction(tx=> {
            tx.executeSql(query);
        });
        this.setState({loading:false});
    }
    async componentDidMount(){
        var query="SELECT * FROM av LIMIT 1";
        var params=[];
        db.transaction((tx) => {
            tx.executeSql(query, params, (tx, results) => {
            console.log(results);
                var len = results.rows._array.length;
                if(len > 0) {
                this.setState({data: row.results.rows._array});
                }
            });
        });
    }    

  GetItem(item) {
    Alert.alert(item);
  }

  Render_FlatList_Sticky_header = () => {
    var Sticky_header_View = (
        <View style={[styles.banner,{marginBottom:10}]}>
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
            <TouchableOpacity style={styles1.button} onPress={this.GetItem.bind(this,item.word+"\n"+item.pronounce)}>
                <Text style={styles1.text}>{item.word}</Text>
                <Text style={{color:"#d3d3d3",fontSize: 14,}}>{item.description}</Text>
            </TouchableOpacity>
          )}
          ListHeaderComponent={this.Render_FlatList_Sticky_header}
          stickyHeaderIndices={[0]}
          keyExtractor={(item,index)=>index.toString()}
      />
       <View style={[styles1.button1,{justifyContent: 'center' ,}]}>
         <Text style={styles.text} onPress={this._Practice}>Bắt đầu luyện tập</Text>
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
export default TickWords2;
