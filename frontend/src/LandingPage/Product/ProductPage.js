import React from 'react';
import Hero from './Hero';
import LeftSection from  './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <>
        <Hero/>
        <LeftSection 
        imgUrl="Media/Images/kite.png"
        ProductName="Kite"
        ProductDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        Learnmore=""
        googlePlay=""
        appStore=""
        />
        <RightSection
        imgUrl="Media/Images/console.png"
        ProductName={
            <h2 className="mt-5 pt-5">Console</h2>
        }
        ProductDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        Learnmore=""
        />
        <LeftSection 
        imgUrl="Media/Images/coin.png"
        ProductName="Coin"
        ProductDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        Learnmore=""
        googlePlay=""
        appStore=""
        />
        <RightSection
        imgUrl="Media/Images/kiteconnect.png"
        ProductName="Kite Connect API"
        ProductDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        Learnmore=""
        />
        <LeftSection 
        imgUrl="Media/Images/varsity.png"
        ProductName="Varsity mobile"
        ProductDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        Learnmore=""
        googlePlay=""
        appStore=""
        />
        <Universe/>
        </>
     );
}

export default ProductPage;