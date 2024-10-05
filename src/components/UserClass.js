import React from "react";

class UserClass extends React.Component{
    constructor(props){
       super(props);
       this.state ={
        userInfo : {
            user : "dummy",
            location : "loction",
        },
       };
    }
   async componentDidMount(){
    const data = await fetch("https://api.github.com/users/chandrasekhar");
    const json = await data.json();
    console.log(json);
     this.setState ({
        userInfo : json,
     });
   }

   componentDidUpdate(){
    console.log("componentDidUpdate calling..");
   }

   componentWillUnmount(){
    console.log("componentWillUnmount calling..");
   }
   
    render(){
       
        const{name} = this.props;
        return(
        <div className="user-menu">
            <h1>name: {this.state.userInfo.login}</h1>
            <h2>location:  {this.state.userInfo.location}</h2>
            <img src={this.state.userInfo.avatar_url
}></img>
        </div>
        );
    };
};

export default UserClass;