import React from 'react'
import './Home.css';
// import Product from './Product';
// import image from './main_img.jpg';
const Home = () => {
    return (
        <div className='hero'>
            <div className="card text-bg-white border-0">
                <img src="/assets/main_img.jpg" className="card-img" alt="Background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                    <h6 id="season" className="card-title display-5 fw-bolder mb-0">NEW SEASON ARRIVALS</h6>
                    <p id="checkout" className="card-text lead fs-2">
                        CHECK OUT ALL THE TRENDS
                    </p>

                    </div>
                    
                    
                </div>
            </div>

           {/* <Product/> */}
        </div>
        
    )
}

export default Home;
