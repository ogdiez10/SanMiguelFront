import './CartItem.css';
import { TextField } from "@mui/material";
import SearchProduct from '../Search/SearchProduct';
const CarItem = (props) => {

    return(
    <div className='item'>
        <div className='itemName'>{props.name}</div>
        <div className='itemQty'><input className='inputQty' type="number" value={props.qty}></input></div>
        <div className='itemPrice'>{props.price}</div>
    </div>
    );

}



export default CarItem;