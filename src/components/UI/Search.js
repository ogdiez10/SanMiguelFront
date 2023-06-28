import TextField from '@mui/material/TextField';

const Search = () => {

    return (

        <div className="searchBar">
            <form id="searchForm">
                <TextField fullWidth id="searching" label="Buscar..." variant="filled"  sx={{ mb: 10 }}  />
            </form>
        </div>
    )


}

export default Search;