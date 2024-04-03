import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbarl=()=>{
   
    const btnRef = useRef(null); // Create a ref for the button
    const menuRef = useRef(null); // Create a ref for the menu
  
    const handleMenuToggle = () => {
      const menu = menuRef.current;
      if (menu) {
        menu.classList.toggle("hidden");
      } else {
        console.error('Menu element not found');
      }
    };

    return(
        <>
        <nav className="  pt-5 pb-5">
        <div className="  mx-auto ">
         <div className="flex justify-between">
        <div className="flex space-x-4 ">
        <div className=""><img src="./Logo.svg" alt="Logo" /></div>
        <div className="hidden md:flex md:space-x-2" >
        <Link to = '/'> <a href="https://main--yelpcampcodewithomali.netlify.app/" className="hover:text-gray-600">Home</a></Link>
        </div>
        </div>
        <div className=" hidden  md:flex md:space-x-2">
        <Link to = '/Signin'> <a href="http://localhost:5173/Signin"className="hover:text-gray-600">johndoe</a></Link>
            <a href="http://localhost:5173/Signup" className="hover:text-gray-600 bg-black text-white">Logout</a>
         
        </div>
        <div className="md:hidden flex items-center">
          <button ref={btnRef} className="  mobile-menu-button" onClick={handleMenuToggle}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" fill="black"/>
</svg>
</button>
        </div>
        </div>
        </div> 
        <div ref={menuRef} className=" md:hidden">
       <Link to = '/Signin'> <a href="#"className=" block py-">Login</a> </Link>   
        <a href="#"className=" block py-">Signup</a>   
        </div>  
        </nav>
        </>
    )
}
export default Navbarl;