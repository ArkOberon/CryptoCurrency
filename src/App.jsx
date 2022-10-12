import { useState, useEffect } from 'react'
import Form from './components/Form'
import Result from './components/Result'

import styled from '@emotion/styled'
import imageCrypto from './img/imagen-criptos.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'lato', sans-serif;
  font-weight: 700;
  font-size: 34px;
  color: #fff;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: blue;
    display: block;
    margin: 10px auto 0 auto;

  }  
`

function App() {
  const [coinsCalculate, setCoinsCalculate] = useState({})
  const [resultCalculate, setResultCalculate] = useState({})
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if(Object.keys(coinsCalculate).length > 0){      

      const calculateCrypto = async () => {
        const { coin, cryptoCoin } = coinsCalculate
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`
        
        const response = await fetch(url)      
        const result = await response.json()  
        
        setResultCalculate(result.DISPLAY[cryptoCoin][coin])
      }

      calculateCrypto()    

    }
  }, [coinsCalculate])

  return (
    <Container>
      <Image 
        src={imageCrypto}
        alt='image cryptocurrency'
      />
      <div>
        <Heading>Cryptocurrency Calculator</Heading>        
        <Form 
          setCoinsCalculate={setCoinsCalculate}
        />        


        {load ?? <p>loading...</p>}
        {resultCalculate.PRICE && <Result resultCalculate={resultCalculate} />}
        
      </div>     
    </Container>  
  )
}

export default App
