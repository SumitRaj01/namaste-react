import { useState } from "react";
import Logo from '../assets/img/foodvilla.png';
import { Link } from "react-router-dom";
const loggedInUser=()=>{
  //API call to check authentication
  return false;
}

//SPA Single Page Application
//Client Side Routing

const Title = () => (

    <a href="/">
      <img className="logo" 
      // src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" alt="logo" />
    src={Logo} alt="logo"/>
        </a>
  );

  const Header = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            
            <li><Link to="/">Home </Link></li>
           
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
            <li>Cart</li>
          </ul>
        </div>
        {
          isLoggedIn?(<button onClick={()=>setIsLoggedIn
          (false)}>Logout</button>):(<button onClick={()=>setIsLoggedIn
          (true)}>Login</button>)
        }
      </div>
    )
  };
  
  export default Header;