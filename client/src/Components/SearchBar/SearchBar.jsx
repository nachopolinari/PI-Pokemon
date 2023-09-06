import style from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <div className={style.SearchBar}>
            <input type="text" />
            <button>Buscar</button>
        </div>
    )
};
export default SearchBar;