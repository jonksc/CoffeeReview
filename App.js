import 'react-native-gesture-handler';
import React from "react";
import { 
  useFonts,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_600SemiBold,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold
} from '@expo-google-fonts/nunito'
import AppLoading from "expo-app-loading";
import { HomeStackNavigator } from "./routes/HomeStackNavigator";
import { RootDrawerNavigator } from "./routes/RootDrawerNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_600SemiBold,
    Nunito_600SemiBold_Italic,
    Nunito_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <RootDrawerNavigator />
  );
}
