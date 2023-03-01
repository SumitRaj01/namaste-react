import { useState, useContext } from "react";
import Logo from '../assets/img/foodvilla.png';
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const loggedInUser=()=>{
  //API call to check authentication
  return false;
}

//SPA Single Page Application
//Client Side Routing

const Title = () => (

    <a href="/">
      <img 
      // className="logo"
      className="h-28 p-2" 
      // src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="logo" />
    src={Logo} alt="logo"/>
        </a>
  );

  const Header = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    
    const isOnline=useOnline();

    const {user}=useContext(UserContext);

    const cartItems=useSelector(store=>store.cart.items);
    console.log(cartItems);
    return (
      <div 
      // className="header"
      className="flex justify-between bg-pink-50 shadow-lg" 
      // sm:bg-blue-50
      >
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
            
            <li className="px-2"><Link to="/">Home </Link></li>
           
            <Link to="/about">
            <li className="px-2">About</li>
            </Link>

            <Link to="/contact">
            <li className="px-2">Contact</li>
            </Link>

            <Link to="/instamart">
            <li className="px-2">Instamart</li>
            </Link>

            <Link to="/cart">
            <li className="px-2">Cart- {cartItems.length} items</li>
            </Link>

          </ul>
        </div>
        <h1>{isOnline?'✔':'🛑'}</h1>
        <span className="p-10 font-bold text-red-900" >{user.name}</span> 
        {
          isLoggedIn?(<button onClick={()=>setIsLoggedIn
          (false)}>Logout</button>):(<button onClick={()=>setIsLoggedIn
          (true)}>Login</button>)
        }
      </div>
    )
  };
  
  export default Header;