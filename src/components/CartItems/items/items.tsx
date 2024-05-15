import { useContext } from 'react';
import { FaTrash } from 'react-icons/fa'
import AppContext from '../../../context/AppContext';

import formatCurrency from '../../../utils/formatCurrency';

function Items({item}:any){

  const {cartItems, setCartItems}:any = useContext(AppContext);

  const itemsToCart:any[] = cartItems;

  //colocando W.jpg para imagens melhores
  const imageUrl = item.thumbnail.replace(/\w\.jpg/gi , 'W.jpg');
  //formatando o preco para moeda brl com uma funcao para isso;
  const price = formatCurrency(+item.price* +item.count, 'BRL');


  function removeItemCart(){

    itemsToCart.forEach((e:any, i:number)=>{
      //?verifica se o id da lista é igual ao do item atual;
      if(e.id != item.id) return;

      if(item.count > 1){
        //?se o count for masior q 1 ele ira apenas diminuir esse valor;
        e.count = item.count -1;
        setCartItems([...itemsToCart]);
        return;
      }

      if(item.count === 1){
        //?caso seja igual a 1 ira remover esse item do carrinho;
        itemsToCart.splice(i, 1);
        setCartItems([...itemsToCart]);
      }
    })
  }

  return(
    <div className="items-box-cart">
      <img className="image-items-cart" src={imageUrl} alt="item cart image" />
      <div className="description-items-cart">
        <p>{item.title}</p>
      </div>
      <div className="qntd-btn-items-cart">
        <p>qntd: {item.count}</p>
        <p>{price}</p>
        <button onClick={removeItemCart} className='remove-item-cart-btn'><FaTrash className="icon"/></button>
      </div>
    </div>
  )
}

export default Items;