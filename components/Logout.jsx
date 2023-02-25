import { View } from "react-native"


const Logout = ({ setToken }) => {

    const logoutFromApp = () => {
        setToken('')
    }


  return logoutFromApp()
}

export default Logout