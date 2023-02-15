import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

import { Text, View, FlatList } from "react-native"
import Loan from '../components/Loan'

import { getAvaliableLoans } from '../services/spaceTraders.service.mjs'

const LoansScreen = () => {

  const [avaliableLoansApi, setAvaliableLoansApi] = useState([])

  useEffect(() => {

    const fetchCheckAvaliableLoans = async () => {
      const checkAvaliableLoans = await getAvaliableLoans()
      setAvaliableLoansApi(checkAvaliableLoans.loans)
    }

    fetchCheckAvaliableLoans()

  }, [])


  return (
    <View style={styles.avaliableLoansContainer}>

      <View style={{ flex: 1, justifyContent: 'center', marginVertical: '7%' }}>
        <View style={styles.loansHeader}>
          <Text style={{ fontSize: 19, fontStyle: 'italic', color: 'white' }}>Loans pending payment</Text>
        </View>
      </View>

      <View style={styles.lonsListContainer}>

        {
          avaliableLoansApi.length == 0
            ?
            <View style={styles.emptyList}>
              <Text style={{color: 'white'}}>No loans to pay</Text>
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

      <FlatList />

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
  lonsListContainer: {
    flex: 5.5,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 3,
    backgroundColor: '#1E0A49',
    borderColor: '#7285A6',
  }
})

export default LoansScreen