import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FirebaseContext } from '../../provider/FirebaseProvider'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'

const SignIn = () => {
  const context = React.useContext(FirebaseContext)

  return (
    <View style={styles.container}>
      <GoogleSigninButton
        onPress={context.handleGoogleSignin}
      />
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