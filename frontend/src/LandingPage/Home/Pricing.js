import React from 'react';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5'>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transperancy in india.Flat fees and no hidden charges.  </p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-5 text-center mb-5'>
                    <div className='row'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'> &#x20B9;0</h1>
                            <p className='text-muted'>Free equity delivery and <br></br> direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'> &#x20B9;20</h1>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;