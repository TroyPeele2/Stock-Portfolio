function StockDisplay({ total }) {
  let totalDisplay =
    total.length > 0
      ? total.reduce((a, b) => a + parseFloat(b[3]), 0).toFixed(2)
      : 0;

  // console.log(total);
  return (
    <div className='currency-total'>
      Total:
      {totalDisplay}
    </div>
  );
}

export default StockDisplay;
