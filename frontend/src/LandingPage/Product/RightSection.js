import React from 'react';
function RightSection({imgUrl,ProductName,ProductDescription,Learnmore}) {
    return ( 
        <div className='container'>
        <div className='row mt-5 '>
            <div className='col-5 mt-5'>
                <h2 className='mt-2'>{ProductName}</h2>
                <p className='mt-4 fs-5'>{ProductDescription}</p>
                <div>
                    <a href={Learnmore} style={{textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>    
            </div>
            <div className='col-1'></div>
            <div className='col-6'>
                <img src={imgUrl} alt={ProductName} />
            </div>
        </div>
    </div>
     );
}

export default RightSection;