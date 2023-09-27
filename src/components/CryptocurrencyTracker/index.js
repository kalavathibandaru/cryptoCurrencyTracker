// Write your code here

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const CryptocurrencyTracker = props => {
  const {name} = props
  return (
    <div className="bg-container">
      <CryptocurrenciesList />
    </div>
  )
}

export default CryptocurrencyTracker
