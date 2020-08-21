import React from 'react';
import './css/Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            alt=""
            src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg" />
        <div className="home__row">
        <Product 
        id="123456"
        title="Amazonbasics sheets"
        price={19.99}
        rating={5}
        img="https://m.media-amazon.com/images/I/71ROFJE-8nL._AC_UL320_.jpg"
       />
        <Product 
        id="123456"
        title="Amazonbasics sheets"
        price={19.99}
        rating={5}
        img="https://m.media-amazon.com/images/I/71ROFJE-8nL._AC_UL320_.jpg"
       />
        </div>

        <div className="home__row">
        <Product 
        id="123456"
        title="Amazonbasics sheets"
        price={19.99}
        rating={5}
        img="https://m.media-amazon.com/images/I/71ROFJE-8nL._AC_UL320_.jpg"
       />
        <Product 
        id="123456"
        title="Amazonbasics sheets"
        price={19.99}
        rating={5}
        img="https://m.media-amazon.com/images/I/71ROFJE-8nL._AC_UL320_.jpg"
       />
        <Product 
        id="123456"
        title="Amazonbasics sheets"
        price={19.99}
        rating={5}
        img="https://m.media-amazon.com/images/I/71ROFJE-8nL._AC_UL320_.jpg"
       />
        </div>
        <div className="home__row">
        <Product 
        id="123456"
        title="Amazonbasics sheets"
        price={19.99}
        rating={5}
        img="https://m.media-amazon.com/images/I/71ROFJE-8nL._AC_UL320_.jpg"
       />
       </div>
     </div>
    )
}

export default Home
