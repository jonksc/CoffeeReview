import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <Image style={styles.headerImage} source={require('../assets/icon.png')} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 20,
    color: '#333'
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
  headerTitle: {
    flexDirection: 'row'
  }
})
