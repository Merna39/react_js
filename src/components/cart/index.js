import {  Drawer } from "@mui/material" ;
import { useUIContext } from "../../context/Ui";
import { Colors } from "../../styles/theme" ;

export default function Cart() {

    const  { cart , showCart  }  = useUIContext() ;
    
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