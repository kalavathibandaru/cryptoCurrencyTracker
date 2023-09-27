// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getTheListOfCurrency()
  }

  getTheListOfCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({currencyList: formattedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div>
        <div className="main-container">
          <h1 className="heading"> Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="image"
          />
        </div>
        <div className="second-container">
          <div className="top-container">
            <p className="item1">Coin Type</p>
            <p className="item2">USD</p>
            <p className="item3">EURO</p>
          </div>
          <div>
              {isLoading ? (<Loader type="TailSpin" color:"#00BFFF" height={50} width={50}/>):(
                  currencyList.map(eachCurrencyList => 
              <CryptocurrencyItem
                eachCurrencyList={eachCurrencyList}
                key={eachCurrencyList.id/>)
              )}
          </div>
      </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
