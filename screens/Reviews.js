import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'
import { AntDesign, Entypo } from '@expo/vector-icons'
import ReviewForm from './ReviewForm'

const Reviews = ({ navigation }) => {

  const [reviews, setReviews] = useState([
    { coffee: 'Kenya AAA', rating: 5, method: 'Hario v60', key: '1'},
    { coffee: 'Ethiopia Yirgacheffe', rating: 4, method: 'French Press', key: '2'},
    { coffee: 'Burundi', rating: 3, method: 'Espresso', key: '3'}
  ])

  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <View style={globalStyles.container}>
      <Modal visible={isOpenModal} animationType='slide' >
        <View style={styles.modalContent}>
          <Entypo name="cross" size={35} color="black" style={{...styles.modalToggle, ...styles.modalClose}} onPress={() => setIsOpenModal(false)} />
          <ReviewForm />
        </View>
      </Modal>

      <AntDesign name="pluscircleo" size={30} color="black" style={styles.modalToggle} onPress={() => setIsOpenModal(true)} />

      <FlatList 
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.coffee}</Text>
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
  }
})