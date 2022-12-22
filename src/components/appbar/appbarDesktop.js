import{ListItemButton, ListItemIcon, ListItemText} from  "@mui/material";
import { AppbarContainer,AppbarHeader,MyList} from "../../styles/appbar"
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {  

return(
// list

 <AppbarContainer>
   <AppbarHeader>Glitter</AppbarHeader>
   <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Contact us" />
         
         <ListItemButton>
          <ListItemIcon>
            <SearchIcon></SearchIcon>
          </ListItemIcon>
         </ListItemButton>
          </MyList>

          <Actions matches={matches}></Actions>

 </AppbarContainer>

);
}