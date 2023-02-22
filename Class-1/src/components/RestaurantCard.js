import { IMG_CDN_URL } from "../contants.js";
const RestaurantCard = ({cloudinaryImageId,name,cuisines,lastMileTravelString}) => {
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
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    )
  }
  export default RestaurantCard;