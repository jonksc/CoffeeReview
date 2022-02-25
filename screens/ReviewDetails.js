import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../shared/Card'
import { globalStyles } from '../styles/global'

const ReviewDetails = ({ route }) => {
  const { coffee, rating, method } = route.params

  return (
    <View style={globalStyles.container}>
    <Card>
      <Text style={globalStyles.paragraphText}>Coffee: {coffee}</Text>
      <Text style={globalStyles.paragraphText}>Rating: {rating}/5</Text>
      <Text style={globalStyles.paragraphText}>Brewing Method: {method}</Text>
    </Card>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({})