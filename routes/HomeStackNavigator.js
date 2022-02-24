import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Reviews from '../screens/Reviews'
import ReviewDetails from '../screens/ReviewDetails'

const Stack = createNativeStackNavigator()

export const HomeStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reviews">
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
