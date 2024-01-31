import React, { useContext, useState } from "react";

import { IoIosSearch } from "react-icons/io";

import "./SearchBar.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue("");
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
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
