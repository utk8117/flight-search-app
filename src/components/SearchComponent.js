import "../styles/SearchComponent.css";

const Search = ({ placeholder, onSearch }) => {
    return (
        <div className="search-wrapper">
            <input type={'text'} placeholder={placeholder} className="input-text" onChange={onSearch}/>
        </div>
    )
}

export default Search;