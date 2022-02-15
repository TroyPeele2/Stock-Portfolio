import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import StockDisplay from './StockDisplay';

function StockData(props) {
  const [ticker, setTicker] = useState();
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [data, updateData] = useState([]);

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
        console.log(response.data.results[0]['T']);

        // this represents the stock closing price
        let tempPrice = response.data.results[0]['c'].toFixed(2);
        let currTotal = (tempPrice * quantity).toFixed(2);
        let stock = [ticker, quantity, tempPrice, currTotal];

        // promise or
        setPrice(tempPrice);
        setTotal(currTotal);

        updateData([...data, stock]);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };

  return (
    <div>
      <StockDisplay total={data} />
      <div className='add-conversion'>
        <form className='conversion'>
          <label htmlFor=''>
            Convert to another currency
            <input type='text' />
          </label>
          <input type='submit'></input>
        </form>
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
            {data.map((stock) => (
              <tr>
                <td className='portfolio-content'>{stock[0]}</td>
                <td className='portfolio-content'>{stock[1]}</td>
                <td className='portfolio-content'>${stock[2]}</td>
                <td className='portfolio-content'>${stock[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default StockData;
