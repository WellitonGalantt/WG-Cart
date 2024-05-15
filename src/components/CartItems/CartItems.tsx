import { useContext } from "react";
import AppContext from "../../context/AppContext";

import Items from "./items/items";

import './CartItems.css'
import formatCurrency from "../../utils/formatCurrency";

function CartItems(){

  const {openCart, cartItems}:any = useContext(AppContext);

  //preco total que usa o metodo reduce que acumula valores
  const totalPrice = cartItems.reduce((acc:number, item:any)=> acc + (+item.price* +item.count), 0).toFixed(2)

  return(
    <>
    {openCart && 
      <div className="cart-items-box-todo">
        {cartItems.length > 0 &&
          cartItems.map((e:any)=> <Items key={e.id} item={e}/>)
            ||
          <span>Nada no Carrinho ainda</span>
        }
        <div className="resume-cart-items">
          <p>Resumo do carrinho</p>
          <p>Total: {formatCurrency(totalPrice, 'BRL')}</p>
        </div>
      </div>
      
    }
    </>
  )
}

export default CartItems;