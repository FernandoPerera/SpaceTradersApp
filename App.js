
import { createDrawerNavigator } from '@react-navigation/drawer'
import { RootSiblingParent } from 'react-native-root-siblings'

// import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
// import { RootSiblingParent } from 'react-native-root-siblings'

import MainStack from './navigation/MainStack'
import { useEffect, useState } from 'react'

import HomeScreen from './screens/HomeScreen'
import ShipsScreen from './screens/ShipsScreen'
import LoansScreen from './screens/LoansScreen'

const Drawer = createDrawerNavigator()

export default function App() {

  const [token, setToken] = useState('')

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

              </Drawer.Navigator>
        }

      </NavigationContainer>
    </RootSiblingParent >
  )
}
