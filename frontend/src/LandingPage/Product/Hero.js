import React from 'react';
function Hero() {
    return (
        <div className='container text-center'>
          <div className='row mt-5'>
            <h2>Zerodha Products</h2>
            <h4 className='text-muted mt-2 fs-4 '>Sleek, modern, and intuitive trading platforms</h4>
            <p className='mt-2'>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right-long" style={{color:"blue"}}></i> </a></p>
          </div>
        </div>
      );
}

export default Hero;