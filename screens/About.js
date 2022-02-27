import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.paragraphText}>Looking for the perfect coffee review app? Look no further than Coffee Review! This app offers coffee aficionados everything they need to evaluate and compare coffee brands, roast profiles, and brewing methods. Whether you’re a coffee enthusiast or just exploring specialty coffee, Coffee Review is the perfect app for you!</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  
})