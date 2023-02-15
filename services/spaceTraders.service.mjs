
const endPoints = {
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
