import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return (
    <ScrollView>
        <SafeAreaView className="flex flex-1 p-[10px] bg-[#DCDEF3] items-center  pb-[50px]">
        <StatusBar hidden={false} barStyle="dark-content" backgroundColor="#FFFFFF" />
        <TouchableOpacity className="z-10 h-[250px] w-[80%] mt-[100px] p-[10px]  " style={{elevation:100}}>
            <Image
                style={{elevation:100}}
                className=" w-full h-full object-cover object-top rounded-2xl  opacity-[80] drop-shadow-2xl"
                source= {require('../assets/ohee10.jpg')}
                resizeMode='cover'
            />
        </TouchableOpacity>

    <ScrollView className="bg-white w-[95%] rounded-[10px] mt-[-100px] z-o p-[10px]">
        <Text className="mt-[120px] text-center font-rregular text-[22px] leading-6">Jobayer Rahman Ohee</Text>
        <Text className=" mx-auto  mt-[10px] font-pregular text-center font-[400] text-[16px] leading-[22px] p-[10px] rounded bg-[#F3F6F6] w-[40%]">Developer</Text>
        
        <View className="flex flex-row gap-3 mt-[20px] items-center justify-center">
            <TouchableOpacity><Link className='p-[10px] rounded bg-[#F3F6F6] text-gray-500' href="https://twitter.com/jubayerr398"><Icon name="twitter" size={30} /></Link></TouchableOpacity>
            <Link className='p-[10px] rounded bg-[#F3F6F6] text-gray-500' href="https://github.com/JubayerRahman"><Icon name="github-alt" size={30} /></Link>
            <Link className='p-[10px] rounded bg-[#F3F6F6] text-gray-500' href="https://www.linkedin.com/in/jubayer-rahman"><Icon name="linkedin" size={30} /> </Link>
        </View>

        <View className="bg-[#F3F6F6] rounded-[10px] p-[10px] mt-[20px]">
            <TouchableOpacity>
            <View className="Number flex flex-row items-center gap-3">
                <View className="w-[20%] flex items-center rounded bg-white">
                        <Link className='p-[10px]  text-gray-500' href="tel:01853062525"><Icon name='mobile-phone' size={40}/></Link>
                </View>
                <View>
                    <Text className="font-pregular text-[14px] leading-[20px]">Phone:</Text>
                    <Text className="font-pregular text-[18px] leading-[24px]">01853062525</Text>
                </View>
            </View>
            </TouchableOpacity>
            <View className='bg-gray-500 w-full h-[2px] my-[15px] rounded'></View>
            <View className="Email flex flex-row items-center gap-3">
                <View className="w-[20%] flex items-center rounded bg-white">
                    <Link className='p-[10px] text-gray-500 ' href="mailto:jubayerr398@gmail.com"><Icon name='paper-plane' size={30}/></Link>
                </View>
                <View>
                    <Text className="font-pregular text-[14px] leading-[20px]">Email:</Text>
                    <Text className="font-pregular text-[16px] leading-[24px]">Jubayerr398@gmail.com</Text>
                </View>
            </View>
            <View className='bg-gray-500 w-full h-[2px] my-[5px] rounded'></View>
            <View className="Location flex flex-row items-center gap-3">
                <View className="w-[20%] flex items-center rounded bg-white">
                    <Link className='p-[10px] text-gray-500' href="#"><Icon name='map-marker' size={30}/></Link>
                </View>
                <View>
                    <Text className="font-pregular text-[14px] leading-[20px]">Location:</Text>
                    <Text className="font-pregular text-[16px] leading-[24px]">Chandpur, Bangladesh</Text>
                </View>
            </View>
            <View className='bg-gray-500 w-full h-[2px] my-[5px] rounded'></View>
            <View className="Birthday flex flex-row items-center gap-3">
                <View className="w-[20%] flex items-center rounded bg-white">
                    <Link className='p-[10px] text-gray-500 ' href="#"><Icon name='calendar' size={30}/></Link>
                </View>
                <View>
                    <Text className="font-pregular text-[14px] leading-[20px]">Birthday:</Text>
                    <Text className="font-pregular text-[16px] leading-[24px]">01 March, 2003</Text>
                </View>
            </View>
        </View>
        <Link
        className='p-[15px] text-center w-[60%] ml-[20%] mr-[20%] mt-[20px] rounded-[10px] text-xl font-pregular text-white bg-[#1B74E4] mb-[10px]'
        href="https://drive.google.com/file/d/1JaPy4oWz-Y0Jl6iid-nd7eON0-oLN4WG/view?usp=drive_link"><Icon name='file-pdf-o' size={20} color="white"/> Resume </Link>
    </ScrollView>
    </SafeAreaView>
    <StatusBar hidden={false} barStyle="dark" backgroundColor="#ffffff" />
    </ScrollView>
  );
}
