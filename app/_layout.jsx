import { StyleSheet, Text, View, BackHandler } from 'react-native'
import { Slot, Stack, Link, SplashScreen, Tabs, useNavigation } from "expo-router"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useFonts } from "expo-font"
import { useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar'

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

      const navigate = useNavigation()

      useEffect(()=>{
        const BackAction = ()=>{
          const location = navigate.getCurrentRoute().name
      
          console.log("pressed");
          if (location === "index") {
            BackHandler.exitApp()
            return true
          }
          else{
            navigate.navigate("index")
            return true
          }
        }

        const backButton = BackHandler.addEventListener("hardwareBackPress", BackAction)

        // return backButton.remove();
      },[navigate])
    
      if (!fontsLoaded) {
        return null;
      }
    
      if (!fontsLoaded && !error) {
        return null;
      }

      const TabBar = ({icon, color, name, focused})=>{
        return (
          <View className="w-full p-[3px]">
            <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#FFFFFF" />
          <View className={`${focused ? "bg-[#1B74E4] w-full items-center justify-center rounded-[10px] mt-[-30%] mb-[25%] h-[70px]" : " w-full items-center h-full justify-center rounded-[10px]"}`}>
            <Text className={`${focused? "text-white" : "text-gray-600"}`}><Icon name={icon} size={20}/></Text>
            <Text className={`${focused? "font-rregular text-[12px] text-white" : "font-pregular text-[12px] text-text-gray-600"}`}>{name}</Text>
          </View>
          </View>
        )
      }

  return (
    <SafeAreaProvider>
    <SafeAreaView className="flex-1">
    <Tabs
    initialRouteName='index'
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle:{
        height: 75,

      }}
    }
    >
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
       <Tabs.Screen name='Work' 
       options={{
        title:"Works",
        headerShown: false,
        tabBarIcon: ({color, focused}) =>(
          <TabBar
            icon="shopping-bag"
            focused={focused}
            name="Work's"
          />
        )
        }} />
       <Tabs.Screen name='Contact' 
       options={{
        title:"Contact",
        headerShown: false,
        tabBarIcon: ({color, focused}) =>(
          <TabBar
            icon="phone"
            focused={focused}
            name="Contact"
          />
        )
        }} />
    </Tabs>
    </SafeAreaView>
    </SafeAreaProvider>
)
}

export default RootLayout