import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack, Link, SplashScreen, Tabs } from "expo-router"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from "expo-font"
import { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

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

      const TabBar = ({icon, color, name, focused})=>{
        return (
          <View className="w-full p-[10px]">
          <View className={`${focused ? "bg-[#1B74E4] w-full items-center h-full justify-center rounded-[10px]" : "bg-[#F3F6F6] w-full items-center h-full justify-center rounded-[10px]"}`}>
            <Text className={`${focused? "text-white" : "text-gray-600"}`}><Icon name={icon} size={20}/></Text>
            <Text className={`${focused? "font-rregular text-white" : "font-pregular text-text-gray-600"}`}>{name}</Text>
          </View>
          </View>
        )
      }

  return (
    <SafeAreaProvider>
    <SafeAreaView className="flex-1">
    <Tabs
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle:{
        height: 75,

      }}
    }
    >
       <Tabs.Screen name='index' 
       options={{
        title:"Home",
        headerShown: false,
        tabBarIcon: ({color, focused}) =>(
          <TabBar
            icon="home"
            focused={focused}
            name="Home"
          />
        )
        }} />
       <Tabs.Screen name='About' 
       options={{
        title:"Home",
        headerShown: false,
        tabBarIcon: ({color, focused}) =>(
          <TabBar
            icon="user-o"
            focused={focused}
            name="About"
          />
        )
        }} />
       <Tabs.Screen name='Resume' 
       options={{
        title:"Resume",
        headerShown: false,
        tabBarIcon: ({color, focused}) =>(
          <TabBar
            icon="file-pdf-o"
            focused={focused}
            name="Resume"
          />
        )
        }} />
    </Tabs>
    </SafeAreaView>
    </SafeAreaProvider>
)
}

export default RootLayout