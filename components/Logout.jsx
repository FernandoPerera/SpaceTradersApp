import { View } from "react-native"


const Logout = ({ setToken }) => {

    const logoutFromApp = () => {
        setToken('')
    }


  return (
    <View>
        {logoutFromApp()}
    </View>
  )
}

export default Logout