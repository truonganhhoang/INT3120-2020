import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import auth from '@react-native-firebase/auth'
import { facebookLogin, anonymousLogin } from '../../services/auth'

class auth extends React.Component {
  constructor(props) {
    super(props)
    // Set an initializing state whilst Firebase connects
    this.initializing = this.setInitalizing = useState(true)
    this.user = this.setUser = useState()
    this.onAuthStateChanged((user) => {
      setUser(user)
      if (initializing) setInitializing(false)
    })
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
      return subscriber // unsubscribe on unmount
    }, [])
  }

  render() {
    if (initializing) return null
    if (!this.props.user) {
      return (
        <View>
          <Text>Login</Text>
          <button onClick={anonymousLogin}> Log in as Guest</button>
          <button onClick={facebookLogin}> Log in with Facebook</button>
        </View>
      )
    } else {
      return (
        <View>
          <Text>Welcome {user.email}</Text>
        </View>
      )
    }
  }
}

export default auth
