import { useEffect, useState } from "react"
import { Text, View } from "react-native"

import { StyleSheet } from "react-native"

import { checkApiConnection } from "../services/spaceTraders.service.mjs"

const HomeScreen = () => {

  const [connection, setConnection] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {

    const fetchCheckConnection = async () => {
      const checkConnection = await checkApiConnection()
      setConnection(checkConnection)
    }

    fetchCheckConnection()

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

      <View style={styles.containerActions}>

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
    backgroundColor: '#1E0A49'
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
})

export default HomeScreen