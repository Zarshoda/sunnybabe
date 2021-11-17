import React, { useState } from 'react'
import { Link } from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const parol = "sunnybabe";

const Parol = () => {

    const [password, setPassword] = useState('');
    const [natija, setNatija] = useState('');
    const [next, setNext] = useState('d-none');

    const input = (e) => {
        setPassword(e.target.value)
    }

    const check = () => {
        if (password == parol) {
            setNatija(<FontAwesomeIcon icon={faCheck} className="text-success" />)
            setNext("")
        }
        else {
            setNatija(<FontAwesomeIcon icon={faTimes} className="text-danger" />)
        }
    }

    return (
        <div className='container mt-5'>
            <button>
                <Link href="/letter" className='parol'>Back</Link>
            </button>
            <div className="pass p-5 text-center">
                <input type="password" className="p-3 mb-3" id="input" onChange={input} /> {natija} <br />
                <button className="me-3" onClick={check}>Check</button>
                <button className={next}>
                    <Link href='/myletter' className='parol'>Next</Link>
                </button>
            </div>
        </div >
    )
}

export default Parol
