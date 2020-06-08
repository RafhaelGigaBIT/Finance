import React, {useState} from 'react'
import {View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native'

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
            <View style={styles.balaceAcc}>
                <Text style={{fontFamily: 'Poppins_300Light', fontSize:16 ,top: -45, left: 10, color: '#fff'}}>Your Balance</Text>
                <Text style={{fontFamily: 'Poppins_200ExtraLight', fontSize:30 ,top: -45, left: 10, color: '#fff'}} >R$</Text>
                <Text style={{fontFamily: 'Poppins_400Regular', fontSize:30 ,top: -100, left: 55, color: '#fff'}} >24,165.00</Text>
            </View>
            <View style={styles.middle}>
                <Text style={{fontFamily:'Poppins_600SemiBold', fontSize:20, color:'#992525', left:30, position:'absolute', top:25}}>Reports</Text>
                <View style={styles.reports}>
                    <TouchableOpacity onPress={() => {}} style={styles.buttonReports} >
                        <Text style={{fontFamily: 'Poppins_300Light', fontSize:16, color: '#992525'}}>Day</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}} style={styles.buttonReports} >
                            <Text style={{fontFamily: 'Poppins_300Light', fontSize:16, color: '#992525'}}>Week</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}} style={styles.buttonReportsSelected} >
                            <Text style={{fontFamily: 'Poppins_300Light', fontSize:16, color: '#992525'}}>Month</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}} style={styles.buttonReports} >
                            <Text style={{fontFamily: 'Poppins_300Light', fontSize:16, color: '#992525'}}>Year</Text>
                    </TouchableOpacity>

                </View>
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
        fontFamily: 'Poppins_300Light',
        fontStyle: 'normal',
        fontSize: 18,
        lineHeight: 28,
        letterSpacing: 0.01,

        color: '#fff',
    },

    balaceAcc: {
        position: 'absolute',
        width: windowWidth - 220,
        top: windowHeight-550,
        left: windowWidth -395
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
    },
    reports: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        left: 15,
        height: 50,
        top: 60,
    },

    buttonReports: {
        width: 100,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    buttonReportsSelected: {
        justifyContent: 'center',
        width: 100,
        height: 40,
        paddingHorizontal: 20,
        borderRadius: 23,
        backgroundColor: '#C4C4C4'

    }
})

export default Home