import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Resume = () => {
  return (
    <ScrollView className="p-[10px] bg-[#DCDEF3]">
      <View className="bg-white w-[95%] p-[20px] rounded-xl flex flex-1 mx-auto mb-[40px]">
          <View className="flex flex-row justify-start gap-5 items-center">
            <Text className="font-rmedium text-4xl">Resume</Text>
            <View className="h-[6px] w-[40%] rounded bg-[#1B74E4]"></View>
          </View>
          <View className="flex flex-row items-center mt-[40px]">
            <Icon name='graduation-cap' size={60} color="#1B74E4" />
            <Text className="font-rmedium text-[28px] leading-[32px] ml-[10px]">Eduaction</Text>
          </View>
          <View className="Diploma bg-[#F3F6F6] p-[20px] mt-[20px] rounded-xl">
            <Text className="font-pregular text-[#6b7280] text-[14px] leading-5 mt-[10px]">2019- 2023</Text>
            <Text className="font-rmedium text-[16px] leading-6 mt-[10px]">Diploma in Computer technology</Text>
            <Text className="font-pregular text-[#6b7280] text-[14px] leading-5 mt-[10px]">Feni Polytechnic Institute</Text>
            <Text className="font-pregular text-[#6b7280] text-[14px] leading-5 mt-[10px]">Feni, Bangladesh</Text>
          </View>
          <View className="School bg-[#F3F6F6] p-[20px] mt-[20px] rounded-xl">
            <Text className="font-pregular text-[#6b7280] text-[14px] leading-5 mt-[10px]">2017- 2028</Text>
            <Text className="font-rmedium text-[16px] leading-6 mt-[10px]">secondary school certificate</Text>
            <Text className="font-pregular text-[#6b7280] text-[14px] leading-5 mt-[10px]">Hasan Ali Govt High School</Text>
            <Text className="font-pregular text-[#6b7280] text-[14px] leading-5 mt-[10px]">Chandpur, Bangladesh</Text>
          </View>
          <View className="flex flex-row items-center mt-[40px]">
            <Icon name='lightbulb-o' size={60} color="#1B74E4" />
            <Text className="font-rmedium text-[28px] leading-[32px] ml-[10px]">Skills</Text>
          </View>
          <View className="Skills bg-[#F3F6F6] p-[10px] mt-[20px] rounded-xl">
            <Icon name='code' size={50} color="#1B74E4" />
            <Text className="font-rmedium text-[18px] leading-6 mt-[10px]">MERN stack Development</Text>
            <View className="flex flex-row justify-between items-center">
              <View className="h-[4px] rounded bg-[#1B74E4] w-[85%] mt-[20px] mb-[20px]"></View>
              <Text className="font-pregular text-[16px]">85%</Text>
            </View>
            <Icon name='wordpress' size={50} color="#1B74E4" />
            <Text className="font-rmedium text-[18px] leading-6 mt-[10px]">WordPress Development</Text>
            <View className="flex flex-row justify-between items-center">
              <View className="h-[4px] rounded bg-[#1B74E4] w-[90%] mt-[20px] mb-[20px]"></View>
              <Text className="font-pregular text-[16px]">90%</Text>
            </View>
            <Icon name='android' size={50} color="#1B74E4" />
            <Text className="font-rmedium text-[18px] leading-6 mt-[10px]">React Native Development</Text>
            <View className="flex flex-row justify-between items-center">
              <View className="h-[4px] rounded bg-[#1B74E4] w-[50%] mt-[20px] mb-[20px]"></View>
              <Text className="font-pregular text-[16px]">50%</Text>
            </View>
          </View>
        </View>
    </ScrollView>
  )
}

export default Resume

const styles = StyleSheet.create({})