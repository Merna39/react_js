
import { Button } from '@mui/material';
import{useEffect} from 'react';
import  {ThemeProvider} from '@mui/system';
import theme from './styles/theme';

function App() {

  useEffect(() => {
    document.title ="React Material UI - Home";
  

  }, []);
  return (
    <ThemeProvider theme={theme}>
  <>
  <Button> test</Button>
  </>

  </ThemeProvider>
  );
  
}

export default App;
