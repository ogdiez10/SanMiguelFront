import './App.css';
import '@fontsource/outfit/300.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/700.css';
import { createTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';


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
      <h1>Hello</h1>
      <Button variant="contained">Click me please</Button>
    </div>
    </ThemeProvider>
  );
}

export default App;
