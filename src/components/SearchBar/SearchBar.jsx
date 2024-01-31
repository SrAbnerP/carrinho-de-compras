import React, { useState } from "react";

import { IoIosSearch } from "react-icons/io";

import "./SearchBar.css";
import fetchProducts from "../../api/fetchProducts";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();

    const products = await fetchProducts(searchValue);
    setSearchValue("");
  };

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
