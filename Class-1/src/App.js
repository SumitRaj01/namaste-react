/* ** PARCEL IS DOING ALL THE THINGS MENTIONED BELOW
*Creates a server 
*HMR: Hot Module Replacement: parcel keeps a track of all the changes made in a file and it tells the server to reload
*File Watcher Algorithm(FWA): Using FWA parcel does HMR. FWA is written in C++
*dist folder: Keeps the file minified for us. When we write npx parcel index.html it just creates faster devdelopment version of our project and serves it on the server. When we write npx parcel build index.html , a production build, it creates a lot of things it will minify your file and it will push this build to dist folder
*BUNDLING
*MINIFY
*Cleaning our code
*Dev and Production Build
*Super fast build algorithm
*Image Optimization
*Caching while development
*Compression
*Compatible with older version of browser
*TO enable HTTPS on dev like npx parcel index.html --https
*manages port number
*Consistent hashing Algorithm
*Zero Config: you dont need a lot of configuration
*Tree Shaking: Removing un-wanted code
*Chunking
*Code Splitting
*Dynamic Bundling
*Lazy Loading
*On Demand Loading
*Dynamic Import
*Tranisitive dependency: We have our package manager which handles and takes care of our transitive dependency of our code
*/



import React, { Children,lazy, Suspense, useState }  from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Body from './components/Body.js'
import Footer from "./components/Footer.js";
// import About from './components/About';
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaturantMenu.js";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";
import {Provider} from "react-redux";
import store from "./utils/store.js";
import Cart from "./components/Cart.js";
// import Instamart from "./components/Instamart.js";
const Instamart=lazy(()=>import("./components/Instamart"));
const About=lazy(()=>import("./components/About"))
//Upon on demand loading => upon render => suspend loading

// const heading = React.createElement(
  //     "h1",
  //     {
    //       id: "title",
//       key:"h1"
//     },
//     "Raj"
//   );
//React.createElement =>Object=>HTML(DOM)

// console.log(heading);
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key:"h2"
//   },
//   "Namaste React"
// );

//JSX =>React.createElement =>Object=>HTML(DOM)



// <div class="header">
//     <h1>Namaste React</h1>
//     <ul>
//       <li>About Us</li>
//       <li>Support</li>
//       <li>Home</li>
//     </ul>
//   </div>

//React Component
// - Functional-NEW
// - Class- Old
//Name of componenent starts with capital letter=It's not mandatory

//Composing Components
 
//config Driven UI




//props-properties
//no key<<<<<<<<<<index key(use only if you dont have anything)<<<<<<unique key(best practice)



const AppLayout = () => {
  const [user,setUser]=useState({
    name:"Namaste React",
    email:"support@namastedev.com",
  });



  return (

    /**
    Header
    |-Logo(title)-Nav Items(Right side)-cart
    Body
    |-Search Bar
    |-Restaurant List-Restaurant card(many cards)-Image-name-rating-Cusines
    Footer  
    |-Links-copyrights
    */

    //React.Fragment
    //jsx - one paren
    // <React.Fragment>
    <Provider store={store}>
    <UserContext.Provider 
      value={{
      user:user,
      setUser:setUser,
    }}
    >
      <Header />
      {/* <About/> //if path is /about
      <Body /> //if path is /
      <Contact/> // if path is /contact */}
      {/* {outlet} */}
      <Outlet/>
      <Footer />
    {/* // </React.Fragment> */}
    </UserContext.Provider>
    </Provider>
  );
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about", //parentPath/{path} => localhost:1234/about/about
        element:(
          <Suspense fallback={<h1>Loading...</h1>}>
          	<About/>,
          </Suspense>
        ),
        children:[{
          path:"profile", // parentPath/{path} => localhost:1234/about/profile
          element: <Profile/>
        }]
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/instamart",
        element:
        (
        <Suspense fallback={<Shimmer></Shimmer>}>
        <Instamart/>,
        </Suspense>
        )
      },
      {
        path:"/cart",
        element:<Cart/>,
      }
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root

root.render(<RouterProvider router={appRouter}/>);

/**
 * AppLayout
 *   (state=user)
 *      -<Body user={user}/>
 *         -RestaurantContainer user=>
 *           -RestaurantCard user={user}
 *             -<h4>{user}</h4>    
 * 
 * PROPS DRILLING 
 */


 