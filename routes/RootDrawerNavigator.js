import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/About";
import Header from "../shared/Header";
import { HomeStackNavigator } from "./HomeStackNavigator";

const Drawer = createDrawerNavigator()

export const RootDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#eee' },
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 20,
        },
        headerTintColor: '#333',
        }} 
        initialRouteName="Home" >
        <Drawer.Screen 
        name="Home" 
        component={HomeStackNavigator}
        options={{ headerTitle: () => <Header title='Coffee Review' /> }} />
        <Drawer.Screen 
        name="About"
        component={About}
        options={{ headerTitle: () => <Header title='About Coffee Review' /> }} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
