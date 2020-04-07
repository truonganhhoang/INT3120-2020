/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ExamScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <FontAwesome5 name={'bars'} color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
            Kiểm tra
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => Alert.alert('Facebook')}>
            <FontAwesome5 name={'facebook-square'} color={'#fff'} size={30} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-Greetings.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Greetings
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>Chào hỏi</Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* end greeting */}

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('GeneralConversation');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-General-Conversation.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: 'green',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                General Conversation
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>Cần thiết</Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end generalconversation */}

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Number');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-Numbers.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: 'orange',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Numbers
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>Số đếm</Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end number */}

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('TimeandDate');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-TimeandDate.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Time and Date
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Ngày và thời gian
              </Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end time and date */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('DirectionsandPlace');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon_DirectionsandPlaces.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: '#e553d8',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Directions and Places
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Phương hướng và địa điểm
              </Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Directions and Places */}

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Accommodation');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-Accommodation.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: '#32c978',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Accommodation
              </Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Accommodation */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('EatingOut');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-EatingOut.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: '#fb6449',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Eating Out
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Ăn và uống
              </Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Eating Out */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Shopping');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-Shopping.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: '#82d480',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Shopping
              </Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Shopping */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Countries');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-Countries.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: '#e96269',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Countries
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>Đất nước</Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Countries */}

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Family');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-Family.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: '#3bd1c8',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Family
              </Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Family */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Dating');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-Dating.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: '#e553d8',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Dating
              </Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Dating */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Emergency');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-Emergency.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: '#33ca79',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Emergency
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Tình trạng khẩn cấp
              </Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Emergency */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('MedicalExamination');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-MedicalExamination.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: '#80d47f',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Medical Examination
              </Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Medical Examination */}
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Colours');
          }}>
          <View style={styles.item}>
            <View style={{flex: 1}}>
              <ImageBackground
                source={require('../images/Icon-Color.png')}
                style={{width: 100, height: 100, marginLeft: 10}}
              />
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  color: '#fec107',
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Colours
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>Màu sắc</Text>
              <Text>0%</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* end Colours */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#12a6e4',
  },
  content: {
    backgroundColor: '#fff',
  },
  item: {
    height: 100,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  iconitem: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF',

    margin: 20,
  },
  itemtool: {
    marginTop: 5,
    marginLeft: 40,
  },
});
