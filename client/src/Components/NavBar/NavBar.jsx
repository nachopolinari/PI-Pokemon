import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={style.navBarContainer}>
            <Link to="/home">Voy a Home</Link>
            <Link to="/form">Voy a Form</Link>
        </div>
    )
};
export default NavBar;