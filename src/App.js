
import { Box,Container,Typography } from '@mui/material';
import{useEffect} from 'react';
import  {ThemeProvider} from '@mui/system';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from "./components/promotions";
import Products from "./components/products";import Footer from './components/footer/indes';
import AppDrawer from './components/drawer';
import { UIProvider } from './context/Ui';




function App() {

  useEffect(() => {
    document.title ="React Material UI - Home";
  

  }, []);
  return (
    <ThemeProvider theme={theme}>
         <Container  disableGutters  maxWidth="xl"  sx={{  background: "#fff",}} >
      

  <Appbar />
  <Banner/>
           <Promotions/>
  <Box disply="flex" justifyContent={"center"} sx={{p:4}} >
     <Typography variant = "h4">Our Products </Typography>
  </Box>
  <Products/>
   <Footer />
  <AppDrawer />
  
  </UIProvider>    
  
  </Container>
  </ThemeProvider>
  );
  
}

export default App;
