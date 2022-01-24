import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../screens/auth/SignIn'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  )
}

export default AuthNavigator