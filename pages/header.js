import React from 'react'
import { Link } from "@material-ui/core";

const Header = () => {
    return (
        <div className="header p-3 fs-4 text-center">
            <Link href='/home' className='link'>Home</Link>
            <Link href='/gallery' className='link'>Magic Gallery</Link>
            <Link href='/musics' className='link'>Voice Of A Nightingale</Link>
            <Link href='/music' className='link'>Musics</Link>
            <Link href='/letter' className='link'>My Letter</Link>
        </div>
    )
}

export default Header
