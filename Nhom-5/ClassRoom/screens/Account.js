import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { RectButton } from 'react-native-gesture-handler';
import {Feather } from '@expo/vector-icons/';
import {AuthContext} from '../Context';

export default function Account() {
  const {signOut, getToken} = React.useContext(AuthContext);
  const [isLoading, setLoading] = React.useState(true);
  const token = "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MzEsInVzZXJuYW1lIjoiU29tZW9uZSIsImVtYWlsIjoic29tZW9uZTJAZ21haWwuY29tIiwicGhvbmUiOiIxMjM0NSIsInNjaG9vbCI6IlVFVCIsImF1dGhvcml0aWVzIjpbIlJPTEVfU1RVREVOVCJdLCJpYXQiOjE1ODY3MTUxMDQsImV4cCI6MTU4NzU3OTEwNH0.2yOvXnOQv2N0jaJL2J5coe_seRPVPvC1F7rxFQhgUeOUzi9U3GiVReVGvbJN1IB8aFUp92wGDqshTa4Pf5IpMA";
  const [user, setUser] = React.useState("");
  const [userId, setId] = React.useState("41");
  const [school, setSchool] = React.useState("");

  React.useEffect(() => {
    fetch('https://mobile-uet.herokuapp.com/api/'+userId+'/get-user-by-id', {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.code == "success") {
          setUser(json.response.username);
          setSchool(json.response.school);
          //setId(json.response.id);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });

  return (
    <View style={styles.container}>
      {( isLoading || !token ) ? <ActivityIndicator size={80} color="#55CAED" /> : (
        <View style={styles.info}>
          <Avatar
            size={100}
            rounded
            title={getName(String(user)).charAt(0)}
            style={styles.avatar}
            overlayContainerStyle={{backgroundColor: '#3498db'}}s
          />
          <Text style={styles.userName}>{user}</Text>
          <Text>{school}</Text>
        </View>
      )}
      <View style={styles.menu}>
        <RectButton style={styles.option}>
          <View style={styles.optionLeft}>
            <Feather name="user" size={35} color='#555'/>
          </View>
          <View style={styles.optionRight}>
              <Text style={styles.optionLabel}>Tài khoản</Text>
              <Text style={styles.optionText}>Chỉnh sửa thông tin tài khoản</Text>
          </View>
        </RectButton>
        <RectButton style={styles.option}>
          <View style={styles.optionLeft}>
            <Feather name="lock" size={35} color='#555'/>
          </View>
          <View style={styles.optionRight}>
              <Text style={styles.optionLabel}>Mật khẩu</Text>
              <Text style={styles.optionText}>Thay đổi mật khẩu</Text>
          </View>
        </RectButton>
        <RectButton style={styles.option}  onPress={() => signOut()}>
          <View style={styles.optionLeft}>
            <Feather name="log-out" size={35} color='#555'/>
          </View>
          <View style={styles.optionRight}>
              <Text style={styles.optionLabel}>Đăng xuất</Text>
              <Text style={styles.optionText}>Đăng xuất tài khoản khỏi thiết bị</Text>
          </View>
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: "center",
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 3,
    marginLeft: -10,
  },
  userName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777',
    lineHeight: 24,
    textAlign: 'center',
  },
  menu: {
    width: '90%',
    flexDirection: 'column',
  },
  option:{
    height: 55,
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-around',
  },
  optionLeft: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  optionRight: {
    width: '80%',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomColor: '#555',
    borderBottomWidth: 0.5,
  },
  optionLabel: {
    fontWeight: 'bold',
    color: '#555',
    fontSize: 17,
  },
  optionText: {
    color: '#555',
    fontSize: 15,
  },
});

function getName(name) {
  var array = name.split(" ");
  return array[array.length - 1];
}
