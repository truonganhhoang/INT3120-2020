import React, { Component } from 'react';
import { Text, View ,StyleSheet,ScrollView} from 'react-native';
export default class TrangChu extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor:'#D8D8D8'}}>
               <View >
                    <View style={{backgroundColor:"#F6CED8",alignItems:"center",marginRight:20,marginLeft:20,marginTop:15}} >
                        <Text style={{paddingTop:10,paddingBottom:10,fontSize:20,color:'#0000FF'}}>LÝ THUYẾT</Text> 
                    </View >
                    <View style={{marginTop:15,backgroundColor:"#FFFFFF"}}>
                        <View style={{marginLeft:15,marginRight:15}}>
                            <Text style={{fontSize:20,marginBottom:10,color:'#0000FF',marginTop:20}}>Câu hỏi khái niệm</Text>
                            <View style={{color:"#5858FA"}}>
                                <Text style={{fontSize:17}}>1.Câu hỏi khái niệm có từ " Vạch - Phố - Dải - Phần " chọn ý 1</Text>
                                <Text style={{fontSize:17}}>2. Câu hỏi khái niệm có từ " Bộ - Ưu - Phương - Làn " chọn ý 2 ( Bộ chọn cả 1 , 2 )</Text>
                                <Text style={{fontSize:17}}>3.Câu hỏi có từ "Phường tiện giao thông cơ giới đường bộ "chọn ý 2</Text>
                                <Text style={{fontSize:17}}>4. Câu hỏi có từ “hành vi” – Cấm hết.</Text>
                                <Text style={{fontSize:17}}>5. Người điêu khiển phương tiện giao thông đường bộ mà trong cơ thể có chất ma túy thì bị nghiêm cấm.</Text>
                                <Text style={{fontSize:17}}>6. Trên cầu, gầm cầu,đường cầu , khu vực giao nhau - không được quay đầu , lùi xe , vượt xe .</Text>
                                <Text style={{fontSize:17}}>7. Trách xe đi ngược chiều theo nguyên tắc: Xuống dốc nhường xe lên dốc, xe gần vị trí tránh phải cho xe kia đi trước, xe nào có chướng ngại vật phía trước phải nhường đường cho xe không vướng chướng ngại vật đi trước.</Text>
                                <Text style={{fontSize:17}}>8. Vào đường cao tốc - chọn ý 1,3,Ra khỏi đường cao tốc phải “chuyển dần”</Text>
                                <Text style={{fontSize:17}}>9. Khi điều khiển xe chạy trên đường người lái xe phải mang các loại giấy tờ - Câu trả lời dài nhất.</Text>
                            </View>
                            <Text style={{fontSize:20,marginBottom:10,color:'#0000FF',marginTop:20}}>Câu hỏi xe hình</Text>
                            <Text style={{fontSize:17}}>+ Khi gặp vòng xuyến , cảnh sát giao thông đứng giữa đường - Chọn ý 3.</Text>
                            <Text style={{fontSize:17}}>+ Trong giao lộ khi không có đèn, biển báo , người điều khiển giao thông , không có xe nào vào giao lộ trước - có mấy xe chọn ý đó (câu 117,132).</Text>
                            <Text style={{fontSize:17}}>+ Thứ tự xe đi trên giao lộ: Xe đã vào trong giao lộ - xe ưu tiên - xe đi trên đường ưu tiên - các xe còn lại.</Text>
                            <Text style={{fontSize:17}}>+ Khi gặp dàn xe trong câu hỏi những xe vi phạm quy tắc giao thông - chọn câu trả lời có xe con (E).</Text>
                            <Text style={{fontSize:17}}>Trong giao lộ</Text>
                            <Text style={{fontSize:17}}>+ Gặp vòng xuyến – nhường đường cho xe đi bên trái .</Text>
                            <Text style={{fontSize:17}}>+ Không gặp vòng xuyến - nhường đường cho xe đi bên phải .</Text>
                            <Text style={{fontSize:17}}>Tại nơi đường giao nhau:</Text>
                            <Text style={{fontSize:17}}>+ Người điều khiển giao thông ra lệnh bằng 1 tay chọn 2 , 2 tay chọn 1</Text>
                            
                            <Text style={{fontSize:17}}>+ Người điều khiển giao thông ra lệnh trái với biển báo đèn tín hiệu – điều khiển phương tiện theo sự hoạt động của người điều khiển giao thông.</Text>
                            <Text style={{fontSize:20,marginBottom:10,color:'#0000FF',marginTop:20}}>Câu hỏi về nồng độ cồn</Text>
                            <Text style={{fontSize:17}}>+ Đối với xe mô tô gắn máy: 0,25; 0,5</Text>
                            <Text style={{fontSize:17,marginBottom:50}}>+ Đối với xe ô tô máy kéo, xe máy chuyên dùng thì không được có nồng độ cồn trong máu và khí thở.</Text>  
                        </View>
                        
                    </View>
               </View>
            </ScrollView>
        );
    }
    
   }
   