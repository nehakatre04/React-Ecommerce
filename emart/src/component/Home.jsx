import React from 'react'
import Products from './Products'

const Home = () => {
    return (
        <div classNameName="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/bg.jpg" className="card-img" alt="Background" height="650px" />
                <div className="card-img-overlay d-flex flex-column justify-contect-center">
                    <div classNameName="container">
                        <h5 className="card-title display-3 fw-border mb-0 ">WINTER SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2 mt-3">
                            CHECK OUT ALL THE TRENDS
                        </p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home