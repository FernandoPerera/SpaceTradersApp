import { useEffect, useState } from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

import { Text, View, FlatList, Pressable, Modal } from "react-native"
import Toast from 'react-native-root-toast'
import Loan from '../components/Loan'

import { getAvaliableLoans, getLoan } from '../services/spaceTraders.service.mjs'

import { pallette } from "../themes/theme.js"

const LoansScreen = ({ token }) => {

  const [avaliableLoansApi, setAvaliableLoansApi] = useState([])
  const [loanApi, setLoanApi] = useState()

  const [show, setShow] = useState(false)

  useEffect(() => {

    const fetchCheckAvaliableLoans = async () => {
      const checkAvaliableLoans = await getAvaliableLoans(token)
      setAvaliableLoansApi(checkAvaliableLoans.loans)
    }

    fetchCheckAvaliableLoans()

  }, [])

  const fetchGetLoan = async () => {
    const response = await getLoan(token)

    if (response.hasOwnProperty('error')) {
      Toast.show('Only one loan allowed at a time')
    } else { 

      setLoanApi(response.loan.repaymentAmount) 

      setShow(true)

      setTimeout(() => {
        setShow(false)
      }, 1500)
    }

  }

  return (

    <ImageBackground style={styles.avaliableLoansContainer} source={(require('../assets/background-wallpapers/sky.png'))}>

      <View style={{ flex: 1, justifyContent: 'center', marginVertical: '7%' }}>
        <View style={styles.loansHeader}>
          <Text style={{ fontSize: 19, fontWeight: 'bold', color: pallette.primary_color_text }}>
            Avaliable Loans
          </Text>
        </View>
      </View>

      <View style={styles.loansListContainer}>

        {
          avaliableLoansApi.length == 0
            ?
            <View style={styles.emptyList}>
              <Text style={{ color: 'white' }}>Dont have avaliable loans</Text>
            </View>
            :
            <FlatList style={{ width: '90%' }}
              data={avaliableLoansApi}
              renderItem={(renderItem) => {
                const { amount, rate, termInDays, type } = renderItem.item
                return (
                  <Loan
                    loanAmount={amount}
                    loanRate={rate}
                    loanTermInDays={termInDays}
                    loanType={type} />
                )
              }}
            />
        }

      </View>

      <View style={styles.actionContainer}>

        <Pressable style={styles.loanButton} onPress={() => fetchGetLoan()}>

          <Text style={{
            color: pallette.primary_color_text,
            fontWeight: 'bold',
            fontSize: 17
          }}>
            Ask for a loan
          </Text>

        </Pressable>

        <Modal
          visible={show}
          transparent={true}
          animationType='fade'>

          <View style={styles.modalContainer}>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{
                color: pallette.primary_color_text,
                fontWeight: 'bold',
                fontSize: 17
              }}>
                Repayment amount : {loanApi}
              </Text>
            </View>

          </View>
        </Modal>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  avaliableLoansContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: pallette.primary_color
  },
  loansHeader: {
    padding: '6%',
    borderRadius: 8,
    borderWidth: 4,
    borderColor: pallette.secundary_color
  },
  loansListContainer: {
    flex: 5,
    width: '87.5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionContainer: {
    flex: 2.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loanButton: {
    backgroundColor: pallette.primary_color,
    padding: '4.5%',
    paddingHorizontal: '6.5%',
    borderRadius: 7,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: pallette.primary_color_text
  },
  modalContainer: {
    justifyContent: 'space-evenly',
    height: '15%',
    width: '60%',
    marginVertical: '80%',
    marginHorizontal: '20%',
    borderRadius: 12,
    borderRadius: 7,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: pallette.primary_color_text,
    backgroundColor: pallette.primary_color
  }

})

export default LoansScreen