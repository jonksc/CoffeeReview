import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons'
import ReviewForm from './ReviewForm'

const Reviews = ({ navigation }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [reviews, setReviews] = useState([
    { coffee: 'Kenya AAA', rating: 5, method: 'Hario v60', key: '1'},
    { coffee: 'Ethiopia Yirgacheffe', rating: 4, method: 'French Press', key: '2'},
    { coffee: 'Burundi', rating: 3, method: 'Espresso', key: '3'}
  ])

  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((prevReviews) => (
      [review, ...prevReviews]
    ))
    setIsOpenModal(false)
  }

  const deleteHandler = (key) => {
    setReviews((prevReviews) => (prevReviews.filter((review) => key !== review.key)))
  }

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