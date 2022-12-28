import {  Drawer , useMediaQuery } from "@mui/material" ;
import { useUIContext } from "../../context/Ui";
import { Colors } from "../../styles/theme" ;
import { useTheme } from "@mui/material/styles"

export default function Cart() {

    const [ cart , showCart , setShowCart ]= useUIContext() ;
    const theme = useTheme() ;
    const matches = useMediaQuery(theme.breakpoints.down("md"));) ;
    
    return (
        <Drawer 
            open= {true}
            anchor= "right"
            PaperProps={{
                sx: {
                    width: 500 ,
                    background: Colors.light_gray ,
                    borderRadius: 0
                }
            }}
        >
            <h1>
                My Cart 
            </h1>    
        </Drawer>
    ) ;
}
