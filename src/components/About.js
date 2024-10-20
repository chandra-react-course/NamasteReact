import UserContext from "../utils/userContext";
import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
    };
    render(){
        return (
            <div className="p-4">
                <h1>About</h1>
                <h2>This is Food Delivery Web Application... </h2>
                <div>Logined User: 
                    <UserContext.Consumer>
                        {({lognedInUser}) => <h1>{lognedInUser}</h1> }
                    </UserContext.Consumer>
                </div>
                <UserClass name ={"second: sekhar"}/>
            </div>
        );
    }

}
// const About = ()=>{
//     return (
//         <div className="about-main">
//             <h1>About</h1>
//             <h2>This is Food Delivery Web Application... </h2>
//             <User/>
//             <UserClass name ={"chandrasekhar"}/>
//         </div>
//     );
// };

export default About;