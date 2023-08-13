import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

//import SearchProduct from "../Search/SearchProduct";

const Search = (props) => {

  const [enteredSearch, setEnteredSearch] =  useState('');
  const [foundProducts, setFoundProduct] =  useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    SearchProduct(enteredSearch);
    console.log(foundProducts);
  };

  const searchingChangeHandler = (event) => {
    setEnteredSearch(event.target.value);
  }


  const SearchProduct = (props) => {
  
    let products = '';
    const searchingString = props;

    const api = new WooCommerceRestApi({
      url: "https://sanmiguel.diez10.mx/",
      consumerKey: "ck_88815e685d81df8deae185cbf4f6a6328dbf6dfa",
      consumerSecret: "cs_db0f1127e1628cfee5d1288a831641251b28e969",
      version: "wp/v2",
      axiosConfig: {
        headers: {}
      }
    });
    

        api
          .get("search/", {
            subtype: 'product',
            search: searchingString,
            per_page: 10
          })
          .then((response) => {
            if (response.status === 200) {
              products = response.data;
              setFoundProduct(products); //Assign value to var
            }
            else { setFoundProduct('Nothing Found'); }
          })
          .catch((error) => { console.log(error) });
  
    }; //SearchProduct




  return (
    <div className="searchBar">
      <form id="searchForm" onSubmit={submitHandler}>
        <TextField
          id="searching"
          label="Buscar..."
          variant="filled"
          sx={{ mb: 10 }} 
          onKeyDown={searchingChangeHandler}
          fullWidth
        />
      </form>
    </div>
  );
  
};




export default Search;



