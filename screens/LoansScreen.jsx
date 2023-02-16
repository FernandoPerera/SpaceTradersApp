import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import { Text, View, FlatList, Pressable, Modal } from "react-native"
import Loan from '../components/Loan'

import { getAvaliableLoans, getLoan } from '../services/spaceTraders.service.mjs'

const LoansScreen = () => {

  const [avaliableLoansApi, setAvaliableLoansApi] = useState([])
  const [loanApi, setLoanApi] = useState({})

  const [show, setShow] = useState(false)

  useEffect(() => {

    const fetchCheckAvaliableLoans = async () => {
      const checkAvaliableLoans = await getAvaliableLoans()
      setAvaliableLoansApi(checkAvaliableLoans.loans)
    }

    fetchCheckAvaliableLoans()

  }, [])

  const fetchGetLoan = async () => {
    const loan = await getLoan()
    setLoanApi(loan.loans[0])
    setShow(true)

    setTimeout(() => {
      setShow(false)
    }, 1500)

  }

  return (
    <View style={styles.avaliableLoansContainer}>

      <View style={{ flex: 1, justifyContent: 'center', marginVertical: '7%' }}>
        <View style={styles.loansHeader}>
          <Text style={{ fontSize: 19, fontStyle: 'italic', color: 'white' }}>Loans pending payment</Text>
        </View>
      </View>

      <View style={styles.loansListContainer}>

        {
          avaliableLoansApi.length == 0
            ?
            <View style={styles.emptyList}>
              <Text style={{ color: 'white' }}>No loans to pay</Text>
            </View>
            :
            <FlatList style={{ width: '85%' }}
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

          <Text style={{ fontSize: 16, color: 'white' }}>Ask for a loan</Text>

        </Pressable>

        <Modal
          visible={show}
          transparent={true}
          animationType='fade'>

          <View style={styles.modalContainer}>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 16 }}>Repayment amount : {loanApi.repaymentAmount}</Text>
            </View>

          </View>
        </Modal>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  avaliableLoansContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#071C41'
  },
  loansHeader: {
    padding: '6%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: '#1E0A49',
    borderColor: '#7285A6'
  },
  loansListContainer: {
    flex: 5.5,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: '#1E0A49',
    borderColor: '#7285A6',
  },
  actionContainer: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loanButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8%',
    borderRadius: 15,
    borderWidth: 4,
    borderStyle: 'dashed',
    borderColor: '#7285A6',
    backgroundColor: '#1E0A49'
  },
  modalContainer: {
    justifyContent: 'space-evenly',
    height: '15%',
    width: '60%',
    marginVertical: '80%',
    marginHorizontal: '20%',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: '#063558'
  }

})

export default LoansScreen