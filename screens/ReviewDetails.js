import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

const ReviewDetails = ({ route }) => {
  const { coffee, rating, method } = route.params

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Coffee: {coffee}</Text>
      <Text style={globalStyles.titleText}>Rating: {rating}/5</Text>
      <Text style={globalStyles.titleText}>Brewing Method: {method}</Text>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({})