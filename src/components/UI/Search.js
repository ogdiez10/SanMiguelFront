import TextField from "@mui/material/TextField";
import { useState } from "react";
import SearchProduct from "../Search/SearchProduct";

const Search = (props) => {

  const [enteredSearch, setEnteredSearch] =  useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    SearchProduct(enteredSearch);
  };

  const searchingChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  }


  return (
    <div className="searchBar">
      <form id="searchForm" onSubmit={submitHandler}>
        <TextField
          fullWidth
          id="searching"
          label="Buscar..."
          variant="filled"
          sx={{ mb: 10 }} 
          onChange={searchingChangeHandler}
        />
      </form>
    </div>
  );
  
};

export default Search;