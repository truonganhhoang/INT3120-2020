import React, { Component } from 'react';
import { Text, View ,StyleSheet,ScrollView} from 'react-native';
export default class TrangChu extends Component{
    render(){
        return(
            <ScrollView style={{marginLeft:10,marginRight:10,marginTop:20}}>  
            <View style={{}}>
                <Text style={{color:"#0101DF",fontSize:20,borderBottomColor:"#A4A4A4",borderBottomWidth:2}}>1. Chấp nhận chính sách này</Text>
                <Text style={{marginTop:10,fontSize:18}}>Bằng cách truy cập, truy cập hoặc sử dụng Dịch vụ của chúng tôi, bạn lệnh truy cập và đại diện cho rằng bạn đã đọc, hiểu và đồng ý với Chính sách này và Điều khoản Dịch vụ của chúng tôi. Nếu bạn không đồng ý với bất cứ điều gì trong Chính sách này, bạn có thể không sử dụng hoặc truy cập Dịch vụ.</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#0101DF",fontSize:20,borderBottomColor:"#A4A4A4",borderBottomWidth:2}}>2. Sửa chữa chính sách này</Text>
                <Text style={{marginTop:10,fontSize:18}}>Chúng tôi có thể thay đổi định kỳ về Chính sách này khi cập nhật hoặc mở rộng Dịch vụ của mình. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi vật liệu nào về Chính sách quyền riêng tư này bằng cách thông báo cho bạn qua email, mà chúng tôi có trên file cho bạn hoặc thông báo trước khi về Dịch vụ của chúng thay đổi ngày có hiệu lực. Nếu bạn không đồng ý với các thay đổi, bạn nên ngừng sử dụng Dịch vụ trước khi Chính sách sửa đổi trở nên hiệu quả. Nếu bạn tiếp tục sử dụng Dịch vụ sau khi Chính sách sửa đổi đã nhập vào lực lượng, bạn sẽ bị ràng buộc bởi Chính sách sửa đổi.

Ngoài ra, chúng tôi có thể cung cấp cho bạn thông tin tiết lộ "mới" hoặc thông tin bổ sung về bộ sưu tập, sử dụng và chia sẻ dữ liệu cho Dịch vụ cụ thế. Những thông báo này có thể cung cấp thêm thông tin về thực hành quyền riêng tư của chúng tôi hoặc cung cấp cho bạn những lựa chọn bổ sung về cách chúng tôi xử lý thông tin
                </Text>
            </View>
            <View style={{marginTop:20}}>
                <Text style={{color:"#0101DF",fontSize:20,borderBottomColor:"#A4A4A4",borderBottomWidth:2}}>3. Thông tin thu thập thông qua Dịch vụ</Text>
                <Text style={{marginTop:10,fontSize:18}}>Trong Chính sách này, thuật ngữ "thông tin cá nhân" bao gồm mọi thông tin nhận dạng hoặc tạo ra một danh tính cá nhân. Dịch vụ của tôi không thu thập bất kỳ thông tin nào của bạn. Chúng tôi cam kết không thu thập bất kỳ thông tin nào của bạn
                </Text>
            </View>

        </ScrollView>
        );
    }
    
   }
   