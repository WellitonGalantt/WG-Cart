import { FaCartPlus } from "react-icons/fa6";
import './BoxItems.css';

import { useContext } from "react";
import AppContext from '../../context/AppContext';

import formatCurrency from "../../utils/formatCurrency";

function BoxItems({item}:any){

  const thumbLink = item.thumbnail;
  const imageUrl = thumbLink.replace(/\w\.jpg/gi , 'W.jpg');

  const priceFormated = formatCurrency(item.price, 'BRL');

  const {cartItems, setCartItems}:any = useContext(AppContext);

  function addItemsToCart(){

    //para n modificar a variavel origiral
    const itemsAddCart = cartItems;
    const itemAddCart = item;

    if(!itemsAddCart.find((e:any)=> e.id === itemAddCart.id)){
      //se nao tiver nenhum item com mesmo id cria uma key count com alor inicial de 1;
      itemAddCart.count = 1;
      //E adiciona o item ja com o count no array de itens do carrinho
      itemsAddCart.push(itemAddCart);
      setCartItems([...itemsAddCart]);
    }else{
      itemsAddCart.forEach((e:any)=>{
        //se ja tiver ira verificar qual elemnto tem o mesmo id
        if(e.id == itemAddCart.id){
          //e ira adiciona mais um a propriedade count
          e.count = e.count + 1;
          setCartItems([...itemsAddCart]);
        }
      }) 
    }
  }

  return(
    <div className="box-product-items">
      <img className="image-product-item" src={imageUrl} alt="products images" />
      <div className="info-product-item-box">
        <p className="title-product-item">{item.title}</p>
        <span className="price-product-item">{priceFormated}</span>
        <button onClick={()=>{addItemsToCart()}} className="btn-add-cart-item"><FaCartPlus className="icon-add-cart-item" /></button>
      </div>
      
    </div>
  )
}

export default BoxItems;