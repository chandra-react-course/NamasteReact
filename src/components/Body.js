import ResCart from "./ResCart"
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

   const [listOfRes, setListOfRes] = useState(resList);

    return (
        <div className="body-main">
            <div className="search">
                <button className="rated-btn" onClick={() =>{
                    const filtered = listOfRes.filter(res => res.info.avgRating > 4.2);
                    setListOfRes(filtered);
                }}>Top Rated Restuarant</button>
            </div>
            <div className="res-container">
            {listOfRes.map((restuarant) =>  (
                  <ResCart key={restuarant.info.id} resData = {restuarant}/> 
            ))}
           </div>
        </div>
       
    );
};

export default Body;