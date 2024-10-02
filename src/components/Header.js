import { useState, useEffect } from "react";
import {APP_LOGO} from "../constants/const";
import { Link } from "react-router-dom";

const Header = () =>{
   const [loginBtn, setLoginBtn] = useState("Login");
   useEffect(() => {
}, [loginBtn]);
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
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
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