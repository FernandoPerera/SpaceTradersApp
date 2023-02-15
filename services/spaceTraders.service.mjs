
import * as credentials from '../credentials.json'

const endPoints = {
    userProfile: `https://api.spacetraders.io/my/account?token=${credentials.token}`,
    checkConnection: `https://api.spacetraders.io/game/status`
}

export const checkApiConnection = async () => {
    
    const response = await fetch(endPoints.checkConnection)

    if ( response.status == 200 ) {
        return true
    } else {
        return false
    }

}

export const getUserProfile = async () => {

    const response = await fetch(endPoints.userProfile)
    const data = await response.json()

    return data.user

}
