import { useEffect, useState } from "react"
import { Text, View, Image } from "react-native"

import { StyleSheet } from "react-native"

import { checkApiConnection, getUserProfile } from "../services/spaceTraders.service.mjs"

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

          <Text style={{ flex: 1, color: 'white', fontSize: 16 }}>API connection check</Text>
          {
            connection == true

              ? <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.goodConnection}></View>
                <Text style={{ color: '#006308', marginHorizontal: '3%', fontSize: 16 }}>Successful API connection</Text>
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

          <View style={{ width: '60%', borderWidth: 0.8, borderColor: '#DDDADA', marginTop: '5%' }}></View>

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
    backgroundColor: '#071C41',
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
    borderColor: '#7285A6',

  },
  notConnection: {
    width: '17.5%',
    height: '100%',
    borderRadius: 60,
    backgroundColor: '#A40101',
    borderColor: 'black',
    borderWidth: 3
  },
  goodConnection: {
    width: '17.5%',
    height: '100%',
    borderRadius: 60,
    backgroundColor: '#006308',
    borderColor: 'black',
    borderWidth: 3
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
    backgroundColor: '#071C41'
  },
  userHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B80C1',
    borderRadius: 10,
    borderColor: '#DDDADA',
    borderWidth: 3,
    width: '55%',
    height: '15%',
    marginTop: '10%'
  },
  userDataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5382ED',
    borderRadius: 10,
    borderColor: '#DDDADA',
    borderWidth: 3,
    width: '90%',
    marginTop: '10%'
  },
  profileCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '39%',
    height: '30%',
    borderRadius: 120,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 3,
  },
  shadowIconIOS: {
    shadowColor: "#000",
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
    color: 'white',
    fontSize: 16
  }
})

export default HomeScreen