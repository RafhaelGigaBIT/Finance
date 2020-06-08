import React from 'react'
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native'

import { Feather as Icon } from '@expo/vector-icons'

import { Dimensions } from 'react-native';

const Home= () =>{
    return (
        <ImageBackground style={styles.container} source={require('../../assets/background.png')}>
            <View style={styles.asccount}>
                <Image source={require('../../assets/profile.png')} style={styles.avatar} />    
                <Text style={styles.name}> Marcus Almeida </Text>  
                <Icon name="search" size={25} color='#fff' style={{top: -70, left: '80%'}} />
                <Icon name="menu" size={25} color='#fff' style={{top: -97, left: '95%'}}/>        
            </View>
            <View style={styles.middle}>
            </View>
        </ImageBackground>
    )
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
      },

    asccount: {
        paddingHorizontal: 30,
        position: 'absolute',
        width: windowWidth ,
        height: 70,
        top: 100,
    },

    avatar: {
        width: 50,
        height: 50,
        borderRadius: 32,
    },

    name: {
        top: -40,
        left: 55,
        fontFamily: 'Poppins_200ExtraLight',
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 28,
        letterSpacing: 0.01,

        color: '#fff',
    },

    middle: {
        flex: 1,
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        top: windowHeight-500,
        backgroundColor: '#fff',
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55,
    }
})

export default Home