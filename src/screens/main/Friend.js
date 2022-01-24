import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Friend = () => {
  return (
    <View style={styles.container}>
      <Text>Friend</Text>
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

export default Friend