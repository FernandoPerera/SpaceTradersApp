import { View, Text, StyleSheet, Image } from "react-native"
import { pallette } from "../themes/theme"

const Ship = ({ ShipType, ShipSpeed, ShipWeapons, ShipMaxCargo }) => {

    const spaceShipImage = () => {

        switch (ShipType) {

            case "JW-MK-I":
                return <Image style={styles.imageStyle} source={require('../assets/ships/Ship_1.png')} />
            case "GR-MK-I":
                return <Image style={styles.imageStyle} source={require('../assets/ships/Ship_2.png')} />
            case "EM-MK-I":
                return <Image style={styles.imageStyle} source={require('../assets/ships/Ship_3.png')} />
            case "HM-MK-I":
                return <Image style={styles.imageStyle} source={require('../assets/ships/Ship_4.png')} />
            case "TD-MK-I":
                return <Image style={styles.imageStyle} source={require('../assets/ships/Ship_5.png')} />
            default:
                break;
                
        }

    }

    return (
        <View style={styles.ShipContainer}>

            <View style={styles.dataContainer}>
                <Text style={styles.shipModel}>{ShipType}</Text>
                {spaceShipImage()}

                <View style={styles.shipInfoContainer}>
                    <View style={{marginRight: '5%'}}>
                        <Text style={styles.modelData}>Speed</Text>
                        <Text style={styles.modelData}>Weapons</Text>
                        <Text style={styles.modelData}>Max Cargo</Text>
                    </View>

                    <View style={{marginLeft: '5%'}}>
                        <Text style={styles.modelData}>{ShipSpeed}</Text>
                        <Text style={styles.modelData}>{ShipWeapons}</Text>
                        <Text style={styles.modelData}>{ShipMaxCargo}</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    ShipContainer: {
        flex: 1,
        backgroundColor: pallette.secundary_color,
        borderRadius: 10,
        marginVertical: '2%'
    },
    dataContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '20%'
    },
    shipModel: {
        textAlign: 'center',
        fontSize: 20,
        borderBottomWidth: 3,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: '-5%',
        marginBottom: '2.5%',
        width: '35%',
        padding: '2%',
        fontWeight: 'bold',
        borderColor: pallette.primary_color,
        color: pallette.primary_color_text
    },  
    shipInfoContainer: {
        marginVertical: '5%',
        flexDirection: 'row'
    },
    imageStyle: {
        height: '60%',
        width: '30%'
    },
    modelData : {
        color: pallette.secundary_color_text
    }
})

export default Ship