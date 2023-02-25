
import { createDrawerNavigator } from '@react-navigation/drawer'
import { RootSiblingParent } from 'react-native-root-siblings'
import { NavigationContainer } from '@react-navigation/native'

import * as SecureStore from 'expo-secure-store'


import MainStack from './navigation/MainStack'
import { useEffect, useState } from 'react'

import HomeScreen from './screens/HomeScreen'
import ShipsScreen from './screens/ShipsScreen'
import LoansScreen from './screens/LoansScreen'
import Logout from './components/Logout'

const Drawer = createDrawerNavigator()

export default function App() {

  const KEY_ON_STORAGE = 'token'

  const [token, setToken] = useState('')

  useEffect(() => {

    const getToken = async () => {
      const savedToken = await SecureStore.getItemAsync(KEY_ON_STORAGE)
      setToken(savedToken)

      await SecureStore.setItemAsync(KEY_ON_STORAGE, savedToken)
    }
    
    getToken()
  
  }, [token])

  return (
    <RootSiblingParent>
      <NavigationContainer>

        {
          token === ''
            ?
              <MainStack token={token} setToken={setToken} />
            :
              <Drawer.Navigator initialRouteName='Home'>
                <Drawer.Screen name='Home'>
                  { () => <HomeScreen token={token}/> }
                </Drawer.Screen>

                <Drawer.Screen name='Ships'>
                  { () => <ShipsScreen token={token}/>}
                </Drawer.Screen>

                <Drawer.Screen name='Loan'>
                  { () => <LoansScreen token={token}/> }
                </Drawer.Screen>

                <Drawer.Screen name='Logout'>
                  { () => <Logout setToken={setToken}/> }
                </Drawer.Screen>

              </Drawer.Navigator>
        }

      </NavigationContainer>
    </RootSiblingParent >
  )
}
