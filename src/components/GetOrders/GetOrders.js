import { useEffect, useState } from "react";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


const api = new WooCommerceRestApi({
  url: "http://localhost:8888/SanMiguel/",
  consumerKey: "ck_88815e685d81df8deae185cbf4f6a6328dbf6dfa",
  consumerSecret: "cs_db0f1127e1628cfee5d1288a831641251b28e969",
  version: "wc/v3"
});


const GetOrders = (props) => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  let fetchOrders = () => {
    api
      .get("orders", {
        per_page: 20,
      })
      .then((response) => {
        if (response.status === 200) {
          setOrders(response.data);
        }
      })
      .catch((error) => {});
  };

  return (
        <div>{JSON.stringify(orders)}</div>
  );

  };

export default GetOrders;
