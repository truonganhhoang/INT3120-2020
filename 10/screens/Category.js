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
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          title: "Hiện tại đơn",
          content: "Present simple",
          categoryId: 1
        },
        {
          id: 2,
          title: "Hiện tại tiếp diễn",
          content: "Present continuous",
          categoryId: 1
        },
        {
          id: 3,
          title: "Hiện tại hoàn thành",
          content: "Present perfect",
          categoryId: 1
        },
        {
          id: 4,
          title: "Hiện tại hoàn thành tiếp diễn",
          content: "Present perfect continuous",
          categoryId: 1
        },
        {
          id: 5,
          title: "Quá khứ đơn",
          content: "Simple past",
          categoryId: 1
        },
        {
          id: 6,
          title: "Quá khư tiếp diễn",
          content: "Past continuous",
          categoryId: 1
        },
        {
          id: 7,
          title: "Quá khứ hoàn thành",
          content: "Past perfect",
          categoryId: 1
        },
        {
          id: 8,
          title: "Quá khứ hoàn thành tiếp diễn",
          content: "Past perfect continuous",
          categoryId: 1
        },
        {
          id: 9,
          title: "Tương lai đơn",
          content: "Simple future",
          categoryId: 1
        },
        {
          id: 10,
          title: "Tương lai tiếp diễn",
          content: "Future continuous",
          categoryId: 1
        },
        {
          id: 11,
          title: "Tương lai hoàn thành",
          content: "Future perfect",
          categoryId: 1
        },
        {
          id: 12,
          title: "Tương lai hoàn thành tiếp diễn",
          content: "Future perfect continuous",
          categoryId: 1
        },
        {
          id: 13,
          title: "Bảng động từ bất quy tắc",
          content: "V2 P2 V-ed",
          categoryId: 1
        },
        {
          id: 14,
          title: "S singular - V Singular, S plural - V plural",
          content: "Cách chia động từ theo chủ ngữ cơ bản",
          categoryId: 2
        },
        {
          id: 15,
          title: "Always singular",
          content: "Các trường hợp luôn chia theo số ít",
          categoryId: 2
        },
        {
          id: 16,
          title: "Other structures",
          content: "Các cấu trúc đặc biệt",
          categoryId: 2
        },
        {
          id: 17,
          title: "To-V",
          content: "Các trường hợp to-V",
          categoryId: 3
        },
        {
          id: 18,
          title: "V-ing",
          content: "Các trường hợp V-ing",
          categoryId: 3
        },
        {
          id: 19,
          title: "Các cấu trúc thường dùng với to-V và V-ing",
          content: "Một số cấu trúc đăị biệt",
          categoryId: 3
        },
        {
          id: 20,
          title: "Đại từ",
          content: "Đại từ nhân xưng, tính từ sở hữu, đại từ sở hữu",
          categoryId: 4
        },
        {
          id: 21,
          title: "Danh từ",
          content: "Chức năng và vị trí, dấu hiệu nhận biết",
          categoryId: 4
        },
        {
          id: 22,
          title: "Cách nhận biết danh từ",
          content: "Các hậu tố tion, ment, ence, ness,...",
          categoryId: 5
        },
        {
          id: 23,
          title: "Cách nhận biết tính từ",
          content: "Các hậu tố ful, less, ish, able,...",
          categoryId: 5
        },
        {
          id: 24,
          title: "Cách nhận biết động từ",
          content: "Các hậu tố fy, ize, en, ate,...",
          categoryId: 5
        },
        {
          id: 25,
          title: "Cách nhận biết trạng từ",
          content: "Hậu tố 'ly' và một số trường hợp đặc biệt",
          categoryId: 5
        },
        {
          id: 26,
          title: "Tiền tố của các loại từ",
          content: "Tiền tố phủ định,...",
          categoryId: 5
        },
        {
          id: 27,
          title: "Tính từ",
          content: "Vị trí, cách dùng và cấu trúc",
          categoryId: 6
        },
        {
          id: 28,
          title: "Trạng từ",
          content: "Vị trí, cách dùng và cấu trúc",
          categoryId: 6
        },
        {
          id: 29,
          title: "Các câu so sánh cơ bản",
          content: "So sánh hơn, so sánh nhất,...",
          categoryId: 7
        },
        {
          id: 30,
          title: "Các câu so sánh nâng cao",
          content: "So sánh kép,...",
          categoryId: 7
        },
        {
          id: 31,
          title: "Mạo từ bất định",
          content: "A, an",
          categoryId: 8
        },
        {
          id: 32,
          title: "Mạo từ xác định",
          content: "The",
          categoryId: 8
        },
        {
          id: 33,
          title: "Các trường hợp đặc biệt",
          content: "Một số trường hơp đặc biệt của 'The',...",
          categoryId: 8
        },
        {
          id: 34,
          title: "Các động từ khuyết thiếu P1",
          content: "Can/could, might,...",
          categoryId: 9
        },
        {
          id: 35,
          title: "Các động từ khuyết thiếu P2",
          content: "Should, ought to, had better,...",
          categoryId: 9
        },
        {
          id: 36,
          title: "Câu điều kiện loại I",
          content: "If + S + V(s,es),...",
          categoryId: 10
        },
        {
          id: 37,
          title: "Câu điều kiện loại II",
          content: "If + S + Ved,...",
          categoryId: 10
        },
        {
          id: 38,
          title: "Câu điều kiện loại III",
          content: "If + S + had + P2,...",
          categoryId: 10
        },
        {
          id: 39,
          title: "Câu điều kiện dạng đảo ngữ",
          content: "Đảo ngữ câu điều kiện loại I, loại II,...",
          categoryId: 10
        },
        {
          id: 40,
          title: "Câu điều kiện dạng đặc biệt",
          content: "Câu điều kiện hỗn hợp",
          categoryId: 10
        },
        {
          id: 41,
          title: "Wish và if only",
          content: "Wish somebody do something,...",
          categoryId: 11
        },
        {
          id: 42,
          title: "Động từ chỉ yêu cầu mệnh lệnh",
          content: "S + V + that + S + (not) + Vo",
          categoryId: 11
        },
        {
          id: 43,
          title: "Cấu trúc ngữ pháp",
          content: "Tổng hợp cấu trúc ngữ pháp",
          categoryId: 12
        },
        {
          id: 44,
          title: "Các trường hợp đặc biệt",
          content: "Cấu trúc ngữ pháp đặc biệt của câu bị động",
          categoryId: 12
        },
        {
          id: 45,
          title: "Trực tiếp sang gián tiếp",
          content: "Thay đổi thì của động từ,...",
          categoryId: 13
        },
        {
          id: 46,
          title: "Chuyển câu đặc biệt sang gián tiếp",
          content: "Câu trần thuật,...",
          categoryId: 13
        },
        {
          id: 47,
          title: "Các cấu trúc đặc biệt của câu gián tiếp",
          content: "Prevented/Stopped + sb/st from + V-ing,...",
          categoryId: 13
        },
        {
          id: 48,
          title: "Đại từ quan hệ",
          content: "Whom, which, whose,...",
          categoryId: 14
        },
        {
          id: 49,
          title: "Trạng từ quan hệ",
          content: "Các rút gọn mệnh đề,...",
          categoryId: 14
        },
        {
          id: 50,
          title: "Mệnh đề chỉ thời gian và nơi chốn",
          content: "When, while, before, after,...",
          categoryId: 15
        },
        {
          id: 51,
          title: "Mệnh đề trạng ngữ chỉ nguyên nhân và cách thức",
          content: "Where, wherever,...",
          categoryId: 15
        },
        {
          id: 52,
          title: "Mệnh đề trạng ngữ chỉ mục đích và sự tương phản",
          content: "Because, since, as, seeing that,...",
          categoryId: 15
        },
        {
          id: 53,
          title: "Liên từ đẳng lập",
          content: "F, A, N,...",
          categoryId: 16
        },
        {
          id: 54,
          title: "Liên từ phụ thuộc",
          content: "Although, because, since, unless,...",
          categoryId: 16
        },
        {
          id: 55,
          title: "List of prepositions",
          content: "About, above, across, after,...",
          categoryId: 17
        },
        {
          id: 56,
          title: "Common prepositions",
          content: "At, in, on",
          categoryId: 17
        },
        {
          id: 57,
          title: "Complex prepositions",
          content: "According to, ahead of,...",
          categoryId: 17
        },
        {
          id: 58,
          title: "V, adj + prepositions",
          content: "V + on, V + at,...",
          categoryId: 17
        },
        {
          id: 59,
          title: "Preposition + Noun",
          content: "A cause of, contact with,...",
          categoryId: 17
        },
        {
          id: 60,
          title: "Common qualifiers",
          content: "Some, any, a lot of,...",
          categoryId: 18
        },
        {
          id: 61,
          title: "Other qualifiers",
          content: "All of, most of, some of,...",
          categoryId: 18
        },
        {
          id: 62,
          title: "Đảo ngữ phần 1",
          content: "Not & no",
          categoryId: 19
        },
        {
          id: 63,
          title: "Đảo ngữ phần 2",
          content: "So that, such that,...",
          categoryId: 19
        },
        {
          id: 64,
          title: "Đảo ngữ phần 3",
          content: "As than,...",
          categoryId: 19
        }
      ]
    }
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     products: []
  //   };
  // }


  // async componentDidMount() {
  //   const { route } = this.props;
  //   //const { navigation } = this.props;
  //   //console.log( navigation );
  //   //console.log( route );
  //   const id = route.params.id;
  //   const stringID = `${id}`;
  //   //console.log(stringID);
  //   return await fetch("https://532bc0a7.ngrok.io/products?categoryId="+stringID) //?categoryId=`${id}
  //     .then( (respone) => respone.json())
  //     .then((responeJson) => {
  //       //console.log(responeJson);
  //       this.setState({
          
  //         products: responeJson
  //       });
  //       //const { products } = this.state
  //       //console.log({ products });
  //     })
  //     .catch( (error) => {
  //       console.log(error);
  //     })
  // }



  render() {
    const { route } = this.props;
    const { navigation } = this.props;
    //console.log(route.params.id);
    const { products } = this.state;
    //console.log("HAHAHA" ,products);
    const product = products.filter(function(item){
      return item.categoryId === route.params.id
    });
    
    //console.log("HAHAHA" ,product);
    return (
      <View style={styles.container}>
        <FlatList data={product} 
          renderItem={({ item }) => <CategoryCom 
            product={item} 
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
    //backgroundColor: '#fff',
    backgroundColor: '#ddd',
    alignItems: 'stretch',
    justifyContent: 'center',
    // paddingLeft: 10,
    // paddingRight: 10,
    //backgroundColor: '#f7f7f7',
  },
  scroll: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    //borderTopColor: 'black',
    //borderTopWidth: 1,
    borderRadius: 5
  }
});

