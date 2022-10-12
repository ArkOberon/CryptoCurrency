import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import useSelectCurrency from '../hooks/useSelectCurrency'
import { coins } from '../data/coins'

const InputSubmit = styled.input`
  background-color: blue;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 5px;
  transition:background-color 0.5s ease;
  margin-top: 30px;
  cursor: pointer;

  &:hover {
    background-color: #7a7dfe;
  }
`

const Form = () => { 
  
  const [cryptos, setCryptos] = useState([])

  const [ coin, SelectCurrency ] = useSelectCurrency('Select Currency', coins)
  const [ cryptoCoin, SelectCryptoCurrency ] = useSelectCurrency('Select Cryptocurrency', cryptos)

  useEffect(() => {
    const apiView = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=20&tsym=USD'
    
      const response = await fetch(url)
      const result = await response.json()      

      const arrayCrypto = result.Data.map(crypto => {        

        const coinObj = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName
        }

        return coinObj
      })

      setCryptos(arrayCrypto)

    }
    apiView()
  },[])

  const handleSubmit = e => {
    e.preventDefault()

    console.log('Send Form')
  }
  
  return (          
    <form
      onSubmit={handleSubmit}
    >
      <SelectCurrency />
      <SelectCryptoCurrency />
      <InputSubmit 
        type='submit' 
        value='trading' 
      />
    </form>    
  )
}

export default Form