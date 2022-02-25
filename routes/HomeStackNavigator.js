import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Reviews from '../screens/Reviews'
import ReviewDetails from '../screens/ReviewDetails'

const Stack = createNativeStackNavigator()

export const HomeStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
          headerStyle: { backgroundColor: '#eee' },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
          headerTintColor: '#333',
          headerTitleAlign: 'center'
          }} 
          initialRouteName="Reviews">
        <Stack.Screen 
        name="Reviews" 
        component={Reviews}
        options={{ title: 'Reviews' }} />
        <Stack.Screen 
        name="ReviewDetails" 
        component={ReviewDetails}
        options={{ title: 'Review Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}