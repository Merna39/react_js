
import { Container } from '@mui/material';
import{useEffect} from 'react';
import  {ThemeProvider} from '@mui/system';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';


function App() {

  useEffect(() => {
    document.title ="React Material UI - Home";
  

  }, []);
  return (
    <ThemeProvider theme={theme}>
         <Container  disableGutters  maxWidth="xl"  sx={{  background: "#fff",}} >
      

  <Appbar></Appbar>
  <Banner></Banner>

  </Container>
  </ThemeProvider>
  );
  
}

export default App;
