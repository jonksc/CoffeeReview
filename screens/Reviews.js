import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons'
import ReviewForm from './ReviewForm'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Reviews = ({ navigation }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    try {
      const jsonReviews = await AsyncStorage.getItem('reviews')
      if (jsonReviews !== null) {
        const reviews = JSON.parse(jsonReviews)
        setReviews(reviews)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const addReview = async (review) => {
    review.key = Math.random().toString()
    setReviews((prevReviews) => (
      [review, ...prevReviews]
    ))
    
    try {
      const jsonReviews = JSON.stringify(reviews)
      await AsyncStorage.setItem('reviews', jsonReviews)
    } catch (error) {
      console.log(error)
    }

    setIsOpenModal(false)
  }

  const deleteHandler = async (key) => {
    setReviews((prevReviews) => (prevReviews.filter((review) => key !== review.key)))

    try {
      const jsonReviews = JSON.stringify(reviews)
      await AsyncStorage.setItem('reviews', jsonReviews)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReviews()
  }, [])
  

  return (
    <View style={globalStyles.container}>
      <Modal visible={isOpenModal} animationType='slide' onRequestClose={() => setIsOpenModal(false)} >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <Entypo name="cross" size={35} color="black" style={{...styles.modalToggle, ...styles.modalClose}} onPress={() => setIsOpenModal(false)} />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <AntDesign name="pluscircleo" size={30} color="black" style={styles.modalToggle} onPress={() => setIsOpenModal(true)} />

      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <View style={styles.card}>
                <Text style={globalStyles.titleText}>{item.coffee}</Text>
                <Feather name="trash-2" size={20} color="black" onPress={() => deleteHandler(item.key)} />
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Reviews

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})