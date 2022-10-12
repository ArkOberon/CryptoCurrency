import React from 'react'
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
  cursor: pointer;

  &:hover {
    background-color: #7a7dfe;
  }
`

const Form = () => {  

  const [ SelectCurrency ] = useSelectCurrency('Select Currency', coins)
  
  return (          
    <form>
      <SelectCurrency />

      <InputSubmit 
        type='submit' 
        value='trading' 
      />
    </form>    
  )
}

export default Form