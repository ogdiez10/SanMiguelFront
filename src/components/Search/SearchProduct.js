import { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


const SearchProduct = (props) => {

    const searching = props;
    console.log(searching);
  /*
    const api = new WooCommerceRestApi({
      url: "http://localhost:8888/SanMiguel/",
      consumerKey: "ck_88815e685d81df8deae185cbf4f6a6328dbf6dfa",
      consumerSecret: "cs_db0f1127e1628cfee5d1288a831641251b28e969",
      version: "wp/v2",
    });
    
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
      console.log(products); */
    };

    export default SearchProduct;