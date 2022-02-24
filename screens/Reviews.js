import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { globalStyles } from '../styles/global'

const Reviews = ({ navigation }) => {

  const pressHandler = () => {
    navigation.navigate('ReviewDetails')
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Reviews</Text>
      <Button title='Go to Review Details' onPress={pressHandler} />
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({

})