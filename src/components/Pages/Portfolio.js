import React, { Component, useState } from 'react';
import StockData from '../StockData';
import StockDisplay from '../StockDisplay';

function portfolioHelp() {
  alert(
    "1. Enter a stock by its NYSE ticker symbol ex. Google's stock ticker is Goog \n2. Enter quantity of shares then hit submit to add stock to your portfolio \n3. The value of your portfolio will reflect the total sum of all shares you own. \n4. If desired, you can select to convert your Portfolio from USD to another Crypto"
  );
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

      <StockData addItem={addItemToData} />
    </div>
  );
}

export default Portfolio;
