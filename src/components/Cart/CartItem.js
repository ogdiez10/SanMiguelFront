import './CartItem.css';
import { TextField } from "@mui/material";


const CarItem = (props) => {

    return(
    <div className='item'>
        <div className='itemName'>{props.name}</div>
        <div className='itemQty'><input className='inputQty' type="number">{props.qty}</input></div>
        <div className='itemPrice'><input className='inputPrice' type="number">{props.price}</input></div>
    </div>
    );

}



export default CarItem;