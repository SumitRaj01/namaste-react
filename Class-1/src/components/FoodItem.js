import { IMG_CDN_URL } from "../contants.js";


const FoodItem = ({
  cloudinaryImageId,
  name,
  description,
  price,
  }) => {
    
    // console.log(props);
    // const {cloudinaryImageId,name,cuisines,lastMileTravelString}=restaurant.data
    return (
      <div 
      // className="card"
      className="w-56 p-2 m-2 shadow-lg bg-pink-50"
      >
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{description}</h3>
        <h4>Rupees: {price/100}</h4>

      </div>
    )
  }
  export default FoodItem;