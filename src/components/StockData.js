import React, { Component, useState } from 'react';
import axios from 'axios';

function StockData(props) {
  const [ticker, setTicker] = useState();
  const [quantity, setQuantity] = useState(0);
  // const [stocks, setStocks] = useState({});
  // const [info, setInfo] = useState();
  const [url, setUrl] = useState({});
  const practice =
    'https://api.polygon.io/v2/aggs/ticker/AAPL/prev?adjusted=true&apiKey=SuaIlAqCImCfcixB2Qn3FBuZP1mkqkfl';
  function callAPI() {
    console.log('making request');
    axios
      .get(practice)
      .then((response) => {
        console.log('resonses finally');
        // let setInfo = response.data;
        console.log(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(ticker);
    // console.log(quantity);
    // const key = 'SuaIlAqCImCfcixB2Qn3FBuZP1mkqkfl';

    const stockData =
      'https://api.polygon.io/v2/aggs/ticker/' +
      ticker +
      '/prev?adjusted=true&apiKey=SuaIlAqCImCfcixB2Qn3FBuZP1mkqkfl';

    // makes get request call to polygon.io api to get stock data
    axios
      .get(stockData)
      .then((response) => {
        console.log('responses finally');
        // let setInfo = response.data;
        // console.log(response);

        console.log(response.data.results[0]['T']);

        // this represents the stock closing price
        console.log(response.data.results[0]['c']);
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log('information');
  };

  return (
    <div>
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
        <input type='submit' onClick={handleSubmit}></input>
      </form>
    </div>
  );
}
export default StockData;
// export class StockData extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       posts: [],
//       ticker: '',
//       quantity: 0,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//     this.key = 'SuaIlAqCImCfcixB2Qn3FBuZP1mkqkfl';
//   }

//   handleSubmit(event) {
//     console.log(ticker);
//     const { ticker, quantity } = this.state;
//     // event.preventDefault();
//     console.log(`
//       ____Your Details____\n
//       ticker : ${ticker}
//       quantity : ${quantity}
//     `);
//     alert(`
//       ____Your Details____\n
//       ticker : ${ticker}
//       quantity : ${quantity}
//     `);
//   }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>Add a Stock: </label>
//           <input
//             type='text'
//             placeholder='Enter a Stock Ticker'
//             name='ticker'
//             value={this.state.ticker}
//             onChange={this.handleChange}
//           />
//           <input
//             type='number'
//             placeholder='Quantity'
//             name='quantity'
//             value={this.state.quantity}
//             onChange={this.handleChange}
//           />
//           <input type='submit'></input>
//         </form>
//       </div>
//     );
//   }
// }
