import * as React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

import {AuthContext} from '../Context';

export default function Account({route, navigation}) {
  const {signOut} = React.useContext(AuthContext);
  const {token} = React.useContext(AuthContext);
  const [isLoading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState([]);
  const [userId, setId] = React.useState([]);

  React.useEffect(() => {
    fetch('https://mobile-uet.herokuapp.com/api/31/get-user-by-id', {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.code == "success") {
          setUser(json.response.username);
          setId(json.response.id);
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  });

  return (
    <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <View style={styles.info}>
          <Avatar
            size={100}
            rounded
            title={getName(String(user)).charAt(0)}
            style={styles.avatar}
            overlayContainerStyle={{backgroundColor: '#3498db'}}s
          />
          <Text style={styles.userName}>{user}</Text>
        </View>
      )}
      <View style={styles.footer}>  
        <Text style={{
          color: "#333",
          fontSize: 12,
        }}>{"User ID: "+userId}</Text>
        <Button  
          title="Sign out"
          type="clear"
          titleStyle={{
            color: '#e74c3c'
          }}
          onPress={() => signOut()}
        />
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
    justifyContent: 'space-between',
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  footer: {
    marginBottom: 20,
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
    fontSize: 17,
    fontWeight: 'bold',
    color: '#777',
    lineHeight: 24,
    textAlign: 'center',
  },
});

function getName(name) {
  var array = name.split(" ");
  return array[array.length - 1];
}
