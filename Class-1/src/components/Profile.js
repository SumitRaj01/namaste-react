import { useEffect, useState } from "react";
const Profile = (props)=>{
    const [count, setCount]=useState(0);
    // console.log("render function");
    useEffect(()=>{
        //API Call
       const timer= setInterval(()=>{
            console.log("NAMASTE REACT OP")
        },1000)
        console.log("useEffect")

        return ()=>{
            clearInterval(timer);
            console.log("useEffect return")
        }
    },[]);
    console.log("render")
    // console.log("render")

    return(
    <div>
        <h2>Profile Component</h2>
        <h3>Name: {props.name}</h3>
        <h3>Count: {count}</h3>
        <button onClick={()=>setCount(1)}>Count</button>
    </div>
)
}
export default Profile;