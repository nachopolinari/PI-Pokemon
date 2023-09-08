import { Link } from 'react-router-dom'
import style from "./Landing.module.css"
const Landing = () => {
    return (
        <div className={style.landing}>
           
            <Link to='/home'>
                <button className={style.buttonStart}>START</button>
            </Link>
        </div >
    )
};
export default Landing;