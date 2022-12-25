import {Stack} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Product,
   ProductActionButton,
         ProductActionWrapper,
          ProductFavButton,
         ProductImage,
          ProductAddToCart
         } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon  from "@mui/icons-material/FitScreen";
import { useState,useEffect } from "react";

import useDialogModal from "../../hooks/useDialogModal"
import ProductDetail from"../productdetail";

export default function SingleProductDesktop({product,matches}){

     const [showOptions, setShowOptions] = useState(false);
     const [ProductDetailDialog,
      showProductDetailDialog,
      closeProductDetailDialog 
     ]= useDialogModal(ProductDetail);

    //  const{addToCart,addToCartText}= useCart(product);

     const handleMouseEnter =() => {
        setShowOptions(true);
     }

     const handleMouseLeave = () => {
        setShowOptions(false);
     }

    return (
        <>
      
    <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

        <ProductImage src={product.image}/>
            <ProductFavButton isFav={0}>
              <FavoriteIcon/>
            </ProductFavButton>  

            {(showOptions || matches) && (
              <ProductAddToCart 
              show={showOptions} variant="contined">
                Add to cart
            
              </ProductAddToCart>
              )}
              
        
        <ProductActionWrapper show ={showOptions || matches}>
          <Stack direction={matches ? "row" : "column"}>
            <ProductActionButton>
              <ShareIcon color="primary"/>
            </ProductActionButton>
            <ProductActionButton onClick={()=>showProductDetailDialog()}>
              <FitScreenIcon color="primary"/>
            </ProductActionButton>   
          </Stack>
        </ProductActionWrapper>
    </Product>
       
       <ProductMeta product={product} matches={matches}/>
       <ProductDetailDialog product={product} />
      </>
    );
}
