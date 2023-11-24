import React, { useState } from "react";
import "./searchBar.css";
const SearchBar = (props) => {
 const {value, setValue, handleChange}=props
  return (
    <div className="searchBar">
      <input
        type="text"
        value={value}
        onChange={(e) => {
          handleChange(e);
        }}
        placeholder="Search your Recent Transactions"
      />
    </div>
  );
};

export default SearchBar;
