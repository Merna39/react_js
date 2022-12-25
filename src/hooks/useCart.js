import useUIContext from "../context/Ui"


function useCart(products){
  const {cart ,setCart}= useUIContext();
  const addToCart = () =>{
    cart.findIndex (c => c.id !== products.id )>= 0
    ? setCart(cart.filter(c =>c.id !== products.id ))
      :setCart(c=> [...c,products] );

  }
  const addToCartText = cart.findIndex((c)=>c.id === products.id)>= 0
  ?"Remove from cart " : "Add to cart";

  return{addToCart,addToCartText}
}
export default useCart;