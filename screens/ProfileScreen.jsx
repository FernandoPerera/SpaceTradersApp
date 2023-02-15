
import { Image, Text, View } from "react-native"
import { useEffect, useState } from "react"
import { StyleSheet } from 'react-native'

import { getUserProfile } from '../services/spaceTraders.service.mjs'

const ProfileScreen = () => {

    const [userProfile, setUserProfile] = useState({})

    useEffect(() => {
      const fetchUserData = async () => {
        setUserProfile(await getUserProfile())
      }
      fetchUserData()
    }, [])

  return (
    <View style={styles.profileContainer}>

<View style={styles.userHeader}>

<Text style={{ fontSize: 20, color: 'white', letterSpacing: 7 }}>User - Data</Text>

</View>

<View style={styles.userDataContainer}>

<View style={Platform.OS === 'ios' 
              ? [styles.profileCircle, styles.shadowIconIOS] 
              : [styles.profileCircle, styles.shadowIconAndroid]}>
  <Image style={styles.profileIcon} source={require('../assets/rocket.png')} />
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
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
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
  profileIcon: {
    height: '100%',
    width: '100%'
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

export default ProfileScreen