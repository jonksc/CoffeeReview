import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'

const ReviewForm = () => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          coffee: '',
          rating: '',
          method: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Coffee name'
              onChangeText={props.handleChange('coffee')}
              value={props.values.coffee}
             />

            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
             />

            <TextInput
              style={globalStyles.input}
              placeholder='Brewing method'
              onChangeText={props.handleChange('method')}
              value={props.values.method}
             />

            <Button title='Submit' color='orange' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  )
}

export default ReviewForm

const styles = StyleSheet.create({})