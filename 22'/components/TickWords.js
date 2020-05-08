import React,{useState} from 'react';
import {CheckBox,StyleSheet,View,ScrollView,UIManager,Platform,LayoutAnimation,Text,Image, TouchableOpacity} from 'react-native';
import styles from '../assets/css/css';

//Tham khảo: https://medium.com/@iakash1195/expandable-listview-in-react-native-53ebdd78abea

const Lists=require('./databaseTick.json');
const CheckBoxItemComponent = ()=>{
  const [isSelected,setSelected]=useState(false);
  return(
    <View>
    <CheckBox
      value={isSelected}
      onValueChange={setSelected}
   />
   </View>
  );
};
class ExpandableItemComponent extends React.Component {
  //Custom Component for the Expandable List
  constructor() {
    super();
    this.state = {
      layoutHeight: 0,
    };
    
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.item.isExpanded) {
      this.setState(() => {
        return {
          layoutHeight: null,
        };
      });
    } else {
      this.setState(() => {
        return {
          layoutHeight: 0,
        };
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

  
  render() {
    return (
      <View>
        {/*Header of the Expandable List Item*/}
       
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles1.button}>
            <View style={{flexDirection: "row",}}>
              <CheckBoxItemComponent/>
              <Text style={styles1.header}>{this.props.item.word}</Text>
            </View>
          <View
          style={{
            height: this.state.layoutHeight,
            overflow: 'hidden',
          }}>
         
          {/*Content under the header of the Expandable List Item*/}
            <Text style={[styles1.text,{color:'green',marginHorizontal:20}]}>/{this.props.item.pronounce}/</Text>
            <Text style={[styles1.text,{marginHorizontal:20}]}>{this.props.item.description}</Text>

        </View>
        </TouchableOpacity>
        
      </View>
    );
  }
}
class TickWords2 extends React.Component {

  constructor() {
    super();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = { listDataSource: Lists };
  }
 
  updateLayout = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...this.state.listDataSource];
    array[index]['isExpanded'] = !array[index]['isExpanded'];
    this.setState(() => {
      return {
        listDataSource: array,
      };
    });
  };
 
 render() {
    
    return (
    <View style={styles.container}>
         <View style={styles.banner}>
          <Text style={[styles.paragraph,]} onPress={this._Done}>
            <Image style={[styles.icon_back,]} source={require('../assets/icon/back.png')}/>Học từ đã chọn</Text>
        </View>
        <ScrollView>
          {this.state.listDataSource.map((item, key) => (
            <ExpandableItemComponent
              key={item.word}
              onClickFunction={this.updateLayout.bind(this, key)}
              item={item}
            />
          ))}
        </ScrollView>

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
    paddingVertical:10,
    marginTop:10,
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
  header:{
    fontSize:20,
    fontWeight:'bold',
  },
  separator: {
    height: 0.5,
    backgroundColor: '#808080',
    width: '95%',
    marginLeft: 16,
    marginRight: 16,
  },
});
export default TickWords2;
