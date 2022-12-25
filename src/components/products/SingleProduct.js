import { useEffect, useState } from "react";
import {Stack , Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Product, ProductActionButton,
         ProductActionWrapper, ProductFavButton,
         ProductImage, ProductAddToCart } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import ShareIcon from "@mui/icons-material/Share";
import  FitScreenIcon  from "@mui/icons-material/FitScreen";

import  useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
export default function SingleProduct({product,matches}){

    const [ProductDetailDialog,showProductDetailDialog,closeProductDetailDialog]
    = useDialogModal(ProductDetail);
 
    // const[addToCart,addToCartText]=useCart(product)
    const [showOptions, setShowOptions] = useState(false);

    const handleMouseEnter = () => {
      setShowOptions(true);
    };
    const handleMouseLeave = () => {
      setShowOptions(false);
    };

    return (
      <>
       
      <Product  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image}/>
        <ProductMeta product={product} matches={matches}/>
        <ProductActionWrapper>
          <Stack direction={matches ? "row" : "column"}>
            <ProductFavButton isFav={0}>
              <FavoriteIcon/>
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary"/>
            </ProductActionButton>
            <ProductActionButton onClick={()=>showProductDetailDialog()}>
              <FitScreenIcon color="primary"/>
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
      <ProductDetailDialog product={product}/>
      </>
    );
}
