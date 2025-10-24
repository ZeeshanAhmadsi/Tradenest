import React from 'react';
function Hero() {
    return (
        <div className="container">
          <div className='row mt-5 text-center border-bottom p-5'>
            <h1 >Pricing</h1>
            <p className='text-muted fs-5 mt-3'>Free equity investments and flat ₹20 intraday and F&O trades.</p>
          </div>
          <div className='row mt-5'>
            <div className='col-4 text-center'>
              <img src="Media/Images/pricingEquity.svg" alt="pricingEquity"/>
              <h3>Free equity delivery</h3>
              <p className='text-muted'>All equity delivery investments (NSE,BSE), are absolutely free - &#8377;0 brokerage.</p>
            </div>
            <div className='col-4 text-center'>
              <img src="Media/Images/intradayTrades.svg" alt="intradayTrades"/>
              <h3>Intraday and F&O trades</h3>
              <p className='text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday 
                trades across equity, currency, and commodity trades.</p>
            </div>
            <div className='col-4 text-center'>
              <img src="Media/Images/pricingEquity.svg" alt="pricingEquity"/>
              <h3>Free direct MF</h3>
              <p className='text-muted'>All direct mutual fund investments are absolutely free - &#8377;0 commissions & DP charges.</p>
            </div>
          </div>
        </div>
    );
}

export default Hero;