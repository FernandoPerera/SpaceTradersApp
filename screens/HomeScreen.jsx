import { useEffect, useState } from "react"
import { Text, View, Image, ImageBackground } from "react-native"

import { StyleSheet } from "react-native"

import { checkApiConnection, getUserProfile } from "../services/spaceTraders.service.mjs"

import { pallette } from "../themes/theme.js"

const HomeScreen = ({ token }) => {

  const [userIcon, setUserIcon] = useState()
  const [userProfile, setUserProfile] = useState({})
  const [connection, setConnection] = useState(false)

  const imagesPath = [
    <Image style={styles.imageStyle} source={require('../assets/userIcons/boba-fett.png')} resizeMode={'center'} />,
    <Image style={styles.imageStyle} source={require('../assets/userIcons/baby-yoda.png')} resizeMode={'center'} />,
    <Image style={[styles.imageStyle, styles.largeImage]} source={require('../assets/userIcons/goyo.png')} resizeMode={'center'} />,
    <Image style={styles.imageStyle} source={require('../assets/userIcons/clon.png')} resizeMode={'center'} />,
    <Image style={styles.imageStyle} source={require('../assets/userIcons/dark-vader.png')} resizeMode={'center'} />,
    <Image style={styles.imageStyle} source={require('../assets/userIcons/darth-maul.png')} resizeMode={'center'} />,
    <Image style={styles.imageStyle} source={require('../assets/userIcons/obi-wan.png')} resizeMode={'center'} />,
    <Image style={[styles.imageStyle, styles.largeImage]} source={require('../assets/userIcons/r2d2.png')} resizeMode={'center'} />,
    <Image style={styles.imageStyle} source={require('../assets/userIcons/yoda.png')} resizeMode={'center'} />
  ]

  const getRandomIcon = () => {
    setUserIcon(imagesPath[Math.floor(Math.random() * imagesPath.length)])
  }

  useEffect(() => {

    const fetchCheckConnection = async () => {
      const checkConnection = await checkApiConnection()
      setConnection(checkConnection)
    }

    const fetchUserData = async () => {
      setUserProfile(await getUserProfile(token))
      console.log(userProfile)
    }

    fetchCheckConnection()
    fetchUserData()
    getRandomIcon()

  }, [])

  return (

    <ImageBackground style={styles.homeContainer} source={require('../assets/background-wallpapers/sky.png/')}>
      <View style={styles.connectionContainer}>
        <View style={{ marginVertical: '7%' }}>
          {
            connection == true

              ? <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.goodConnection}></View>
                <Text style={{ color: pallette.primary_color_text, marginHorizontal: '3%', fontSize: 16 }}>Successfully API connection</Text>
              </View>

              : <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.notConnection}></View>
                <Text style={{ color: '#006308', marginHorizontal: '3%', fontSize: 16 }}>Successful API connection</Text>
              </View>
          }

        </View>
      </View>

      <View style={styles.profileContainer}>

        <View style={styles.userDataContainer}>

          {userIcon}

          <View style={styles.underLine}></View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

            <View style={styles.data}>
              <Text style={styles.dataText}>Username</Text>
              <Text style={styles.dataText}>Credits</Text>
              <Text style={styles.dataText}>Ship Count</Text>
              <Text style={styles.dataText}>Structure Count</Text>
            </View>

            <View style={styles.data}>
              <Text style={styles.dataText}>{userProfile.username}</Text>
              <Text style={styles.dataText}>{userProfile.credits}</Text>
              <Text style={styles.dataText}>{userProfile.shipCount}</Text>
              <Text style={styles.dataText}>{userProfile.structureCount}</Text>
            </View>

          </View>

        </View>

      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

  homeContainer: {
    flex: 1,
    backgroundColor: pallette.primary_color,
    width: '100%',
    height: '100%'
  },
  connectionContainer: {
    flex: 0.625,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '7.5%',
    width: '80%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: pallette.secundary_color
  },
  notConnection: {
    width: '17.5%',
    height: '100%',
    borderRadius: 60,
    backgroundColor: '#A40101',
    borderColor: pallette.secundary_color,
    borderWidth: 3
  },
  goodConnection: {
    width: '17.5%',
    height: '100%',
    borderRadius: 60,
    backgroundColor: '#006308',
    borderColor: pallette.secundary_color,
    borderWidth: 2.5
  },
  profileContainer: {
    flex: 4,
    alignItems: 'center'
  },
  underLine: {
    width: 200,
    borderBottomWidth: 2,
    borderColor: pallette.secundary_color,
    marginTop: '5%'
  },
  userDataContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    width: '90%',
    marginTop: '10%',
    backgroundColor: pallette.primary_color
  },
  profileIcon: {
    width: '80%',
    height: '20%'
  },
  imageStyle: {
    width: '65%',
    height: '55%',
    marginVertical: '-7%'
  },
  largeImage: {
    height: '45%',
    marginVertical: '-0.12%'
  },
  data: {
    flex: 1,
    alignItems: 'center'
  },
  dataText: {
    marginVertical: '10%',
    color: pallette.primary_color_text,
    fontSize: 16
  }
})

export default HomeScreen