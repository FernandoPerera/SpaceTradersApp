import { useEffect, useState } from "react"
import { Text, View, Image } from "react-native"

import { StyleSheet } from "react-native"

import { checkApiConnection, getUserProfile } from "../services/spaceTraders.service.mjs"

import { pallette } from "../themes/theme.js"

const HomeScreen = () => {

  const [userProfile, setUserProfile] = useState({})
  const [connection, setConnection] = useState(false)

  useEffect(() => {

    const fetchCheckConnection = async () => {
      const checkConnection = await checkApiConnection()
      setConnection(checkConnection)
    }

    const fetchUserData = async () => {
      setUserProfile(await getUserProfile())
    }

    fetchCheckConnection()
    fetchUserData()

  }, [])

  return (
    <View style={styles.homeContainer}>

      <View style={styles.connectionContainer}>
        <View style={{ marginVertical: '7%' }}>

          <Text style={{ flex: 1, color: pallette.primary_color_text, fontSize: 16 }}>API connection check</Text>
          {
            connection == true

              ? <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.goodConnection}></View>
                <Text style={{ color: pallette.primary_color_text, marginHorizontal: '3%', fontSize: 16 }}>Successful API connection</Text>
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

          <View style={Platform.OS === 'ios'
            ? [styles.profileCircle, styles.shadowIconIOS]
            : [styles.profileCircle, styles.shadowIconAndroid]}>
            <Image source={require('../assets/rocket.png')}/>
          </View>

          <View style={{ width: 200, borderWidth: 1, borderColor: pallette.secundary_color, marginTop: '5%' }}></View>

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

    </View>
  )
}

const styles = StyleSheet.create({

  homeContainer: {
    flex: 1,
    backgroundColor: pallette.primary_color,
    alignItems: 'center'
  },
  connectionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
    height: '15%',
    width: '80%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: pallette.secundary_color,

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
  containerActions: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileContainer: {
    flex: 4,
    alignItems: 'center',
    height: '100%',
  },
  userDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: pallette.secundary_color,
    borderWidth: 3,
    width: '90%',
    marginTop: '10%'
  },
  profileCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: '30%',
    borderRadius: 100,
    backgroundColor: pallette.secundary_color
  },
  shadowIconIOS: {
    shadowColor: pallette.primary_color,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.58,
    shadowRadius: 8.00,
  },
  shadowIconAndroid: {
    elevation: 15
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