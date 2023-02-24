import React, { useState } from 'react'
import { ImageBackground, StyleSheet, TextInput, View, Text, Pressable } from 'react-native'

import { pallette } from '../themes/theme'

const RegisterScreen = () => {

    const [username, setUserName] = useState()

    const handleChange = (value) => {

        setUserName(value)
    }

    return (
        <ImageBackground
            source={require('../assets/background-wallpapers/sky.png')}
            style={styles.registerContainer}
        >
            <ImageBackground
                source={require('../assets/background-wallpapers/welcome.png')}
                style={styles.headerImage}>
            </ImageBackground>

            <View style={styles.underLine}/>

            <View style={styles.dataRegisterContainer}>

                <TextInput
                    style={styles.inputStyle}
                    onChangeText={handleChange}
                    value={username}
                />

                <Text style={styles.dataStyle}>introduce your username</Text>
                <Text style={styles.dataStyle}>for choose your way</Text>

            </View>

            <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Confirm</Text>
            </Pressable>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    registerContainer: {
        width: '100%',
        height: '100%'
    },
    headerImage: {
        flex: 2,
        width: '100%',
        height: '100%'
    },
    underLine: {
        flex: 0.25,
        borderTopWidth: 4,
        borderRadius: 10,
        borderColor: pallette.secundary_color,
        width: '80%',
        alignSelf: 'center'
    },  
    dataRegisterContainer: {
        flex: 1.25,
    },
    inputStyle: {
        backgroundColor: pallette.secundary_color,
        marginTop: '3%',
        height: '27.5%',
        width: '60%',
        borderRadius: 6.25,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: pallette.red_color,
        color: pallette.red_color,
        alignSelf: 'center',
        padding: '2%'
    },
    dataStyle: {
        alignSelf: 'center',
        marginTop: '3%',
        fontWeight: 'bold',
        fontSize: 14,
        color: pallette.red_color,
        backgroundColor: pallette.primary_color,
        letterSpacing: 5
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: pallette.primary_color,
        backgroundColor: pallette.red_color,
        padding: '6%',
        borderRadius: 7,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: pallette.secundary_color,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: '21.5%'
    }

})

export default RegisterScreen