import { Divider,ListItemButton, ListItemIcon } from "@mui/material";
import { MyList ,ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonalIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/theme";

export default function Actions({matches}) {

  const { cart, setShowCart } = useUIContext();

  const Component = matches 
  ? ActionIconsContainerMobile
  : ActionIconsContainerDesktop;

  return(

<Component>
    <MyList type="row">

      {/* ShoppingCartIcon */}
      <ListItemButton
       sx={{
        justifyContent:"center",
       }}
      >
        <ListItemIcon
         sx={{
          display:"flex",
          justifyContent:"center",
          color:matches && Colors.light,
         }}
        >
          <Badge badgeContent={cart && cart.length} color="secondary">
           <ShoppingCartIcon onClick={() => setShowCart(true)}  />
          </Badge>
         
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation = "vertical" flexItem />


      {/* PersonalIcon */}
      <ListItemButton
       sx={{
        justifyContent:"center",
        
       }}
      >
        <ListItemIcon
        sx={{
          display:"flex",
          justifyContent:"center",
          color:matches && Colors.light,
         }}
        >
          <PersonalIcon></PersonalIcon>
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation = "vertical" flexItem />

      {/* FavoriteIcon */}
      <ListItemButton
       sx={{
        justifyContent:"center",
       }}
      >
        <ListItemIcon
        sx={{
          display:"flex",
          justifyContent:"center",
          color:matches && Colors.light
         }}
        >
          <FavoriteIcon></FavoriteIcon>
        </ListItemIcon>
      </ListItemButton>
      <Divider orientation = "vertical" flexItem />

    </MyList>
    </Component>
  )


}
