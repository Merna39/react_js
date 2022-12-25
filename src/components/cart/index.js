import { useTheme } from "@mui/material/styles";
import { Drawer, useMediaQuery } from "@mui/material";
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
   justifyContext={"space-between"}
   >
   </Box>
   </Box>
))
   

  return(
    <Drawer 
      open={showCart}
      anchor="right"
      PaperProps={{
        sx:{
          width:500,
          background:Colors.light_gray,
           borderRaduis:0

        }
      }}
      >
  
    {cartContent}
    </Drawer>
  )
}