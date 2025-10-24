import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='/Media/Images/homeHero.png' alt='homeHero' className="mb-5"/>
                <h1 className='mt-5'>Invest In EveryThing</h1>
                <p className=' fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:'20%' , margin:'0 auto', color:'white'}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;