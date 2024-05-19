import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Slot, Stack, Link, SplashScreen } from "expo-router"
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useFonts } from "expo-font"
import { useEffect } from 'react'

const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        "RobotoSlab-Regular": require("../assets/RobotoSlab-Regular.ttf"),
        "RobotoSlab-Medium": require("../assets/RobotoSlab-Medium.ttf"),
        "RobotoSlab-SemiBold": require("../assets/RobotoSlab-SemiBold.ttf"),
        "Poppins-Regular": require("../assets/Poppins-Regular.ttf"),
        "Poppins-Black": require("../assets/Poppins-Black.ttf"),
        "Poppins-Bold": require("../assets/Poppins-Bold.ttf"),
        "Poppins-ExtraBold": require("../assets/Poppins-ExtraBold.ttf"),
        "Poppins-ExtraLight": require("../assets/Poppins-ExtraLight.ttf"),
      });

      useEffect(() => {
        if (error) throw error;
    
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded, error]);
    
      if (!fontsLoaded) {
        return null;
      }
    
      if (!fontsLoaded && !error) {
        return null;
      }

  return (
    <SafeAreaProvider>
    <Stack className="flex flex-1 items-center justify-center container mx-auto bg-[#DCDEF3]">
        <Stack.Screen name='index' options={{headerShown: false}}/>
    </Stack>
    </SafeAreaProvider>
)
}

export default RootLayout