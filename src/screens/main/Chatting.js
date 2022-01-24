import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Chatting = () => {
  return (
    <View style={styles.container}>
      <Text>Chatting</Text>
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

export default Chatting