import "../styles/SearchComponent.css";

const Search = ({ placeholder, onSearch, id }) => {
    return (
        <div className="search-wrapper">
            <input type={'text'} placeholder={placeholder} id={id} className="input-text" onChange={onSearch}/>
        </div>
    )
}

export default Search;