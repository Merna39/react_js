import { useTheme } from "@mui/material/styles";
import { Avatar,Divider, Drawer, Paper,Typography ,useMediaQuery ,Button } from "@mui/material";
import { Colors } from "../../styles/theme";
import {useUIContext} from "../../context/Ui";
import {Box} from "@mui/system";

export default function Cart(){


  const [cart,showCart,setShowCart]= useUIContext();
const theme = useTheme();
  const matches = useMediaQuery(theme.breackpoints.down("md"));
const cartContent = cart.map(item=>(
   <Box key={item.id}>

   <Box 
   display = "flex"
   sx={{pt:2,pb:2}}
   alignItems ="start"
   justifyContent={"space-between"}>
    <Avatar src={item.image} sx={{width: 96, height: 96 , mr:2}} />
    <Box display="flex" flexDirection={"column"}>
      <Typorgraphy variant="h6">{item.name}</Typorgraphy>
     {!matches && <Typorgraphy variant="subtitle2">{item.description}</Typorgraphy>}
   
   </Box>
   <Typorgraphy variant="body1" justifyContext={"end"}>
      ${item.price}
   </Typorgraphy>
   </Box>
   {matches && <Typorgraphy variant="subtitle2">{item.description}</Typorgraphy>}
   <Divider variant="inset" />
   </Box>
   
));
   

  return(
    <Drawer 
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx:{
          width: matches ? '100%' :500,
          background:Colors.light_gray,
           borderRaduis:0

        },
      }}
      >
          
          {cart.length > 0 ? 

        <Box
        sx={{p: 4}}
        display="flex"
        justifyContent={"center"}
        flexDirection="column"
        alignItems="center"
        >
          <Typorgraphy variant="h3" color={Colors.black}>
            your cart
          </Typorgraphy>
           <Typorgraphy variant="h3" color={Colors.black}>
            {" "}
          </Typorgraphy>

            <Paper  
                  elevation={0}
                  sx={{
                    mt: 2,
                    width: '90%',
                    padding: 4,

                  }}
                  >
               {cartContent}
            </Paper>
            <Button sx={{ mt: 4}} variant="contained">
              proceed to payment
            </Button>
      

        </Box> 
        ): (
        <Box
        sx={{p: 4,
        }}
        display="flex"
        justifyContent={"center"}
        flexDirection="column"
        alignItems="center" 
            >
                 <Typography variant={matches ? "h5" : "h3"} color={Colors.black}></Typography>
                     your cart  is empty!
          </Box>
          )}
  
             <Button onClick={() => setShowCart(false)}>Close</Button>
    
    </Drawer>
  );
}
