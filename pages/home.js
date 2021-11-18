import React from 'react'
import Header from './header'
import Image from 'next/image'

const Home = () => {
    return (
        <div>
            <Header></Header> <br /> <br />
            <div className="d-flex align-items-center pt-5">
                <Image src="/img.jpg" width='350' height='450' className="homeimg" alt='di' />
                <p>Человек с доброй душой, <br /> с горящими глазами, <br /> с открытым сердцем и <br /> с безграничной любовью...</p>
            </div>
        </div>
    )
}

export default Home
