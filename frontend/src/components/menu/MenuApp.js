import React, {useState} from "react"; 
import { FaSearch ,FaFileContract} from "react-icons/fa";
import ModelSearch from "../ModelSearch";
import './menuApp.css'

export default function MenuApp  () {
    const [openPopup, setOpenPopup] = useState(false)
	const [MenuOpen, setMenuOpen] = useState(false);
    return(
        <div role="navigation" className="body header w-full sticky top-0 z-40 " >

        <div className="top-bar w-full h-15 lg:h-12 pl-4 -lg:pr-4 flex bg-dark justify-between">
        
            <div className="right flex flex-auto ml-auto justify-end">
                <div id="search" role="search" className="relative max-w-8 transition-max-w duration-400 ease-in-out flex-1 my-1 flex">
                    <button className="h-5 w-5 m-auto fill-none stroke-current text-light" onClick={() =>setOpenPopup(true)}><FaSearch /></button>
                </div>
            
     
                <div className='menu-icone'  >
              <i className= 'fas fa-bars' onClick={() =>setMenuOpen(true)} />
            </div>
    
            
    
                <div className="header__top-bar-buttons hidden lg:flex items-center">
                    <div className="divider h-7 py-2 ml-7 my-auto w-px inline-block border-l-1p border-r-1p border-grey-4"></div>
                    <a href="/soutien" className="inline-block my-auto px-7 uppercase text-light text-button16 font-semibold tracking-16 hover:text-grey-2" target="_self">
                    SOUTIEN
                    </a>
                    <a href="/contactUs" className="button-primary text-button16 tracking-16" target="_self">
                    Contactez-nous
                    </a>
                </div>
            </div>
        </div>
        <div className="menu-bar hidden lg:flex items-center justify-between h-16 pl-8 pr-6 relative bg-dark"> 
		<a href="/" target="_self" className="block h-8 my-auto">
			<img className=" hidden lg:block" width="95px" height="30px" style={{marginTop:"-40px"}} src="../../img/logo_VICTIS.png" alt="logo"/>
			
		</a>
		<nav className="header-menu list-none h-full" >
        <div className="menu_second-wrap">
        <ul className="menu-item menu-item-L0 pl-2 grid:pl-8 menu-item-has-items inline-block h-full menu_second">
        <li className="menu_second-item">
     
                <a href="#">Pages
              
                </a>
                
                <ul className="drop-menu_second">
                    <li className="drop-menu_second-item">
                        <a href="#">Page 1</a>
                    </li>
                    <li className="drop-menu_second-item">
                        <a href="#">Page 2</a>
                    </li>
                    <li className="drop-menu_second-item">
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li className="menu_second-item">
              <a href="#">aaa</a>
              <ul className="drop-menu_second">
                  <li className="drop-menu_second-item">
                      <a href="#">eded 1</a>
                  </li>
                  <li className="drop-menu_second-item">
                      <a href="#">ddd 2</a>
                  </li>
                  <li className="drop-menu_second-item">
                      <a href="#">Page 3</a>
                  </li>
              </ul>
          </li>
        </ul>
    </div>
    </nav>
    </div>
   </div>
    )
}