import style from './SearchBar.module.css';
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState('name'); // Por defecto, buscar por nombre

    const handleSearchTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchValue, searchType);
    };

    return (
        <div className={style.SearchBar}>
            <input className={style.input}
                type='search'
                value={searchValue}
                onChange={handleInputChange}
                placeholder= ' Name or ID'
            />
            <select className={style.select} onChange={handleSearchTypeChange} value={searchType}>
                <option value="name">Nombre</option>
                <option value="id">ID</option>
            </select>
            
            
            <button onClick={handleSearch}>Buscar</button>
            
        </div>
    );
};

export default SearchBar;

// import style from './SearchBar.module.css';
// import { useState } from 'react';

// const SearchBar = () => {

//     const [id, setId] = useState('');

//     const handleChange = (event) => {
//         setId(event.target.value)
//     };


//     return (
//         <div className={style.SearchBar}>
//             <input type='search' onChange={handleChange} value={id} />
//             <button onClick={() => { onSearch(id) }}>Buscar</button>
//         </div>
//     )
// };
// export default SearchBar;