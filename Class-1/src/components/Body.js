import { useState, useEffect, useContext } from "react";
import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline"
import UserContext from "../utils/UserContext";
//What is state?
//What is React Hooks? -Functions
//What is useState?
 
const Body = () => {
    // const searchTxt="KFC";
    
    //SearchText is a local state variable
    const  [allRestaurants,setAllRestaurants]=useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");	//To create state variable, returns=[variable name, function to update the variable]
    const {user,setUser}=useContext(UserContext);

    //empty dependency array=>once after render
    // dep array [searchText]=>once after initial render+everytime after rerender when my search text changes
    useEffect(()=>{
        //API call
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        // console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }

    console.log("render");

    //Conditional Rendering
    //if restaurant is empty => shimmer UI
    //if restaurant has data => actual data UI
    
    const isOnline=useOnline();

    // if(!isOnline){
    //     return <h1>🛑Offline, Please check your internet connection!!</h1>
    // }


    //not render component (Early return)
    if(!allRestaurants) return null;
    
    // if(filteredRestaurants?.length===0) return <h1>No Restaurant match your Filter!!</h1>



    return (allRestaurants?.length===0)?<Shimmer/>: (
        <>
            <div 
            className="search-container p-5 bg-pink-50 my-5">
                <input type="text" 
                // className="search-input"
                className="focus:bg-red-100 p-2 m-2" 
                placeholder="Search" 
                value={searchText}
                onChange={(e) => {
                        // e.target.value => whatever you write in input
                        setSearchText(e.target.value);
                                }}
                />
                <button 
                className="p-2 m-2 bg-purple-600 hover:bg-red-700 text-white rounded-md" //for tailwind suggestion use control + spacebar
                // className="search-btn"
                onClick={() => {
                //need to filter the data
                const data=filterData(searchText,allRestaurants);
                //update the state-restaurants
                setFilteredRestaurants(data);
                }
                }>Search</button>
                <input value={user.name} onChange={
                    e=>setUser({
                        ...user,
                        name:e.target.value
                    })
                } />
                <input value={user.email} onChange={
                    e=>setUser({
                        ...user,
                        email:e.target.value
                    })
                } />
            </div>
            <div 
            // className="restaurant-list"
            className="flex flex-wrap"
            >
            {/* You have to wtite logic for NO restaurant found here */}
                {
                    filteredRestaurants.map(restaurant => {
                        return (
                            <Link to={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data}   />
                            </Link>
                        );
                    })
                }
                {/* <RestaurantCard {...restaurantList[0].data} />
        <RestaurantCard {...restaurantList[1].data} />
        <RestaurantCard {...restaurantList[2].data} />
        <RestaurantCard {...restaurantList[3].data} />
        <RestaurantCard {...restaurantList[4].data} />
        <RestaurantCard {...restaurantList[5].data} />
        <RestaurantCard {...restaurantList[6].data} />
        <RestaurantCard {...restaurantList[8].data} />
        <RestaurantCard {...restaurantList[9].data} />
        <RestaurantCard {...restaurantList[10].data} /> */}

            </div>
        </>
    )
}
export default Body;