import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import {Poppins_300Light, Poppins_400Regular, Poppins_200ExtraLight, Poppins_600SemiBold ,useFonts } from '@expo-google-fonts/poppins'
import {AppLoading} from 'expo'

import Home from './src/pages/Home'

export default function App() {
  const [fontActivated] = useFonts(
    {Poppins_400Regular,
      Poppins_300Light,
      Poppins_200ExtraLight,
      Poppins_600SemiBold
  })

  if (!fontActivated){
      return <AppLoading />
  }else{
    return (
      <>
        <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
        <Home />
      </>
    );
    }
}