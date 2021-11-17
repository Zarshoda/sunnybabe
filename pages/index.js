import styles from '../styles/Home.module.css'
import { Link } from "@material-ui/core";

export default function Home() {
  return (
    <div className='home'>
      <h1 className="text">For Di...</h1>
      <button className="btn">
        <Link href="/home">
          Click there :)
        </Link>
      </button>
    </div >
  )
}
