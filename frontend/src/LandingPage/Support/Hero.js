import React from 'react';
function Hero() {
    return (
        <section className='container-fluid' id="supportHero">
          <div className='p-4' id="supportWrapper">
            <h4>Support Portal</h4>
            <a href="" style={{color:"white"}}>Track Tickets</a>
          </div>
          <div className='row p-4 '>
            <div className='col-6 p-4'>
              <h1 className='fs-4' style={{marginLeft:"135px"}}>Search for an answer or browse help topics to create a ticket</h1>
              <input className='mt-2' placeholder="Eg: how do i activate F&O, why is my order getting rejected.." type="text" style={{marginLeft:"135px"}}></input>
              <br/>
              <div className="mt-2" style={{marginLeft:"135px"}}>
              <a href="">Track account opening</a>
              <a href="" style={{marginLeft:"15px"}}>Track segment activation</a>
              <a href="" style={{marginLeft:"15px"}}>Intraday margins</a>
              <a href="" style={{marginLeft:"15px"}}>Kite user manual</a>
              </div>
            </div>
            <div className='col-6 p-4' >
              <h1 className='fs-3'style={{marginLeft:"135px"}}>Featured</h1>
              <ol>
                <li style={{marginLeft:"135px"}}><a href="">Current Takeovers and Delisting - January 2024</a></li>
                <li style={{marginLeft:"135px"}}><a href="">Latest Intraday leverages – MIS & CO</a></li>
              </ol>
            </div>
          </div>
        </section>
      );
}

export default Hero;