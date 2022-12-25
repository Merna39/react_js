import {Stack} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Product, ProductActionButton,
         ProductActionWrapper, ProductFavButton,
         ProductImage, ProductAddToCart } from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import ShareIcon from "@mui/icons-material/Share";
import  FitScreenIcon  from "@mui/icons-material/FitScreen";
import useCart from "../../hooks/useCart";

export default function SingleProduct({product,matches}){

    const [ProductDetailDialog,showProductDetailDialog]//,closeProductDetailDialog
    = useDialogModal(ProductDetail);
    return (
      <>
      <Product>
        <ProductImage src={product.image}/>
        <ProductMeta product={product} matches={matches}/>
        <ProductActionWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <FavoriteIcon/>
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary"/>
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary"/>
            </ProductActionButton>
            
          </Stack>
        </ProductActionWrapper>
      </Product>
<ProductAddToCart variant="contained">Add to cart</ProductAddToCart>
      <ProductDetailDialog product={product}/>
      </>
    )
}
