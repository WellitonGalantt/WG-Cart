import { IoMdSearch } from 'react-icons/io';
import './SearchBar.css'

import { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import fetchSearchProducts from '../../api/fetchProducts';

function SearchBar(){

  const [searchValue, updtsearchValue] = useState<string>('');
  //pegando os valores do context
  const { SetItemsSearch, setLoading }:any = useContext(AppContext);

  async function setSearhValue(e:any){
    //quando enviar o formulario ira mostrar um icon de carregamento
    //ate carregar os itens;
    setLoading(true);
    e.preventDefault();

    //retorna os itens da busca em JSON usando uma funcao para isso;
    const items = await fetchSearchProducts(searchValue);

    await SetItemsSearch(items);
    setLoading(false);
    updtsearchValue('');
  }

  return(
    <form 
    className="search-bar-form"
    onSubmit={(e)=>{setSearhValue(e)}}
    >
      <input
        onChange={(e:any)=>{updtsearchValue(e.target.value)}}
        className="search-bar-input"
        type="search-bar"
        placeholder="Procurando algo?"
        value={searchValue}
        required
      />
      <button className="search-bar-button">
        <IoMdSearch />
      </button>
    </form>
  )
}

export default SearchBar;