/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SearchScreen({navigation}) {
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
            Tìm kiếm
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <FontAwesome5 name={'heart'} color={'#fff'} size={30} />
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <FontAwesome5 name={'user-circle'} color={'#fff'} size={30} />
        </View>
      </View>
      <View style={styles.search}>
        <FontAwesome5 name="search" size={16} />
        <TextInput placeholder="Nhập từ khóa" placeholderTextColor={'white'} />
      </View>
      <ScrollView style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Hello')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                Hello
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>Xin chào</Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end hello */}
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                How are you?
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Bạn có khỏe không?
              </Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end how are you */}
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                I'm fine, thanks
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Cảm ơn, tôi khỏe
              </Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end im fine */}
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                I'm fine, thanks
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Cảm ơn, tôi khỏe
              </Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end im fine */}
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                I'm fine, thanks
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Cảm ơn, tôi khỏe
              </Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end im fine */}
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                I'm fine, thanks
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Cảm ơn, tôi khỏe
              </Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end im fine */}
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                I'm fine, thanks
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Cảm ơn, tôi khỏe
              </Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end im fine */}
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                I'm fine, thanks
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Cảm ơn, tôi khỏe
              </Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end im fine */}
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                I'm fine, thanks
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Cảm ơn, tôi khỏe
              </Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end im fine */}
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                I'm fine, thanks
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Cảm ơn, tôi khỏe
              </Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end im fine */}
        <TouchableOpacity onPress={() => navigation.navigate('Greeting')}>
          <View style={styles.item}>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'volume-up'} size={30} />
            </View>
            <View style={{flex: 4, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '500',
                  marginBottom: 5,
                }}>
                I'm fine, thanks
              </Text>
              <Text style={{color: '#9e9e9e', marginBottom: 5}}>
                Cảm ơn, tôi khỏe
              </Text>
              <Text>
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
                <FontAwesome5 name={'star'} color={'#e0e0e0'} light />
              </Text>
            </View>
            <View style={({flex: 1}, styles.canchinh)}>
              <FontAwesome5 name={'star'} color={'#e0e0e0'} size={30} />
            </View>
          </View>
        </TouchableOpacity>
        {/* end im fine */}
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
  search: {
    height: 50,
    backgroundColor: 'gray',
    color: 'white',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  canchinh: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
