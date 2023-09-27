// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrencyList} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = eachCurrencyList
  return (
    <div className="container">
      <div className="logo-container">
        <img src={currencyLogo} className="logo-image" alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-container">
        <p className="currency-name1">{usdValue}</p>
        <p className="currency-name">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
