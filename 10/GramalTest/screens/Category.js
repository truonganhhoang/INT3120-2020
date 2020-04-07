import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import CategoryCom from '../components/CategoryCom';

export default class Category extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam(cactegoryName)
    }
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     listCategory: [
  //       { id: 1, title: 'Các thì trong tiếng Anh', content: 'Hiện tại đơn, hiện tại tiếp diễn, quá khứ đơn,...' },
  //       { id: 2, title: 'Sự hòa hợp giữa chủ ngữ và động từ', content: 'Các quy tắc chia động từ để phù hợp với danh từ,...' },
  //       { id: 3, title: 'Danh động từ và động từ chuyển thể', content: 'To V và V-ing,...' },
  //       { id: 4, title: 'Danh từ và đại từ', content: 'Định nghĩa của danh từ và đại từ,...' },
  //       { id: 5, title: 'Sự cấu tạo từ', content: 'Ý nghĩa của các hậu tố tion, ment, ence,...' },
  //       { id: 6, title: 'Tính từ trạng từ', content: 'Tính từ, trạng từ và hậu tố của tính từ và trạn từ,...' },
  //       { id: 7, title: 'Các phép so sánh', content: 'So sánh hơn, so sánh nhất, cấu trúc so sánh,...' },
  //       { id: 8, title: 'Mạo từ', content: 'A/an/the' },
  //       { id: 9, title: 'Động từ khuyết thiếu', content: 'Could, would, should, might,...' },
  //       { id: 10, title: 'Câu điều kiện', content: 'If, unless, will, can, would, could,...' },
  //       { id: 11, title: 'Câu giả định', content: 'Wish, if, only, as if-as-though,...' },
  //       { id: 12, title: 'Câu bị động', content: 'Passive voice,...' },
  //       { id: 13, title: 'Câu gián tiếp', content: 'Cấu trúc thường gặp,...' },
  //       { id: 14, title: 'Mệnh đề quan hệ', content: 'Who, whon, which, that,...' },
  //       { id: 15, title: 'Mệnh đề trạng từ', content: 'As, as if, in order that,...' },
  //       { id: 16, title: 'Liên từ', content: 'For, and, nor, but, or, yet, so, therefore, hence,...' },
  //       { id: 17, title: 'Giới từ', content: 'In, on, at, about, above, across, after,...' },
  //       { id: 18, title: 'Lượng từ', content: 'Some, any, a lot of/lots of,...' },
  //       { id: 19, title: 'Câu đảo ngữ', content: 'Never, little, rarely,...' }
  //     ]
  //   };
  // }

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }


  async componentDidMount() {
    const { route } = this.props;
    //const { navigation } = this.props;
    //console.log( navigation );
    //console.log( route );
    const id = route.params.id;
    const stringID = `${id}`;
    //console.log(stringID);
    return await fetch("https://532bc0a7.ngrok.io/products?categoryId="+stringID) //?categoryId=`${id}
      .then( (respone) => respone.json())
      .then((responeJson) => {
        //console.log(responeJson);
        this.setState({
          
          products: responeJson
        });
        //const { products } = this.state
        //console.log({ products });
      })
      .catch( (error) => {
        console.log(error);
      })
  }



  render() {
    const { route } = this.props;
    const { navigation } = this.props;
    //console.log(route.params.categoryName);
    const { products } = this.state;
    return (
      <View style={styles.container}>
        <FlatList data={products} 
          renderItem={({ item }) => <CategoryCom 
            category={item} 
            onPress={() => navigation.navigate('Data')}
          />}
          keyExtractor={item => `${item.id}`} 
          style={styles.scroll} 
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    // paddingLeft: 10,
    // paddingRight: 10,
    backgroundColor: '#f7f7f7'
  },
  scroll: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10
  }
});

