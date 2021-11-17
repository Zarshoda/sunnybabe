import React from 'react'
import Header from './header'

const Home = () => {
    return (
        <div>
            <Header></Header> <br /> <br />
            <div className="d-flex align-items-center">
                <img src="/img.jpg" className="homeimg" />
                <p>Человек с доброй душой, <br /> с горящими глазами, <br /> с открытым сердцем и <br /> с безграничной любовью...</p>
            </div>
        </div>
    )
}

export default Home
