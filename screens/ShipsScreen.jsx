import { useState, useEffect } from "react"
import { View, Text, FlatList } from "react-native"

import { StyleSheet } from "react-native"

import { getListOfShips } from "../services/spaceTraders.service.mjs"

import Ship from "../components/Ship.jsx"
import { pallette } from "../themes/theme.js"

const ShipsScreen = ({ token }) => {

    const [ships, setShips] = useState([])

    useEffect(() => {

        const getShips = async () => {
            const ships = await getListOfShips(token)

            setShips(ships.shipListings)
        }

        getShips()

    }, [])

    return (
        <View style={styles.shipsContainer}>

            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    SHIPS
                </Text>
            </View>

            <View style={styles.listOfShipsContainer}>

                {
                    ships.length === 0
                        ?
                        <View style={styles.emptyList}>
                            <Text style={{ color: pallette.secundary_color_text }}>Ships Not Founded</Text>
                        </View>
                        :
                        <FlatList style={{ width: '95%' }}
                            data={ships}
                            renderItem={(renderItem) => {
                                const { type, speed, weapons, maxCargo } = renderItem.item
                                return (
                                    <Ship
                                        ShipType={type} 
                                        ShipSpeed={speed}
                                        ShipWeapons={weapons}
                                        ShipMaxCargo={maxCargo}
                                        />
                                )
                            }}
                        />
                }

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    shipsContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: pallette.primary_color
    },
    listOfShipsContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5%',
        width: '100%',
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        width: '30%',
    },
    headerTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: pallette.primary_color_text,
        fontSize: 20,
        letterSpacing: 7,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        paddingVertical: 20,
        padding: '-10%',
        marginTop: '5%',
        borderColor: pallette.secundary_color

    }

})

export default ShipsScreen