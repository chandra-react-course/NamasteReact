import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";


const FoodDelivery = () => {
    return(
       <div className="app">
          <Header/>
          <Body/>
          <Footer/>
       </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//This is for render the react element
//root.render(heading);

//This is for render the react componenet
root.render(<FoodDelivery/>);