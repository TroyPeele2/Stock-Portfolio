import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StockDisplay from './StockDisplay';

function StockData(props) {
  const [ticker, setTicker] = useState();
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [data, updateData] = useState([]);
  const [bitcoin, setBitcoin] = useState(0);

  const [portfolio, setPortfolio] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [value, setValue] = useState(0);

  // making  a call to an api to get a bitcoin request.
  // useEffect(function changeValuation(amount, tick) {
  //   setCurrency(tick);
  //   setValue(amount);
  // });

  const bitcoinConversion = (e) => {
    if (e.target.value == 'BTC') {
      // const polybit =
      //   'https://api.polygon.io/v2/aggs/ticker/X:BTCUSD/range/1/day/2021-07-22/2021-07-22?adjusted=true&sort=asc&limit=120&apiKey=SuaIlAqCImCfcixB2Qn3FBuZP1mkqkfl';
      const micro = 'http://127.0.0.1:5000/amount/';
      axios
        .get(micro)
        .then((response) => {
          console.log('here');
          let data = parseFloat(response.data.conversion);
          let bitPrice = data;
          let quantityBitcoin = (portfolio / bitPrice).toFixed(5);
          console.log(portfolio);
          console.log(bitPrice);
          console.log('number of shares');
          console.log(quantityBitcoin);

          // changes the currency to BTC and total = quantity
          console.log('Set Value');
          setCurrency('BTC');
          setValue(quantityBitcoin);
          console.log(currency);

          // setBitcoin(bitPrice);
          // alert('You can buy ' + quantityBitcoin + ' shares of bitcoin');
        })

        .catch((error) => {
          console.log(error);
        });

      // console.log('bitcoin check');
      // console.log(bitcoin);
    } else if (e.target.value == 'USD') {
      setCurrency('USD');
      setValue(portfolio).toFixed(2);
      return;
    }
  };

  ///////////
  // handles form on click function to add another stock to the portfolio
  const HandleSubmit = (e) => {
    e.preventDefault();

    const stockData =
      'https://api.polygon.io/v2/aggs/ticker/' +
      ticker +
      '/prev?adjusted=true&apiKey=SuaIlAqCImCfcixB2Qn3FBuZP1mkqkfl';

    // makes get request call to polygon.io api to get stock data
    // console.log('axios request');
    axios
      .get(stockData)
      .then((response) => {
        // represents the stock ticker
        // console.log(response.data.results[0]['T']);

        // this represents the stock closing price
        let tempPrice = response.data.results[0]['c'].toFixed(2);
        let currTotal = (tempPrice * quantity).toFixed(2);
        let stock = [ticker, quantity, tempPrice, currTotal];

        // promise or
        let newValue = Number(portfolio) + Number(currTotal);
        setPortfolio(newValue);
        setValue(newValue.toFixed(2));

        setPrice(tempPrice);
        setTotal(currTotal);

        updateData([...data, stock]);

        setCurrency('USD');
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
    setTicker('');
    setQuantity(0);
  };

  const DeleteStock = (index) => {
    // currentValue of stock investment
    const decrement = data[index][3];
    console.log(decrement);
    const newVal = Number(portfolio) - Number(decrement);
    setPortfolio(newVal);
    setValue(newVal.toFixed(2));
    setCurrency('USD');

    // works
    const newData = [...data.slice(0, index), ...data.slice(index + 1)];
    // Update state
    updateData(newData);
  };
  return (
    <div>
      <div className='totalDisplay' id='disp'>
        <div className='value' id='value'>
          Total: {value} {currency}
        </div>
        {/* <StockDisplay total={data} /> */}
        {/* <div className='currency-ticker' id='ticker'>
          USD
        </div> */}
      </div>

      <div className='add-conversion'>
        <select className='conversion' onChange={bitcoinConversion}>
          <option value='USD'>USD</option>
          <option value='BTC'>BTC</option>
        </select>

        <form className='add-stock'>
          <label>Add a Stock: </label>
          <input
            type='text'
            placeholder='Enter a Stock Ticker'
            name='ticker'
            value={ticker}
            onChange={(e) => setTicker(e.target.value.toUpperCase())}
          />
          <input
            type='number'
            placeholder='Quantity'
            name='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input type='submit' onClick={HandleSubmit}></input>
        </form>
      </div>

      <div className='stock-list'>
        <table className='stock-portfolio'>
          <thead>
            <tr>
              <th className='portfolio-header'>Ticker</th>
              <th className='portfolio-header'>Quantity</th>
              <th className='portfolio-header'>Price</th>
              <th className='portfolio-header'>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stock, index) => (
              <tr>
                <td className='portfolio-content'>{stock[0]}</td>
                <td className='portfolio-content'>{stock[1]}</td>
                <td className='portfolio-content'>${stock[2]}</td>
                <td className='portfolio-content'>${stock[3]}</td>
                <td>
                  <button onClick={() => DeleteStock(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default StockData;
