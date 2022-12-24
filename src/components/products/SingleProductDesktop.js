import {Stack} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Product, ProductActionButton,
         ProductActionWrapper, ProductFavButton,
         ProductImage, ProductAddToCart } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon  from "@mui/icons-material/FitScreen";
import { useState } from "react";

export default function SingleProductDesktop({product,matches}){

     const [showOptions, setShowOptions] = useState(false);

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

              {showOptions && (
              <ProductAddToCart show={showOptions} variant="contined">
              Add to Cart
              </ProductAddToCart>
              )}
              
        
        <ProductActionWrapper show ={showOptions}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="primary"/>
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary"/>
            </ProductActionButton>   
          </Stack>
        </ProductActionWrapper>
    </Product>
       <ProductMeta product={product} matches={matches}/>
      </>
    );
}