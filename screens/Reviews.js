import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global'

const Reviews = ({ navigation }) => {

  const [reviews, setReviews] = useState([
    { coffee: 'Kenya AAA', rating: 5, method: 'Hario v60', key: '1'},
    { coffee: 'Ethiopia Yirgacheffe', rating: 4, method: 'French Press', key: '2'},
    { coffee: 'Burundi', rating: 3, method: 'Espresso', key: '3'}
  ])

  return (
    <View style={globalStyles.container}>
      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>{item.coffee}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({

})