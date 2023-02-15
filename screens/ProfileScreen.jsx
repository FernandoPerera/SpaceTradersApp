
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

        <Text>Profile Screen</Text>
        <Text>{userProfile.username}</Text>
        <Text>{userProfile.credits}</Text>
        <Text>{userProfile.shipCount}</Text>
        <Text>{userProfile.structureCount}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#071C41'
  }
})

export default ProfileScreen