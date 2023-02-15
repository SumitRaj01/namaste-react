import React from "react";
class Profile extends React.Component{

    constructor(props){
        super(props);
        //Create State
        this.state={
            userInfo:{
                name:"Dummy Name",
                location:"Dummy Location",
            },
        }
        // console.log("Child-Constructor "+ this.props.name)
    }

     componentDidMount(){
        // API Calls
        // const data= await fetch("  https://api.github.com/users/akshaymarch7")
        // const json=await data.json();
        // console.log(json);
        // this.setState({
        //     userInfo:json,
        // })
        // console.log("Child- componentDidMount "+ this.props.name)
        this.timer=setInterval(()=>{
            console.log("NAMASTE REACT OP")
        },1000)
        // console.log("Child- componentDidMount");
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count!=prevState.count){
            //code
        }

        if(this.state.count2!=prevState.count2){
            //code
        }

        console.log("Component Did Update")
    }
    componentWillUnmount(){
        clearInterval(this.timer);
        // console.log("ComponentWillUnmount")
    }

render(){
    // console.log("Child-render "+ this.props.name)
    return(
        <div>
            <h1>Profile Class Component</h1>
            <img src={this.state.userInfo.avatar_url} alt="" />
            <h2>Name: {this.state.userInfo.name}</h2>
            <h2>Location: {this.state.userInfo.location}</h2>
            {/* <button onClick={()=>{
                //WE DO NOT MUTATE STATE DIRECTLY
                // Never do this.state=something
                this.setState({
                    count2:1,
                })
            }}>SetCount</button> */}
        </div>
    )
}
}
/**
 * Child Constructor
 * Child render
 * child componentDidMount
 * 
 * API call
 * Set State 
 * 
 * <UPDATE CYCLES>
 * render
 * 
 *  
 */





export default Profile;