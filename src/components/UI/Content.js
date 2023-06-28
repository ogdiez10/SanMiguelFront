import GetProduct from "../GetProduct/GetProduct";
import Cart from "../Cart/Cart";
import Search from "./Search";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Content = (props) => {
    
    return(
    <div className="cotent">
    <Grid container spacing={0}>
          <Grid item xs={8}>
          <h2 align="left">Nueva orden</h2>
          <Search></Search>
          <Cart></Cart>
          </Grid>
          <Grid item xs={4}>
            <h3>Resumen</h3>
          </Grid>
        </Grid>
    <GetProduct sku="X003R979A1"></GetProduct>
    </div>
    );

}

export default Content;