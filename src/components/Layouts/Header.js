import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropdownLogout, DropdownLogin } from "../index";
import { useCart } from "../../context";
import Logo  from "../../assets/logo.png";

export const Header = () => {
    const { cartList }= useCart();
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
    const [searchSection, setSearchSection] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"));

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
        
        if(darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode])


  return (
      <header>

          <nav className="bg-white border-gray-200 dark:bg-gray-900">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                      <img src={Logo} className="h-14 w-auto" alt="PawPalace Logo" />
                      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Paw Palace</span>
                  </Link>
                  <div className="flex items-center relative">
                     <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                     <span onClick={() => setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                     <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                        <span className="text-2xl bi bi-cart-fill relative">
                            <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">{cartList.length}</span>
                        </span>
                     </Link>                  
                     <span onClick={() => setDropdown(!dropdown)} className="cursor-pointer text-2xl text-gray-700 dark:text-white mr-5 bi bi-person-circle"></span>
                     { dropdown && ( token ? <DropdownLogin setDropdown={setDropdown} /> : <DropdownLogout setDropdown={setDropdown}/> ) }
                  </div>
              </div>
          </nav>
          { searchSection && <Search setSearchSection={setSearchSection} /> }
                
  </header>
  )
}
