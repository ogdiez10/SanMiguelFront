import './GetProduct.css';
import { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

/*
const api = new WooCommerceRestApi({
  url: "http://localhost:8888/SanMiguel/",
  consumerKey: "ck_88815e685d81df8deae185cbf4f6a6328dbf6dfa",
  consumerSecret: "cs_db0f1127e1628cfee5d1288a831641251b28e969",
  version: "wc/v3"
});


const GetProduct = (props) => {

  let productSku = props.sku;  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = () => {
    api
      .get("products/", {
        per_page: 20,
        sku: productSku
      })
      .then((response) => {
        if (response.status === 200) {
          setProducts(response.data);
        }
      })
      .catch((error) => {});
  };

  return (
    <div className='productQuickView'>{JSON.stringify(products)}</div>
  );

  };

export default GetProduct;
*/