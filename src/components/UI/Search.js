import TextField from '@mui/material/TextField';
import GetProduct from '../GetProduct/GetProduct';

const Search = () => {

    const GetProductAPI = () => {
        console.log('X003R979A1');
    }

    return (

        <div className="searchBar">
            <form id="searchForm" onSubmit={GetProductAPI()}>
                <TextField fullWidth id="searching" label="Buscar..." variant="filled"  sx={{ mb: 10 }}  />
            </form>
        </div>
    )


}

export default Search;