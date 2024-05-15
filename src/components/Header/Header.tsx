import { FaCartShopping } from "react-icons/fa6";

import SearchBar from "../SearchBar/SearchBar";
import CartBtn from '../CartBtn/CartBtn'
import "./Header.css"

function Header(){
  return(
    <>
      <header>
        <div className="header-contents-box container">
          <span className="logo-wg-cart-header">
            WG Cart <FaCartShopping />
          </span>
          <SearchBar />
          <CartBtn/>
        </div>
      </header>
    </>
  )
}

export default Header;