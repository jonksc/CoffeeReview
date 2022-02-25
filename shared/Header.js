import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 20,
    color: '#333'
  }
})
