import React, { Component } from 'react';
import image from './bull.jpg';
import './Home.css';

export class Home extends Component {
  render() {
    return (
      <div className=''>
        <h1 className='page-header'>Home</h1>
        <div className='content'>
          <p className='explanation'>
            <h3>Portfolio Page Instructions:</h3>
            1. Enter a stock by its NYSE ticker symbol ex. Google's stock ticker
            is Goog
            <br></br>
            2. Enter quantity of shares then hit submit to add stock to your
            portfolio
            <br></br>
            3. The value of your portfolio will reflect the total sum of all
            shares you own.
            <br></br>
            4. If desired, you can select to convert your Portfolio from USD to
            another Crypto
          </p>

          <p className='video-recording'></p>
          <img className='image' src={image} />
        </div>
      </div>
    );
  }
}

export default Home;
