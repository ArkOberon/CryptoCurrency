import React from 'react'
import styled from '@emotion/styled'

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
  return (
    <form>
      <InputSubmit 
        type='submit' 
        value='trading' 
      />
    </form>
  )
}

export default Form