import React ,{Component,useEffect,useState} from 'react';
import { useInRouterContext, withRouter } from 'react-router-dom';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity,Button,Pressable,StatusBar} from 'react-native';
import {AuthContext, useAuth}  from '../../provider/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeModules, Platform} from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

const Header = () => {
  
  const {user,setUser,ShowMenu,setShowMenu} = useAuth()
  const navigation = useNavigation();
  const {NavigationBarColor} = NativeModules;


  useEffect(()=>{
    NavigationBar.setBackgroundColorAsync("rgb(36,36,36)");
  },[]);

   return (
    <>      
        <View style={styles.header}>
            <StatusBar backgroundColor="rgb(36,36,36)" barStyle="light-content" />
            <TouchableOpacity style={styles.TouchMenu} onPress={() => setShowMenu(!ShowMenu)}>
                <Text style={styles.Menu}></Text>
                <Text style={styles.Menu}></Text>
                <Text style={styles.Menu}></Text>
            </TouchableOpacity>
        </View>

        {ShowMenu === true &&
            <View style={styles.MenuDinamic}> 
                <Pressable 
                    onPress={() => navigation.navigate("Login")}
                    style={({pressed}) => [ 
                        { 
                        backgroundColor: pressed ? 'rgb(0,0,0)' : null
                        }, 
                        styles.botoesMenu, 
                    ]}
            
                >
                    <Text style={styles.botoesText}>Entrar</Text>
                </Pressable>

                <Pressable 
                    style={({pressed}) => [ 
                        { 
                        backgroundColor: pressed ? 'rgb(0,0,0)' : null
                        }, 
                        styles.botoesMenu, 
                    ]}
                    onPress={() => {}}
                >
                    <Text style={styles.botoesText}>Cadastre-se</Text>
                </Pressable>
            </View>
        }
   </>
);}

const styles = StyleSheet.create({
  header:{
    backgroundColor: 'rgb(36,36,36)',
    padding:10,
    width:'100%',
    // paddingTop:30,
    // position:'absolute'
  },
  Menu:{
    backgroundColor: 'rgb(255,255,255)',
    margin:5,
    width:45,
    height:5,
    borderRadius:4,
  },
  TouchMenu:{
    width:'15%',  
  },
  MenuDinamic:{
    // flex:1,
    zIndex:3,
    // elevation:3,
    position:'absolute',
    backgroundColor: 'rgb(0,0,0)',
    marginTop: 65,
    height:'80%',
    width:'50%',
    opacity:0.8,
    borderBottomRightRadius:20,
  },
  botoesMenu:{
    padding:10,
    marginBottom:5,
    marginTop:5
  },
  botoesText:{
    color:'rgb(255,255,255)',
    fontSize:16,
    fontWeight:'bold',
  }
});

export default Header;
