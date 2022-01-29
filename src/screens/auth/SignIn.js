import * as React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'
import { FirebaseContext } from '../../provider/FirebaseProvider'
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import { AppleButton } from '@invertase/react-native-apple-authentication';


const SignIn = () => {
  const context = React.useContext(FirebaseContext)

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        onPress={context.handleGoogleSignin}
      />
      {/* {Platform.OS === 'ios' && 
      <AppleButton 
        buttonStyle={AppleButton.Style.BLACK}
        buttonType={AppleButton.Type.SIGN_IN}
      />} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

export default SignIn