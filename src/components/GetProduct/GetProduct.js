import './GetProduct.css';
import { useEffect, useState } from 'react';


const GetProduct = (props) => {

  const [data, setData] = useState(null);
  const headers = { 'Content-Type': 'application/json',
  'Consumer-Key': 'ck_88815e685d81df8deae185cbf4f6a6328dbf6dfa',
  'Consumer-Secret': 'cs_db0f1127e1628cfee5d1288a831641251b28e969',
   };
  let searchProduct = props.productID;
  

  useEffect(() => {
    fetch('http://localhost:8888/SanMiguel/wp-json/wc/v3/products/', {headers} )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='GetProduct'>
    http://localhost:8888/SanMiguel/wp-json/wc/v3/products/{searchProduct}
    {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );



 
  };

export default GetProduct;
