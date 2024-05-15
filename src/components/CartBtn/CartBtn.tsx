import { useContext } from "react";
import AppContext from "../../context/AppContext";

import { FaCartShopping } from "react-icons/fa6";
import './CartBtn.css'

function CartBtn(){

  const {openCart, setOpenCart, cartItems}:any = useContext(AppContext)

  function toggleOpenCart(){
    setOpenCart(openCart ? false : true)
  }

  return(
    <button onClick={toggleOpenCart} className="header-cart-button">
      {cartItems.length > 0 &&
        <div className="cart-amount-items">{cartItems.length}</div>
      }
      
      <FaCartShopping className="cart-button-icon" />
    </button>
  )
}

export default CartBtn;