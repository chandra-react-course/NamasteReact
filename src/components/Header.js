import { useState, useEffect } from "react";
import {APP_LOGO} from "../constants/const";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
   const [loginBtn, setLoginBtn] = useState("Login");
   const onlineStatus = useOnlineStatus();
   useEffect(() => {
}, [loginBtn]);
    return(
        <div className="flex justify-between bg-purple-100 shadow-md">
            <div className="w-28">
                <img className="bg-yellow-50" src={APP_LOGO} alt="FoodDelivery"></img>
            </div>
            <div className="flex items-center">
                <span className="text-5xl text-blue-900">Food Delivery</span>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-2">
                    <li className="px-4">Online Status: {onlineStatus === true ? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"}>About</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact</Link></li>
                    <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="px-4" onClick={() =>{
                      loginBtn === "Login" ? setLoginBtn("Logout") :setLoginBtn("Login");
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;