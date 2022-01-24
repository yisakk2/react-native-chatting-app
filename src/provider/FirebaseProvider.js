import * as React from 'react'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import { Platform } from 'react-native'

export const FirebaseContext = React.createContext()
export class FirebaseProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  handleGoogleSignin = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      this.setState({ ...this.state, user: userInfo})
    } catch (e) {
      if (e.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('구글로그인을 취소하셨습니다.')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        alert('구글로그인이 진행중입니다.')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        alert('서비스가 가동중이지 않습니다.')
      } else {
        // some other error happened
        alert('에러가 발생했습니다.')
      }
    }
  }

  updateState = (prevState, newState = {}) => {
    this.setState({ ...prevState, ...newState })
  }

  initialize = () => {
    GoogleSignin.configure({
      webClientId: Platform.OS === 'android' ? '308059570881-u166n7pn7kj323f49mgnbdu8g3h6fv3r.apps.googleusercontent.com' : 'com.googleusercontent.apps.308059570881-4622sn8lnqn0usd8j6ckt2s58373nn6r', 
      offlineAccess: true, 
      hostedDomain: '', 
      forceConsentPrompt: true, 
    });
  }

  componentDidMount() {
    this.initialize()
  }

  render () {
    const {
      user,
    } = this.state
    return (
      <FirebaseContext.Provider value={{
        user,
        handleGoogleSignin: this.handleGoogleSignin,
        updateState: this.updateState,
      }}>
        {this.props.children}
      </FirebaseContext.Provider>
    )
  }
}

export default FirebaseProvider