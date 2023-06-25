import GetProduct from "../GetProduct/GetProduct";

const Content = (props) => {
    
    return(
    <div className="cotent">
    <h1>Nueva compra</h1>
    <GetProduct sku="X003R979A1"></GetProduct>
    </div>
    );

}

export default Content;