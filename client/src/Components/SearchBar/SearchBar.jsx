import style from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    
    const handleSearch = () => {
        onSearch(searchValue);
        setSearchValue('');
    };

    return (
        <div className={style.SearchBar}>
            <input className={style.input}
                type='search'
                value={searchValue}
                onChange={handleInputChange}
                placeholder=' Name or ID'
            />
            <button onClick={handleSearch}>Buscar</button>

        </div>
    );
};

export default SearchBar;
