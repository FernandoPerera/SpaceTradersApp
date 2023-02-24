
import { StyleSheet, View, Text, ImageBackground, Pressable } from 'react-native'
import { pallette } from '../themes/theme'

const StartingScreen = ({ navigation }) => {
    return (

        <ImageBackground
            style={styles.backgroundImage}
            source={require('../assets/background-wallpapers/anakin-luke.png')}
            resizeMode='cover'
        >

            <View style={styles.startingContainer}>

                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>WELCOME NAVIGATOR</Text>
                </View>

                <Text style={styles.messageStyle}>choose your way</Text>

                <View style={styles.optionsContainer}>

                    <Pressable onPress={ () => navigation.navigate('Login')} style={styles.loginButtom}>
                        <Text style={styles.optionStyle}>Login</Text>
                    </Pressable>

                    <Pressable onPress={ () => navigation.navigate('Register')} style={styles.registerButtom}>
                        <Text style={styles.optionStyle}>Register</Text>
                    </Pressable>

                </View>

            </View>

        </ImageBackground>

    )
}

const styles = StyleSheet.create({

    startingContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: '17.5%'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    headerContainer: {
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderRadius: 10,
        borderColor: pallette.primary_color_text
    },
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: pallette.secundary_color_text,
        padding: '3%'
    },
    messageStyle: {
        color: pallette.primary_color_text,
        marginTop: '2%'
    },  
    optionsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: '17.5%'
    },
    registerButtom: {
        backgroundColor: pallette.primary_color,
        padding: '4.5%',
        borderRadius: 7,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderColor: pallette.primary_color_text
    },
    loginButtom: {
        backgroundColor: pallette.primary_color,
        padding: '4.5%',
        paddingHorizontal: '6.5%',
        borderRadius: 7,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderColor: pallette.primary_color_text
    },
    optionStyle: {
        color: pallette.primary_color_text,
        fontWeight: 'bold',
        fontSize: 15.5
    }

})

export default StartingScreen