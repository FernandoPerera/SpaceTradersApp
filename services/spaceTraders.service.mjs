
import * as credentials from '../credentials.json'

const endPoints = {
    checkConnection: `https://api.spacetraders.io/game/status`,
    userProfile: `https://api.spacetraders.io/my/account?token=${credentials.token}`,
    viewAvaliableLoans: `https://api.spacetraders.io/types/loans?token=${credentials.token}`,
    viewShipList: `https://api.spacetraders.io/systems/OE/ship-listings?token=${credentials.token}&class=MK-I`
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

export const getAvaliableLoans = async () => {

    const response = await fetch(endPoints.viewAvaliableLoans)
    const data = response.json()

    return data

}

export const getListOfShips = async () => {

    const response = await fetch(endPoints.viewShipList)
    const data = response.json()

    return data

}