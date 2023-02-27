
//import * as credentials from '../credentials.json'

const endPoints = {
    createUser: 'https://api.spacetraders.io/users/',
    checkConnection: 'https://api.spacetraders.io/game/status',
    userProfile: 'https://api.spacetraders.io/my/account?token=',
    viewAvaliableLoans: 'https://api.spacetraders.io/types/loans?token=',
    takeOutALoan: 'https://api.spacetraders.io/my/loans?token=',
    viewShipList: 'https://api.spacetraders.io/systems/OE/ship-listings?token='
}

export const createUser = async (userName) => {

    const response = await fetch(`${endPoints.createUser}${userName}/claim`, { method: 'POST' })
    const data = response.json()

    return data

}

export const checkApiConnection = async () => {
    
    const response = await fetch(endPoints.checkConnection)

    if ( response.status == 200 ) {
        return true
    } else {
        return false
    }

}

export const getUserProfile = async (token) => {

    const response = await fetch(`${endPoints.userProfile}${token}`)
    const data = await response.json()

    return data.user

}

export const getAvaliableLoans = async (token) => {

    const response = await fetch(`${endPoints.viewAvaliableLoans}${token}`)
    const data = response.json()

    return data

}

export const getLoan = async (token) => {

    
    const typeOfLoan = await getAvaliableLoans(token)

    const response = await fetch(`${endPoints.takeOutALoan}${token}&type=${typeOfLoan.loans[0].type}`, {method: 'POST'})
    const data = await response.json()

    return data

}

export const getListOfShips = async (token) => {

    const response = await fetch(`${endPoints.viewShipList}${token}`)
    const data = response.json()

    return data

}