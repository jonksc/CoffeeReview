import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Card from '../shared/Card'
import { globalStyles, images } from '../styles/global'

const ReviewDetails = ({ route }) => {
  const { coffee, rating, method } = route.params

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.paragraphText}>Coffee: {coffee}</Text>
        <Text style={globalStyles.paragraphText}>Brewing Method: {method}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.paragraphText}>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  )
}

export default ReviewDetails

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})