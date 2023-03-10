import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { IconButton } from "@mui/material";
import { useUIContext } from "../../context/Ui";

export default function AppbarMobile({ matches }) {

  const { setDrawerOpen, setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <IconButton onClick={() => setDrawerOpen(true)} >
        <MenuIcon />
      </IconButton>
      <AppbarHeader 
      textAlign={"center"} variant="h5" 
      sx={{
        color:"#d03e71"
      }}
        > Glitter</AppbarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
