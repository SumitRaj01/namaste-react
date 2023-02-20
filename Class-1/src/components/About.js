import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from './Profile'
import Profile from "./ProfileClass";
import { Component } from "react";
// const About=()=>{
//     return(
//         <div>
//             <h1>About us Page</h1>
//             <p>This is the Namaste React Live Course Chapter 07- Finding the Path 🚀 </p>
//             {/* <Outlet/> */}
//             <ProfileFunctionalComponent name={"Akshay"}/>
//             <Profile name={"AkshayClass"}/>
//         </div>
//     )
// }

class About extends Component{
    constructor(props){
        super(props);
        
        // console.log("Parent-constructor")
    }
    componentDidMount(){
        //Best place to make an API call
        // console.log("Parent-componentDidMount")	
    }
    render(){
        // console.log("Parent-render");
        return(
            <div>
                <h1>About us Page</h1>
                <p>This is the Namaste React Live Course Chapter 07- Finding the Path 🚀 </p>
                {/* <Outlet/> */}
                {/* <ProfileFunctionalComponent name={"Akshay"}/> */}
                <Profile />
                {/* <Profile name={"Second Child"}/> */}
            </div>
        );
    }
}
export default About;

/**
 * Parent Constructor
 * Parent Render
 *    First Child- Constructor
 *    First Child- Render
 *    Second Child- COnstructor
 *    Second Child- Render
 * 
 *    DOM UPDATED for Children
 * 
 *    First Child- componentDidMount
 *    Second Child- componentDidMount
 * 
 * Parent- componentDidMount
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  */ 