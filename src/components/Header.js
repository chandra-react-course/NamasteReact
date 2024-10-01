import { useState } from "react";
import {APP_LOGO} from "../constants/const";
const Header = () =>{
   const [loginBtn, setLoginBtn] = useState("Login");
    return(
        <div className="header-main">
            <div className="logo">
                <img className="logo-img" src={APP_LOGO} alt="FoodDelivery"></img>
            </div>
            <div className="header">
                <span className="header-heading">Food Delivery</span>
            </div>
            <div className="nav-item-root">
                <ul className="nav-item-ul">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>{
                      loginBtn === "Login" ? setLoginBtn("Logout") :setLoginBtn("Login");
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;