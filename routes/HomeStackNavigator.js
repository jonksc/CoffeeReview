import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Reviews from '../screens/Reviews'
import ReviewDetails from '../screens/ReviewDetails'

const Stack = createNativeStackNavigator()

export const HomeStackNavigator = () => {
  return (
      <Stack.Navigator 
      screenOptions={{
          headerStyle: { backgroundColor: '#eee' },
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 20,
          },
          headerTintColor: '#333',
          headerTitleAlign: 'center'
          }} 
          initialRouteName="Reviews"
          screenOptions={{ headerShown: false }} >
        <Stack.Screen 
        name="Reviews" 
        component={Reviews}
        options={{ title: 'Reviews' }} />
        <Stack.Screen 
        name="ReviewDetails" 
        component={ReviewDetails}
        options={{ title: 'Review Details' }} />
      </Stack.Navigator>
  )
}