import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return (
    <ScrollView>
        <SafeAreaView className="flex flex-1 p-[10px] bg-[#DCDEF3] items-center ">
    <Image
        className="h-[250px] w-[80%] object-cover object-center rounded-3xl mt-[100px] z-10"
        source= {require('../assets/ohee.jpg')}
    />
    <ScrollView className="bg-white w-[95%] rounded-[10px] mt-[-100px] z-o p-[10px]">
        <Text className="mt-[120px] text-center font-rregular text-[22px] leading-6">Jobayer Rahman Ohee</Text>
        <Text className=" mx-auto  mt-[10px] font-pregular text-center font-[400] text-[16px] leading-[22px] p-[10px] rounded bg-[#F3F6F6] w-[40%]">Developer</Text>
        
        <View className="flex flex-row gap-3 mt-[20px] items-center justify-center">
            <Link className='p-[10px] rounded bg-[#F3F6F6]' href="https://twitter.com/jubayerr398"><Icon name="twitter" color="black" size={30} /></Link>
            <Link className='p-[10px] rounded bg-[#F3F6F6]' href="https://github.com/JubayerRahman"><Icon name="github-alt" color="black" size={30} /></Link>
            <Link className='p-[10px] rounded bg-[#F3F6F6]' href="https://www.linkedin.com/in/jubayer-rahman"><Icon name="linkedin" color="black" size={30} /> </Link>
        </View>

        <View className="bg-[#F3F6F6] rounded-[10px] p-[10px] mt-[20px]">
            <View className="Number flex flex-row items-center gap-3">
                <View className="w-[20%] flex items-center rounded bg-white">
                    <Link className='p-[10px] ' href="tel:01853062525"><Icon name='mobile-phone' color="black" size={40}/></Link>
                </View>
                <View>
                    <Text className="font-pregular text-[14px] leading-[20px]">Phone:</Text>
                    <Text className="font-pregular text-[18px] leading-[24px]">01853062525</Text>
                </View>
            </View>
            <View className='bg-gray-500 w-full h-[2px] my-[15px] rounded'></View>
            <View className="Email flex flex-row items-center gap-3">
                <View className="w-[20%] flex items-center rounded bg-white">
                    <Link className='p-[10px] ' href="mailto:jubayerr398@gmail.com"><Icon name='paper-plane' color="black" size={30}/></Link>
                </View>
                <View>
                    <Text className="font-pregular text-[14px] leading-[20px]">Email:</Text>
                    <Text className="font-pregular text-[16px] leading-[24px]">Jubayerr398@gmail.com</Text>
                </View>
            </View>
            <View className='bg-gray-500 w-full h-[2px] my-[5px] rounded'></View>
            <View className="Location flex flex-row items-center gap-3">
                <View className="w-[20%] flex items-center rounded bg-white">
                    <Link className='p-[10px] ' href="#"><Icon name='map-marker' color="black" size={30}/></Link>
                </View>
                <View>
                    <Text className="font-pregular text-[14px] leading-[20px]">Location:</Text>
                    <Text className="font-pregular text-[16px] leading-[24px]">Chandpur, Bangladesh</Text>
                </View>
            </View>
            <View className='bg-gray-500 w-full h-[2px] my-[5px] rounded'></View>
            <View className="Birthday flex flex-row items-center gap-3">
                <View className="w-[20%] flex items-center rounded bg-white">
                    <Link className='p-[10px] ' href="#"><Icon name='calendar' color="black" size={30}/></Link>
                </View>
                <View>
                    <Text className="font-pregular text-[14px] leading-[20px]">Birthday:</Text>
                    <Text className="font-pregular text-[16px] leading-[24px]">01 March, 2003</Text>
                </View>
            </View>
            <View className='bg-gray-500 w-full h-[2px] my-[5px] rounded'></View>
        </View>
        <Link
        className='p-[15px] text-center w-[60%] ml-[20%] mr-[20%] mt-[20px] rounded-[10px] text-xl font-pregular text-white bg-[#1B74E4] mb-[10px]'
        href="https://drive.google.com/file/d/1JaPy4oWz-Y0Jl6iid-nd7eON0-oLN4WG/view?usp=drive_link"><Icon name='file-pdf-o' size={20} color="white"/> Resume </Link>
    </ScrollView>

    <View className="h-[40px]"></View>
    <View className="bg-white p-[10px] w-[90%] mt-[20px] items-center rounded-[10px] flex flex-row justify-evenly">
        <View className="w-[45%] pl-[5%] pr-[5%]">
            <Link className='flex flex-col items-center rounded-[10px] bg-[#F3F6F6] p-[20px]' href="/About">
                <View>
                <Text className="text-center"><Icon name="user-o" size={25}/> </Text>
                <Text className="text-center font-pregular text-[16px] leading-[20px]">About</Text>
                </View>
            </Link>
        </View>
        <View className="w-[45%] pl-[5%] pr-[5%]">
        <Link className='flex flex-col items-center rounded-[10px] bg-[#F3F6F6] p-[20px]' href="/Resume">
            <View>
            <Text className="text-center"><Icon name="file-pdf-o" size={25}/> </Text>
            <Text className="text-center font-pregular text-[16px] leading-[20px]">Resume</Text>
            </View>
        </Link>
        </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}
