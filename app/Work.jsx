import { StyleSheet, ScrollView, Text, View, Alert, FlatList, Image, Modal, TouchableOpacity, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'expo-router'
import Icon from 'react-native-vector-icons/FontAwesome';

const Work = () => {

  const [works, setWorks] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalShow, setModalShow] = useState([])
  const [refreashMode, setRefreashMode] = useState(false)

  useEffect( ()=>{
    fetchWorks()
  },[])

  const fetchWorks = ()=>{
    try {
      axios.get("https://final-poejects-gannery-server.vercel.app/projects")
     .then(res=> {
      setWorks(res.data)
      setModalShow(new Array(res.data.length).fill(false)) 
    })
     setLoading(false)
    } catch (error) {
      Alert.alert("Api is not responding, Maybe network issue. Plase try again later")
      setLoading(true)
    }
  }

  // console.log(modalShow);

  const toggleModals = (index) =>{
    const updatedModals = [...modalShow]
    updatedModals[index] = !updatedModals[index]
    setModalShow(updatedModals)
  }

  const refreshFunction = async()=>{
    setModalShow(true);
    await fetchWorks()
    setRefreashMode(false)
  }


  // my working boxs !!
  const renderWorks = ({item, index})=>(
    <TouchableOpacity className="w-full mb-[20px] p-[20px] rounded-[10px] bg-[#F3F6F6]" onPress={()=> toggleModals(index)}>
      <Image className="h-[200px] w-full bg-white mb-[20px] rounded-[10px]" source={{uri: item.img}} resizeMode='cover' />
      <Text className="font-pregular text-[16px]">{item.name}</Text>
      <Modal  onRequestClose={() => toggleModals(index)} animationType='slide' transparent={true} visible={modalShow[index]}>
      <ScrollView>
      <ScrollView  className="h-[500px] w-[95%] mx-auto  mt-[100px] p-[20px]  rounded-[10px] bg-white">
      <View className="flex-row justify-end">
      <Text className='bg-red-700 text-white font-pbold text-[14px] w-[30px] h-[30px] text-center p-[5px] rounded-full' onPress={()=>toggleModals(index)}>X</Text>
      </View>
            <Text className="text-center text-[30px] mt-[20px] font-pregular">{item.name}</Text>
            <View className="flex-row justify-evenly mt-[20px]">
                        <Link className='text-[20px] font-pregular text-gray-500 items-center' href={item.LiveLink}><Icon name='link' size={20}/> Live Link </Link>
                        <Link className='text-[20px] font-pregular text-gray-500 items-center' href={item.GitRepo}><Icon name='github-alt' size={20}/> Git Repo </Link>
            </View>
            <Text className="font-pregular text-[14px] text-gray-600 leading-5 p-[10px]">{item.description}</Text>
            <Image resizeMode='contain' className=" h-[250px] rounded-2xl  opacity-[80] drop-shadow-2xl"  source={{uri: item.img}} />
        </ScrollView>
      </ScrollView>
      </Modal>
    </TouchableOpacity>
  )

  return (
    <View  className="p-[10px] bg-[#DCDEF3] h-full">
      <View className="bg-white w-[95%]  p-[20px] rounded-xl flex flex-1 mx-auto  mt-[150px]">
          <View className="flex flex-row justify-start gap-5 items-center">
                <Text className="font-rmedium text-4xl">Work's</Text>
                <View className="h-[6px] w-[50%] rounded bg-[#1B74E4]"></View>
            </View>
              {
              works.length  === 0 ? 
              <View className="flex-1 items-center justify-center">
                <Image className="w-[90%] h-[200px]" source={require("../assets/loadingWork.gif")} resizeMode='contain'/>
                <Text className="font-rmedium text-3xl mt-[20px] text-[#1B74E4]">Loading....</Text>
              </View>
              :
              <FlatList
              className=" mt-[20px] w-full flex-1"
              data={works}
              keyExtractor={(item)=> item._id}
              renderItem={renderWorks}
              refreshControl={
                <RefreshControl
                refreshing={refreashMode}
                onRefresh={refreshFunction}
                />
              }
              />
              
            }
      </View>
    </View>
  )
}

export default Work