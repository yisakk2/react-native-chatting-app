import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'
import AuthNavigator from './src/navigation/AuthNavigator'
import FirebaseProvider, { FirebaseContext } from './src/provider/FirebaseProvider'

export default function App() {
  return (
    <FirebaseProvider>
      <NavigationContainer>
        <FirebaseContext.Consumer>
          {({ user }) => {
            if (user === null) return <AuthNavigator />
            else return <AppNavigator />
          }}
        </FirebaseContext.Consumer>
      </NavigationContainer>
    </FirebaseProvider>
  );
}