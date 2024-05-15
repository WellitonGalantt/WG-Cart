import { useContext } from "react";
import './SearchBoxItems.css';

import Loading from '../Loading/Loading';

import BoxItems from "../BoxItems/BoxItems";
import AppContext from "../../context/AppContext";

function SearchBoxItems(){

  const {loading, itemsSearch}:any = useContext(AppContext);

  return(
    
    <>
      {loading && <Loading /> || 
        itemsSearch.length > 0 &&
      <div className="search-box-items container">

       {itemsSearch.map((e:any)=><BoxItems key={e.id} item={e}/>)}
       
      </div>
      }
    </>
  )
}

export default SearchBoxItems;