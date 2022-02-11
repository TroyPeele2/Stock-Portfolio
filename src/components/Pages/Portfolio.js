import React, { Component } from 'react';
import StockData from '../StockData';

function portfolioHelp() {
  alert('Hello there here are the instructions');
}

export class Portfolio extends Component {
  
  render() {
    return (
      <div>
        <div className='box'>
          <h1 className='page-header'>Portfolio</h1>
          <button className='help-button' onClick={portfolioHelp}>
            Help
          </button>
        </div>

        <form>
          <label htmlFor=''>
            Convert to another currency
            <input type='text' />
          </label>
          <input type='submit'></input>
        </form>

        <StockData />
      </div>
    );
  }
}

export default Portfolio;
