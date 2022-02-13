import React, { Component, useState } from 'react';
import StockData from '../StockData';
import StockDisplay from '../StockDisplay';

function portfolioHelp() {
  alert('Hello there here are the instructions');
}

function Portfolio() {
  const [data, setData] = useState({ items: [] });

  const addItemToData = (item) => {
    console.log('entering add');
    let items = data['items'];
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  return (
    <div>
      <div className='box'>
        <h1 className='page-header'>Portfolio</h1>
        <button className='help-button' onClick={portfolioHelp}>
          Help
        </button>
      </div>
      <div></div>

      <form>
        <label htmlFor=''>
          Convert to another currency
          <input type='text' />
        </label>
        <input type='submit'></input>
      </form>

      <StockData addItem={addItemToData} />
    </div>
  );
}

export default Portfolio;
