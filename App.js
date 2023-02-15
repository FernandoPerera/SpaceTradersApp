import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { RootSiblingParent } from 'react-native-root-siblings'

import { StyleSheet } from "react-native"

import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Profile' component={ProfileScreen} />
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
