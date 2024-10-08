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