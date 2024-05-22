import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const About = () => {
  return (
      <ScrollView className="p-[10px] bg-[#DCDEF3]">
        <View className="bg-white w-[95%] p-[20px] rounded-xl flex flex-1 mx-auto mb-[40px] mt-[150px]">
          <View className="flex flex-row justify-start gap-5 items-center">
            <Text className="font-rmedium text-4xl">About</Text>
            <View className="h-[6px] w-[50%] rounded bg-[#1B74E4]"></View>
          </View>
          <Text className="font-pregular text-[#6b7280] text-[16px] leading-5 mt-[24px]">
          Hi, I am a passionate web developer. I love to make attractive and useful websites. And learning new technology along with my work is a plus point. I always think and look to work on challenging ideas that will push the boundaries of my capabilities. I aim to learn and grow as a reliable individual for any company or business I work for.  </Text>

          <Text className="font-pregular text-[#6b7280] text-[16px] leading-5 mt-[24px]">
          Welcome to my portfolio look around and let me know what you think about my work. I am always open to talk.
          </Text>

          <Text className="font-pbold text-2xl mt-[40px] leading-7">What I Do!</Text>
          <View className="MERNSTACK bg-[#F3F6F6] p-[10px] mt-[40px] rounded-xl">
            <Icon name='code' size={60} color="#1B74E4" />
            <Text className="font-rmedium text-[18px] leading-6 mt-[10px]">MERN stack Development</Text>
            <Text className="font-pregular text-[#6b7280] text-[16px] leading-5 mt-[10px]">I am proficient with technologies related to the MERN stack. I can make useful websites using those technologies.</Text>
          </View>
          <View className="WORDpress bg-[#F3F6F6] p-[10px] mt-[20px] rounded-xl">
            <Icon name='wordpress' size={60} color="#1B74E4" />
            <Text className="font-rmedium text-[18px] leading-6 mt-[10px]">WordPress Development</Text>
            <Text className="font-pregular text-[#6b7280] text-[16px] leading-5 mt-[10px]">I can also make websites using WordPress. It is a popular and powerful CMS and I love working with it.</Text>
          </View>
          <View className="NATIVE bg-[#F3F6F6] p-[10px] mt-[20px] rounded-xl">
            <Icon name='android' size={60} color="#1B74E4" />
            <Text className="font-rmedium text-[18px] leading-6 mt-[10px]">React Native Development</Text>
            <Text className="font-pregular text-[#6b7280] text-[16px] leading-5 mt-[10px]">I love to make cross platform Applications using react native for bot ios and Android.</Text>
          </View>
        </View>
        <StatusBar hidden={false} barStyle="dark" backgroundColor="#ffffff" />
      </ScrollView>
  )
}

export default About

const styles = StyleSheet.create({})