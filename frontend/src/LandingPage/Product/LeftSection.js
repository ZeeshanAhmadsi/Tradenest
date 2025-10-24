import React from 'react';
function LeftSection({imgUrl,ProductName,ProductDescription,tryDemo,Learnmore,googlePlay,appStore}) {
return(
    <div className='container mb-5'>
        <div className='row mt-5'>
            <div className='col-6'>
                <img src={imgUrl} alt={ProductName} />
            </div>
            <div className='col-1'></div>
            <div className='col-5 mt-5 ' style={{paddingLeft:"100px"}}>
                <h2 className='mt-2'>{ProductName}</h2>
                <p className='mt-4 fs-5'>{ProductDescription}</p>
                <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href={Learnmore} style={{marginLeft:"105px",textDecoration:"none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='mt-4'>
                    <a href={googlePlay} ><img src="Media/Images/googlePlayBadge.svg" alt="googlePlayBadge"/></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src="Media/Images/appStoreBadge.svg" alt="appStoreBadge"/></a>
                </div> 
                    
            </div>
            
        </div>
    </div>
);
}

export default LeftSection;