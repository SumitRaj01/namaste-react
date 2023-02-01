import { useState } from "react";
import { restaurantList } from "../contants";
import RestaurantCard from "./RestaurantCard";

//What is state?
//What is React Hooks? -Functions
//What is useState?

function filterData(searchText,restaurants){
    const filterData= restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText));
    return filterData;
}
 
const Body = () => {
    // const searchTxt="KFC";

    //SearchText is a local state variable
    const [restaurants, setRestaurants] = useState(restaurantList);

    const [searchText, setSearchText] = useState("");	//To create state variable, returns=[variable name, function to update the variable]



    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText}
                    onChange={(e) => {
                        // e.target.value => whatever you write in input
                        setSearchText(e.target.value);
                    }}
                />
                <button className="search-btn" onClick={() => {

                    //need to filter the data
                    const data=filterData(searchText,restaurants);
                    //update the state-restaurants
                    setRestaurants(data);
                }
                }>Search</button>
            </div>
            <div className="restaurant-list">
                {
                    restaurants.map(restaurant => {
                        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
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