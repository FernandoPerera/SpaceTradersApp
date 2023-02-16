import { View, Text, StyleSheet, Image } from "react-native"

import { pallette } from "../themes/theme.js"

const Loan = ({ loanAmount, loanRate, loanTermInDays, loanType }) => {
  return (
    <View style={styles.loanContainer}>

      <View style={styles.dataContainer}>
        <Image source={require('../assets/money.png')} />
        <Image source={require('../assets/rate.png')} />
        <Image style={styles.dataIcons} source={require('../assets/clock.png')} />
        <Image style={styles.dataIcons} source={require('../assets/type.png')} />
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.dataStyle}>Amount</Text>
        <Text style={styles.dataStyle}>Rate</Text>
        <Text style={styles.dataStyle}>Ends in</Text>
        <Text style={styles.dataStyle}>Type</Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.dataStyle}>{loanAmount}</Text>
        <Text style={styles.dataStyle}>{loanRate}%</Text>
        <Text style={styles.dataStyle}>{loanTermInDays} days</Text>
        <Text style={styles.dataStyle}>{loanType}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  loanContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '4%',
    paddingVertical: '4%',
    borderBottomWidth: 4,
    borderRadius: 10,
    borderColor: pallette.secundary_color
  },
  dataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
  },
  dataIcons: {
    marginVertical: '18%'
  },
  dataStyle: {
    marginVertical: '15%',
    color: pallette.secundary_color_text
  }
})

export default Loan