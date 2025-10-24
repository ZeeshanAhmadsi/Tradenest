import React from 'react';
function Universe() {
    return ( 
        <div className='container'>
            <div className='row mt-5 text-center'>
                <p className='fs-5 mb-5'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
                <h3 className='mt-4'>The Zerodha Universe</h3>
                <p className='mt-3 fs-6'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 mt-5'>
                    <img src="Media/Images/smallcaseLogo.png" alt="smallcaseLogo"/>
                    <p className='text-small text-muted fs-6 mt-3'>Thematic investing platform
                    that helps you invest in diversified
                    baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src="Media/Images/streakLogo.png" alt="streakLogo" style={{width:"40%"}}/>
                    <p className='text-small text-muted fs-6 mt-3'>Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src="Media/Images/sensibullLogo.svg" alt="sensibullLogo" style={{width:"56%"}}/>
                    <p className='text-small text-muted fs-6 mt-3'>Options trading platform that lets you
                    create strategies, analyze positions, and examine
                    data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src="Media/Images/zerodhaFundhouse.png" alt="zerodhaFundhouse" style={{width:"50%"}}/>
                    <p className='mt-3 text-small text-muted fs-6'>Our asset management venture
                    that is creating simple and transparent index
                    funds to help you save for your goals.</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src="Media/Images/goldenpiLogo.png" alt="goldenpiLogo" style={{width:"50%"}}/>
                    <p className='text-small text-muted fs-6 mt-3'>Bonds trading platform</p>
                </div>
                <div className='col-4 mt-5'>
                    <img src="Media/Images/dittoLogo.png" alt="dittoLogo" style={{width:"40%"}}/>
                    <p className='text-small text-muted fs-6 mt-3'>Personalized advice on life
                    and health insurance. No spam
                    and no mis-selling.</p>
                </div>
               <button className='p-2 btn btn-primary fs-5' style={{width:'20%' , margin:'0 auto', color:'white'}}>Sign up for free</button>
            </div>
            
        </div>
     );
}

export default Universe;