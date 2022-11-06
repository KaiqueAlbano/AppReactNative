import { StatusBar } from 'expo-status-bar';
import React ,{Component,useEffect,useState} from 'react';
import { useInRouterContext, withRouter } from 'react-router-dom';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,Button,Pressable} from 'react-native';
import {AuthContext, useAuth}  from '../../provider/auth';
import {useNavigation} from '@react-navigation/native';
import Header from '../header';

export default function Home () {
  
  const {user,setUser,ShowMenu,setShowMenu} = useAuth()
  const navigation = useNavigation();
  //console.log(user);

  const onTextChanged = (t) => { //callback for immediate state change
    setShowMenu(false)
  }

  // useEffect(()=>{
  //   setShowMenu(false)
  // },[]);

   return (
    <> 
         <Header/>
         <View style={styles.InputCenter}>
            <Image style={styles.ImgFundo} source={require('../../assets/home_banner.jpg')} /> 
            <TextInput 
                placeholder='O que Procura ?' 
                autoFocus={true} 
                style={styles.textInput} 
                placeholderTextColor={'rgb(200,200,200)'}
                onChangeText={onTextChanged}
            />
            <View style={styles.FundoImg}/>  
         </View>   
    </>
  );
}

const styles = StyleSheet.create({


  InputCenter:{
    alignItems: 'center',
    justifyContent:'center'
  },
  ImgFundo:{
    height:450,
    width:450,
    // backgroundColor: 'rgb(238,255,0)',
    // position:'absolute',
    // opacity:0.3,

  },
  FundoImg:{
    zIndex:1,
    backgroundColor:'rgb(0,0,0)',
    height:450,
    width:450,
    opacity:0.3,
    position:'absolute',

  },
  textInput:{
    zIndex:2,
    width:'80%',
    textAlign:'center',
    backgroundColor:'rgb(36,36,36)',
    height:40,
    borderRadius:20,
    position:'absolute',
    marginTop:50,
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  },
});

