import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView , ScrollView, ImageBackground, StyleSheet   } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Detail extends Component {

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trái Đất")}>
                
                <ImageBackground 
                  source={{
                    uri:
                      'https://1.bp.blogspot.com/-7kizDZo7Q0I/V-vkKgEA1cI/AAAAAAAACdI/WDcWz1jVtpk9dyWgiqks6IMaFMB8j2v9ACLcB/s1600/vuelta.jpg',
                  }}
                  style={{
                    width: '98%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 6, 

                  }}
                >
                <Text style={styles.titleContent}>Trái Đất</Text>
                <View style={{paddingVertical: 20,
                              paddingHorizontal: 10,
                              flexDirection: "row",
                              alignItems: "center"}}>
                  <Icon name="account-question" color="white" size={20} />
                  <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 5}}>201 câu</Text>
                </View>
                </ImageBackground >
              </TouchableOpacity> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Khoa Học Vũ Trụ")}>
                <ImageBackground
                  source={{
                    uri:
                      'https://thumbs.dreamstime.com/b/alien-mothership-spaceship-deep-space-ufo-spacecraft-flying-universe-planet-stars-rear-view-d-rendering-render-127064275.jpg',
                  }}
                  style={{
                    width: '98%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 6, 

                  }}
                >
                <Text style={styles.titleContent}>Khoa Học Vũ Trụ</Text>
                <View style={{paddingVertical: 20,
                              paddingHorizontal: 10,
                              flexDirection: "row",
                              alignItems: "center"}}>
                  <Icon name="account-question" color="white" size={20} />
                  <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 5}}>201 câu</Text>
                </View>
                </ImageBackground>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <ImageBackground
                  source={{
                    uri:
                      'https://previews.123rf.com/images/delcreations/delcreations1706/delcreations170600066/80701035-world-landmarks-photo-collage-on-vintage-tes-sepia-textured-background-travel-tourism-and-study-arou.jpg',
                  }}
                  style={{
                    width: '98%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 6, 

                  }}
                >
                <Text style={styles.titleContent}>Khoa Học Công Trình </Text>
                <View style={{paddingVertical: 20,
                              paddingHorizontal: 10,
                              flexDirection: "row",
                              alignItems: "center"}}>
                  <Icon name="account-question" color="white" size={20} />
                  <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 5}}>233 câu</Text>
                </View>
                </ImageBackground>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <ImageBackground
                  source={{
                    uri:
                      'https://www.balisafarimarinepark.com/wp-content/uploads/2018/11/African-Animals-in-Bali-Safari-Park-2.jpg',
                  }}
                  style={{
                    width: '98%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 6, 

                  }}
                >
                <Text style={styles.titleContent}>Động Vật</Text>
                <View style={{paddingVertical: 20,
                              paddingHorizontal: 10,
                              flexDirection: "row",
                              alignItems: "center"}}>
                  <Icon name="account-question" color="white" size={20} />
                  <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 5}}>242 câu</Text>
                </View>
                </ImageBackground>
              </TouchableOpacity> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <ImageBackground
                  source={{
                    uri:
                      'https://congly.vn/data/news/2015/6/18/sen.jpg',
                  }}
                  style={{
                    width: '98%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 6, 

                  }}
                >
                <Text style={styles.titleContent}>Thực Vật</Text>
                <View style={{paddingVertical: 20,
                              paddingHorizontal: 10,
                              flexDirection: "row",
                              alignItems: "center"}}>
                  <Icon name="account-question" color="white" size={20} />
                  <Text style={{color: 'white', fontWeight: 'bold', paddingLeft: 5}}>218 câu</Text>
                </View>
                </ImageBackground>
              </TouchableOpacity> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://media4.s-nbcnews.com/i/newscms/2018_22/2451826/180601-atomi-mn-1540_f415a90a9f0fcbddc7dfa4cc7b5a36c3.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://images.everyeye.it/img-notizie/alcuni-scienziati-innescato-fredda-reazione-chimica-dell-universo-v4-415128-1280x720.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://www.grenadabroadcast.com/wp-content/uploads/2019/11/IEFA.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://images.shiksha.com/mediadata/images/articles/1577103094phpy6yjGC.png',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://images.shiksha.com/mediadata/images/articles/1577103094phpy6yjGC.png',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://images.shiksha.com/mediadata/images/articles/1577103094phpy6yjGC.png',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://images.shiksha.com/mediadata/images/articles/1577103094phpy6yjGC.png',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://images.shiksha.com/mediadata/images/articles/1577103094phpy6yjGC.png',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity>  

              
      </ScrollView>
      </SafeAreaView >
    );
  }
}

export default Detail;

const styles = StyleSheet.create({
  titleContent: {
    color: 'white', 
    fontWeight: 'bold',
    fontSize: 15,
    padding: 10
  }
})