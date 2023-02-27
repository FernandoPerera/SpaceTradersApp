import { useEffect, useState } from "react"
import {
    ImageBackground, KeyboardAvoidingView, Platform,
    StyleSheet, Text, TextInput, View, TouchableWithoutFeedback, Keyboard, Pressable
} from "react-native"
import Toast from "react-native-root-toast"
import { getUserProfile } from "../services/spaceTraders.service.mjs"
import { pallette } from "../themes/theme"

const LoginScreen = ({ navigation, setToken }) => {

    const [checkToken, setCheckToken] = useState()

    const handleChangeText = (value) => {
        setCheckToken(value)
    }

    const checkUserProfile = async () => {

        const response = await getUserProfile(checkToken)
        
        response === undefined
            ? Toast.show('This user dont exist')
            : setToken(checkToken)

    }

    return (

        <KeyboardAvoidingView
            style={styles.loginContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <>

                    <ImageBackground
                        style={styles.headerContainer}
                        source={require('../assets/background-wallpapers/sky.png')}>

                        <Text style={styles.headerMessage}>Greetings Young Padawan</Text>

                    </ImageBackground>

                    <View style={styles.imageContainer}>
                        <ImageBackground
                            style={styles.backgroundBigImage}
                            source={require('../assets/background-wallpapers/clon-wallpaper.png')}>
                        </ImageBackground>
                    </View>

                    <View style={styles.dataContainer}>
                        <ImageBackground
                            style={styles.inputContainer}
                            source={require('../assets/background-wallpapers/sky.png')}
                        >

                            <View>
                                <TextInput
                                    style={styles.inputStyle}
                                    onChangeText={handleChangeText}
                                    value={checkToken}
                                />
                                <Text style={styles.dataStyle}>introduce your token</Text>
                            </View>

                        </ImageBackground>

                    </View>

                    <Pressable onPress={checkUserProfile} style={styles.buttonContainer}>
                        <ImageBackground
                            source={require('../assets/background-wallpapers/sky.png')}
                            style={{
                                borderColor: pallette.primary_color_text,
                                borderTopWidth: 5,
                                borderTopRightRadius: 15,
                                borderTopLeftRadius: 15
                            }}>
                            <Text style={styles.acceptButton}>Accept</Text>
                        </ImageBackground>
                    </Pressable>
                </>

            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({

    loginContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: pallette.primary_color
    },
    headerContainer: {
        flex: 1,
        width: '95%',
        marginTop: '10%',
        marginBottom: '5%',
        alignSelf: 'center',
        borderRadius: 10,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: pallette.primary_color_text
    },
    headerMessage: {
        color: pallette.secundary_color_text,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        padding: '5%'
    },
    imageContainer: {
        flex: 4.5,
        justifyContent: 'space-around',
        width: '100%'
    },
    backgroundBigImage: {
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        marginBottom: '6%'
    },
    dataContainer: {
        flex: 2,
        alignItems: 'center',
        marginBottom: '7%',
        marginHorizontal: '5%',
        borderWidth: 5,
        borderColor: pallette.primary_color_text,
        borderRadius: 10
    },
    inputContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    inputStyle: {
        alignSelf: 'center',
        color: pallette.primary_color_text,
        marginTop: '3%',
        width: '60%',
        height: '55%',
        backgroundColor: pallette.primary_color,
        borderRadius: 10,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderColor: pallette.secundary_color
    },
    dataStyle: {
        alignSelf: 'center',
        color: pallette.primary_color_text,
        marginTop: '4%'
    },
    buttonContainer: {
        flex: 1.5,
        height: '100%',
        justifyContent: 'center'
    },
    acceptButton: {
        alignSelf: 'center',
        padding: '5%',
        marginBottom: '7%',
        fontSize: 20,
        fontWeight: 'bold',
        color: pallette.primary_color_text
    }

})

export default LoginScreen