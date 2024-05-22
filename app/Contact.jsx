import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Contact = () => {
  return (
    <ScrollView  className="p-[10px] bg-[#DCDEF3]">
      <View className="bg-white w-[95%] p-[20px] rounded-xl flex flex-1 mx-auto mb-[40px] mt-[150px]">
       <View className="flex flex-row justify-start gap-5 items-center">
            <Text className="font-rmedium text-4xl">Contact</Text>
            <View className="h-[6px] w-[40%] rounded bg-[#1B74E4]"></View>
        </View>
        <View>
          <Text className="font-pregular mt-[20px] text-[16px] leading-5 text-gray-600">I'm Always Open To Discussing Projects</Text>
        </View>
        <View>
          <TextInput className="border-b-[2px] border-gray-400 text-[18px] p-[10px] text-gray-700 mt-[30px]" placeholder='Name' keyboardType='default'/>
          <TextInput className="border-b-[2px] border-gray-400 text-[18px] p-[10px] text-gray-700 mt-[10px]" placeholder='E-mail' keyboardType='email-address'/>
          <TextInput style={{textAlignVertical:"top"}} className="border-b-[2px] border-gray-400 text-[18px] p-[10px] text-gray-700 mt-[10px]" placeholder='Message' keyboardType='default' multiline numberOfLines={6}/>

          <TouchableOpacity><Text className="p-[10px] bg-[#f6f6f6] w-[30%] text-center mt-[20px] rounded-[10px] border-[2px] border-gray-600 font-pregular justify-center  text-[14px]">Submit</Text></TouchableOpacity>
        </View>
      </View>
      <StatusBar hidden={false} barStyle="dark" backgroundColor="#ffffff" />
    </ScrollView>
  )
}

export default Contact

const styles = StyleSheet.create({})