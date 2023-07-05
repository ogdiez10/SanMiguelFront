import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: "http://localhost:8888/SanMiguel/",
  consumerKey: "ck_88815e685d81df8deae185cbf4f6a6328dbf6dfa",
  consumerSecret: "cs_db0f1127e1628cfee5d1288a831641251b28e969",
  version: "wp/v2",
});

const SearchProductAPI = (event) => {

  //event.preventDefault();
  console.log("X003R979A1");
  //let productSku = props.sku;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = () => {
    api
      .get("search/", {
        subtype: 'product',
        search: 'coca',
        per_page: 10
      })
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
        }
      })
      .catch((error) => {});
  };
  console.log(products);
};

const Search = (props) => {


  //this.handleChange = this.handleChange.bind(this);
  //this.handleSubmit = this.handleSubmit.bind(this);

  return (
    <div className="searchBar">
      <form id="searchForm" onSubmit={SearchProductAPI()}>
        <TextField
          fullWidth
          id="searching"
          label="Buscar..."
          variant="filled"
          sx={{ mb: 10 }} 
        
        />
      </form>
    </div>
  );
};

export default Search;
