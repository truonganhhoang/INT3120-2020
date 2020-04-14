import auth from '@react-native-firebase/auth'

const anonymousLogin = async () => {
  try {
    return await auth().signInAnonymously()
  } catch (e) {
    switch (e.code) {
      case 'auth/operation-not-allowed':
        console.log('Enable anonymous in your firebase console.')
        break
      default:
        console.error(e)
        break
    }
  }
}

export default anonymousLogin
