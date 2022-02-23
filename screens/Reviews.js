import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Reviews = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Reviews</Text>
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#eee',
    flex: 1
  },
  titleText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 40,
    color: '#333'
  }
})