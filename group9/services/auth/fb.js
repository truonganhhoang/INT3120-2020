import { LoginManager, AccessToken } from 'react-native-fbsdk'
import { firebase } from '@react-native-firebase/auth'

const facebookLogin = async () => {
  try {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])
    if (result.isCancelled) {
      throw new Error('User cancelled the login process')
    }

    const data = await AccessToken.getCurrentAccessToken()
    if (!data) {
      throw new Error('Something went wrong obtaining access token')
    }

    const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken)
    return await firebase.auth().signInWithCredential(credential)
  } catch (e) {
    alert(e)
    return null
  }
}

export default facebookLogin
