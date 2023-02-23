import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { RootSiblingParent } from 'react-native-root-siblings'

import { StyleSheet } from "react-native"

import HomeScreen from './screens/HomeScreen'
import LoansScreen from './screens/LoansScreen'
import ShipsScreen from './screens/ShipsScreen'
import StartingScreen from './screens/StartingScreen'
import LoginScreen from './screens/LoginScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='StartingScreen'>
          <Drawer.Screen name='Entrance' component={StartingScreen} />
          <Drawer.Screen name='Login' component={LoginScreen} />
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Loan' component={LoansScreen} />
          <Drawer.Screen name='Ships' component={ShipsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
