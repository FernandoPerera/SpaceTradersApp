import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import StartingScreen from '../screens/StartingScreen'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Entrance'
          screenOptions={{
            headerShown: false
          }}  
        >

          <Stack.Screen name='Entrance' component={StartingScreen}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Register' component={RegisterScreen}/>
          
        </Stack.Navigator> 
      </NavigationContainer>
    )
}

export default MainStack