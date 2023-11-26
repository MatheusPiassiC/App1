import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export function Welcome(){
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            
            

            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation="flipInY"
                    source={(require("../../assets/icon6.png"))}
                    style={{width: "100%"}}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View animation="fadeInUp"  style={styles.containerForm}>
                <Text style={styles.title}>Gere senhas de forma rápida e segura!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F3F3FF",

    },
    containerLogo:{
        flex: 2,
        backgroundColor: "#F3F3FF",
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerForm:{
        flex: 1,
        backgroundColor: "#392de9",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
        position: "absolute",
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '5%',
        alignItems: 'center',
        justifyContent:'center',
    },
    buttonText:{
        fontSize: 18,
        color: "#FFF",
        fontWeight:'bold'
    }

})