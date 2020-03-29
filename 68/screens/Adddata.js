import React from 'react';
import {
    View,
    Text, 
  StyleSheet
} from 'react-native';
import firebase from './../config/firebase';
const db = firebase.firestore();

const data = {
    kanjiGroup :[
        {
            groupName: "Kanji Cơ Bản 1",
            kanjiList:[
                {
                    kanji: "日",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "月",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "木",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "山",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "川",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                }, 
                {
                    kanji: "田",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "人",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                }, 
                {
                    kanji: "口",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "車",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "門",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
            ]
        },
        {
            groupName: "Kanji Cơ Bản 2",
            kanjiList:[
                {
                    kanji: "火",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "水",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "金",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "土",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "子",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                }, 
                {
                    kanji: "女",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "学",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                }, 
                {
                    kanji: "生",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "先",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "私",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
            ]
        },
        {
            groupName: "Kanji Cơ Bản 3",
            kanjiList:[
                {
                    kanji: "一",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "二",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "三",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "四",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "五",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                }, 
                {
                    kanji: "六",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "七",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                }, 
                {
                    kanji: "八",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "九",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
                {
                    kanji: "十",
                    on:["ひ","び","か"],
                    kun: ["ニチ","ニ"],
                    example: [
                        {
                            vi: "Mặt Trời",
                            ja: "日"
                        },
                        {
                            vi: "3 Ngày",
                            ja: "日"
                        },
                        {
                            vi: "Nhật Bản",
                            ja: "日"
                        },
                        {
                            vi: "Chủ Nhật",
                            ja: "日"
                        },
                    ]
                },
            ]
        }
    ]
}
function Adddata(){
    return(
        <View style={styles.container}>
            <Text onPress={()=>{
            console.error("Error writing document: ");
            db.collection("kanjiProject").doc("data").set(data)
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        }}>
                AZPirn8BCDOQBHQZknqmKlZQ
            </Text>
        </View>

    )
}

export default Adddata;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 40
  },
});
