import styled from "@emotion/styled"

const Data = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 30px;
`

const Image = styled.img`
  display: block;
  width: 150px;
`

const Text = styled.p`
  font-size: 18px;
    span {
      font-weight: 700;
    }
`

const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }  
`

const Result = ({resultCalculate}) => {

  const { 
    PRICE, 
    HIGHDAY, 
    LOWDAY, 
    CHANGEPCT24HOUR, 
    IMAGEURL, 
    LASTUPDATE 
  } = resultCalculate

  return (
    <Data>     
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt='image-icon'/>
      <div>
        <Text>Last update:<span>{LASTUPDATE}</span></Text>  
        <Price>Price:<span>{PRICE}</span></Price>  
        <Text>Higher price of the day:<span>{HIGHDAY}</span></Text>  
        <Text>Lowest price of the day:<span>{LOWDAY}</span></Text>    
        <Text>Change last 24 h:<span>{CHANGEPCT24HOUR}</span></Text>  
      </div>         
    </Data>
  )
}

export default Result