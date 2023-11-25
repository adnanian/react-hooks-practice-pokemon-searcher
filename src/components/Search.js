import React from "react";

function Search( {searchText, onFilter} ) {

  return (
    <div className="ui search">
      <div className="ui icon input" >
        <input 
          onChange={(event) => onFilter(event.target.value)}
          className="prompt" 
          type="search" 
          value={searchText} 
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
