import './App.css';
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/700.css';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Nav from './components/UI/Nav';
import Content from './components/UI/Content';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



const theme = createTheme({
  typography: {
    fontFamily: [
      'Outfit'
    ],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
          <Nav></Nav>
          </Grid>
          <Grid item xs={9}>
          <Content></Content>
          </Grid>
        </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
