import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { getPokemonID } from '../../Redux/actions'; // Importa getPokemonID desde tus acciones


const NavBar = () => {
    const dispatch = useDispatch();

    const onSearch = (value, type) => {
        dispatch(getPokemonID(value, type));
    };

    return (
        <div className={style.navBarContainer}>
            <div className={style.navBarDiv}>
                <Link to="/home">Voy a Home</Link>
                <Link to="/form">Voy a Form</Link>
            </div>
            <div className={style.navBarDiv}>>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    );
};

export default NavBar;


// const NavBar = () => {

//     const dispatch = useDispatch();


//     useEffect(() =>{
// dispatch(getPokemonID(id))
//     },[]);
//     return (
//         <div className={style.navBarContainer}>
//             <Link to="/home">Voy a Home</Link>
//             <Link to="/form">Voy a Form</Link>
//             <SearchBar />
//         </div>
//     )
// };
// export default NavBar;