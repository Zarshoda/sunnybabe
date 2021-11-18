import React from 'react'
import Header from './header'

const Home = () => {
    return (
        <div>
            <Header></Header> <br /> <br />
            <div className="d-flex align-items-center">
                <Image src="/img.jpg" width='350' height='450' className="homeimg" />
                <p>Человек с доброй душой, <br /> с горящими глазами, <br /> с открытым сердцем и <br /> с безграничной любовью...</p>
            </div>
        </div>
    )
}

export default Home
