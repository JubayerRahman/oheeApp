import { ActivityIndicator, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Work = () => {

  const [works, setWorks] = useState([])
  const [modalShow, setModalShow] = useState([])
  const [imageLoading, setImageLoading] = useState([])
  const [error, setError] = useState(null)

  useEffect(()=>{
    axios.get("https://final-poejects-gannery-server.vercel.app/projects")
    .then(res=> {
      setWorks(res.data)
      setModalShow(new Array(res.data.length).fill(false))  
      setImageLoading(new Array(res.data.length).fill(true))  
    })
    .catch(err=> {
      setError("Failed to load projects. Please try again later.")
      console.log(err);
    })
  },[])

  const toggleModals = (index) =>{
    const updatedModals = [...modalShow]
    updatedModals[index] = !updatedModals[index]
    setModalShow(updatedModals)
  }

  const handelImageLoadng = (index) =>{
    const loadingimag = [...imageLoading]
    loadingimag[index] = false
    setImageLoading(loadingimag)
  }

  const closeErrorModal = () => {
    setError(null);
  }


  return (
    <ScrollView  className="p-[10px] bg-[#DCDEF3]">
      <ScrollView className="bg-white w-[95%] p-[20px] rounded-xl flex flex-1 mx-auto mb-[40px] mt-[150px]">
        

       <View className="flex flex-row justify-start gap-5 items-center">
            <Text className="font-rmedium text-4xl">Work's</Text>
            <View className="h-[6px] w-[50%] rounded bg-[#1B74E4]"></View>
        </View>

        {
          error && (
            <Modal transparent={true} animationType='slide' visible={!!error} >
              <View>
              <View className="flex-row justify-end">
                      <Text className='bg-red-700 text-white font-pbold text-[14px] w-[30px] h-[30px] text-center p-[5px] rounded-full' onPress={closeErrorModal}>X</Text>
                </View>
                <Text className="font-pregular text-center mt-[20px] text-[20px]">{error}</Text>
              </View>
            </Modal>
          )}

      {
        works.length>0 ?
        (
          works.map((work, index)=>
            <View key={work._id} className="p-[10px] bg-[#F3F6F6] mb-[10px] rounded-[10px]">
                <TouchableOpacity onPress={()=> toggleModals(index)} >
                  {
                    imageLoading[index] && <ActivityIndicator size="large" color="black"/>
                  }
                <Image
                className={`" h-[250px] rounded-2xl  opacity-[80] drop-shadow-2xl" ${imageLoading[index] ? "hidden": "block"}`}
                source={{uri: work.img}} resizeMode='cover' onLoad={()=> handelImageLoadng(index)} />
                <Text className="font-pregular text-[16px] mt-[20px]">{work.name}</Text>
              </TouchableOpacity>
              <Modal   onRequestClose={() => toggleModals(index)} animationType='fade' transparent={true} visible={modalShow[index]}>
                <ScrollView>
                  <ScrollView  className="h-[500px] w-[95%] mx-auto  mt-[100px] p-[10px]  rounded-[10px] bg-white">
                    <View className="flex-row justify-end">
                      <Text className='bg-red-700 text-white font-pbold text-[14px] w-[30px] h-[30px] text-center p-[5px] rounded-full' onPress={()=>toggleModals(index)}>X</Text>
                    </View>
                    <Text className="text-center text-[30px] mt-[20px] font-pregular">{work.name}</Text>
                    <View className="flex-row justify-evenly mt-[20px]">
                        <Link className='text-[20px] font-pregular text-gray-500 items-center' href={work.LiveLink}><Icon name='link' size={20}/> Live Link </Link>
                        <Link className='text-[20px] font-pregular text-gray-500 items-center' href={work.GitRepo}><Icon name='github-alt' size={20}/> Git Repo </Link>
                    </View>
                    <Text className="font-pregular text-[14px] text-gray-600 leading-5 p-[10px]">{work.description}</Text>
                    <Image resizeMode='contain' className={`" h-[250px] rounded-2xl  opacity-[80] drop-shadow-2xl" ${imageLoading[index] ? "hidden": "block"}`}  source={{uri: work.img}} onLoad={()=>handelImageLoadng(index)} />
                  </ScrollView>
                </ScrollView>
              </Modal>
            </View>
          )
        )
        :
        (<ActivityIndicator size="large" color="black"/>)
      }
      </ScrollView>
      <StatusBar hidden={false} barStyle="dark" backgroundColor="#ffffff" />
    </ScrollView>
  )
}

export default Work

const styles = StyleSheet.create({})