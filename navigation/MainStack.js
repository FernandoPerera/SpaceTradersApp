import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import StartingScreen from '../screens/StartingScreen'
import { pallette } from '../themes/theme'

const Stack = createNativeStackNavigator()

const MainStack = ({ token, setToken }) => {
    return (
        <Stack.Navigator 
          initialRouteName='Entrance'
          screenOptions={{
            headerStyle: {backgroundColor: pallette.primary_color},
            headerTitleAlign: 'center',
            headerTintColor: pallette.secundary_color_text,
            animation: 'fade',
            statusBarColor: pallette.secundary_color
          }}  
        >

          <Stack.Screen name='Entrance' component={StartingScreen}/>
          <Stack.Screen name='Login' component={LoginScreen}/>
          
          <Stack.Screen name='Register'>
            { () => <RegisterScreen setToken={setToken}/> }
          </Stack.Screen>
          
        </Stack.Navigator> 
    )
}

export default MainStack