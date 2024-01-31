import React, { useState } from "react";

import { IoIosSearch } from "react-icons/io";

import "./SearchBar.css";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="search-bar">
      <input
        type="search"
        placeholder="Buscar produtos"
        className="search-input"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        required
      />

      <button type="submit" className="search-button">
        <IoIosSearch />
      </button>
    </form>
  );
}

export default SearchBar;
