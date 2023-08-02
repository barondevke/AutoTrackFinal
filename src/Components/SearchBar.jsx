import React, {useState} from "react";

function SearchBar ({ onSearch, onClear}) {

const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleClear = () => {
    onClear();
    setQuery('');
  };

    return (
        <div className="search-bar-containerJk">
        <div id="SearchBarJk" className="search-barJk">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
          />
          <button onClick={handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
          <div className="vertical-lineJk"></div>
          <button className="search-bar-clear-button" onClick={handleClear}>
          <i className="fa-solid fa-broom"></i>
          </button>
        </div>
      </div>
      
    )
}

export default SearchBar ;