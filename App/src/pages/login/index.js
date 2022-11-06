import { StatusBar } from 'expo-status-bar';
import React ,{Component,useEffect,useState} from 'react';
import { useInRouterContext, withRouter } from 'react-router-dom';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,Button,Pressable} from 'react-native';
import {useAuth}  from '../../provider/auth';
import Header from '../header';


export default function Login () {
  
  const {user,setUser,ShowMenu,setShowMenu} = useAuth()
  
  const onTextChanged = (t) => { //callback for immediate state change
    setShowMenu(false)
  }

  useEffect(()=>{
    setShowMenu(false)
  },[]);

   return (
    <>
     <Header/>
     <View style={styles.container}>
          <View></View>
          <Text style={styles.textLogin} autoFocus={true} >Usuario: </Text>
          <TextInput
            style={styles.textInput} 
            placeholderTextColor={'rgb(200,200,200)'}
          />
          <Text style={styles.textLogin} >Senha: </Text>
          <TextInput
            style={styles.textInput} 
            placeholderTextColor={'rgb(200,200,200)'}
          />
     </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'rgb(36,36,36)',
    paddingTop:30,
    justifyContent: 'center',
    alignItems:'center',

  },
  textInput:{
    backgroundColor:'rgb(255,255,255)',
    height:40,
    margin:10,
    width:'80%',
    borderRadius:20,
    textAlign:'center',
    fontWeight:'bold'

  },
  textLogin:{
    fontSize: 20,
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  }

});


