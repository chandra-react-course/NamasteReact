import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import RestuarantMenu from "./components/RestuarantMenu"

import About from "./components/About.js";
import Contact from "./components/Contact.js";
//import Grocery from "./components/Grocery.js";
import Error from "./components/Error.js";


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() =>import("./components/Grocery.js"));

const FoodDelivery = () => {
    return(
       <div className="app">
          <Header/>
          {/* <Body/> */}
          <Outlet/>
          <Footer/>
       </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//This is for render the react element
//root.render(heading);

const appRouter =  createBrowserRouter([
   {
      path:"/",
      element : <FoodDelivery/>,
      children : [
         {
            path:"/",
            element : <Body/>,
         },
         {
            path:"/about",
            element : <About/>,
         },
         {
            path:"/contact",
            element : <Contact/>,
         },
         {
            path:"/grocery",
            element : <Suspense fallback = {<h1>Loading...</h1>}><Grocery/></Suspense>,
         },
         {
            path:"/restuarants/:resId",
            element : <RestuarantMenu/>,
         }
      ],
      errorElement: <Error/>,
   },
   {
      path:"/About",
      element : <About/>,
   },
   {
      path:"/Contact",
      element : <Contact/>,
   }
]);

//This is for render the react componenet
//root.render(<FoodDelivery/>);

// After install React-Router-Dom we are renderind like below. beacause we configured router configuration.
root.render(<RouterProvider router = {appRouter}/>);