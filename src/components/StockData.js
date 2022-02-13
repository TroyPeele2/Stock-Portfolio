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
        // calculate the total of purchasing price*quantity

        // promise or
        setPrice(tempPrice);
        setTotal(currTotal);

        let stock = [ticker, quantity, tempPrice, currTotal];

        updateData([...data, stock]);
        // console.log(ticker, quantity, price, total);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };

  return (
    <div>
      <StockDisplay total={data} />
      <form>
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
      <div className='stock-list'>
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((stock) => (
              <tr>
                <td>{stock[0]}</td>
                <td>{stock[1]}</td>
                <td>{stock[2]}</td>
                <td>{stock[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default StockData;
