import { IMG_CDN_URL } from "../contants.js";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
  }) => {
    const {user}=useContext(UserContext);
    // console.log(props);
    // const {cloudinaryImageId,name,cuisines,lastMileTravelString}=restaurant.data
    return (
      <div 
      // className="card"
      className="w-56 p-2 m-2 shadow-lg bg-pink-50"
      >
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString}</h4>
        <h5 className="font-bold">{user.name} - {user.email}</h5>
      </div>
    )
  }
  export default RestaurantCard;