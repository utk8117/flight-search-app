import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/SearchComponent.css';

const SearchComponent = ({options, placeholder, onSearch, id}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    
  const handleChange = (selectedOption) => {
      setSelectedOption(selectedOption);
      onSearch(selectedOption.value)
    console.log(`Option selected:`, selectedOption);
  };

    return (
        <div className='search-wrapper'>
            <Select
                id={id}
                value={selectedOption}
                onChange={handleChange}
                options={options}
                placeholder={placeholder}
            />
        </div>
    );
}

export default SearchComponent;