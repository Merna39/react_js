
import { Box,Container,Typography } from '@mui/material';
import{useEffect} from 'react';
import  {ThemeProvider} from '@mui/system';
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';
import Promotions from "./components/promotions";
import Products from "./components/products";



function App() {

  useEffect(() => {
    document.title ="React Material UI - Home";
  

  }, []);
  return (
    <ThemeProvider theme={theme}>
         <Container  disableGutters  maxWidth="xl"  sx={{  background: "#fff",}} >
      

<<<<<<< HEAD
  <Appbar></Appbar>
  <Banner></Banner>

=======
  <Appbar />
  <Banner/>
           <Promotions/>
  <Box disply="flex" justifyContent={"center"} sx={{p:4}} >
     <Typography variant = "h4">Our Products </Typography>
  </Box>
  <Products/>
  
>>>>>>> e3d6dbd06c7f6be390c408fe5d1261713da1ed82
  </Container>
  </ThemeProvider>
  );
  
}

export default App;
