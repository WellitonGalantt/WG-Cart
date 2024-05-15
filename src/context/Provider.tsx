import fetchSearchProducts from "../api/fetchProducts";
import AppContext from "./AppContext";
import { useEffect, useState } from "react";

function Provider({ children }:any){

  //todo: Sao como variaveis globais podendo ser importadas
  //todo: entre os componentes filhos do Contexto Pai
  const [itemsSearch, SetItemsSearch] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(false);

  const [openCart, setOpenCart] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<any[]>([])

   const values:any ={
    itemsSearch,
    SetItemsSearch,
    
    loading,
    setLoading,

    openCart,
    setOpenCart,

    cartItems,
    setCartItems
   }

   useEffect(()=>{
    setLoading(true);

    fetchSearchProducts('ihpone').then((e)=>{
      SetItemsSearch(e);
    setLoading(false);
    })
  },[]);

  return(
    <AppContext.Provider value={values}>
      {/*//todo: O context AppContext sera o provedor entre os elementos filhos */}
      {/*//todo: Children sao os elementos filhos que estao dentro do escopo do Provider */}
      {children}

    </AppContext.Provider>
  );
}

export default Provider;