import ResCart from "./ResCart"
import { useEffect, useState } from "react";
import {SWIGGY_API} from "../constants/const";
import Shimmer from "./Shimmer";

const Body = () => {
    
   const [listOfRes, setListOfRes] = useState([]);
   const [filterdList, setFilterdList] = useState([]);
   const [searchInput, setSearchInput] = useState("");

   useEffect(() => {
    fetchData();
   })

const fetchData = async () =>{
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5096133&lng=78.3168628&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilterdList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
}
  
    return listOfRes.length === 0 ? <Shimmer/> : (
        <div className="body-main">
            <div className="search">
                <input type="text" className="search-input" value={searchInput} onChange={(e) =>{
                    setSearchInput(e.target.value);
                }}></input>
                <button className="input-btn" onClick={()=>{
                   const searchfilterList = listOfRes.filter(res=>res.info.name.toLowerCase().includes(searchInput));
                   setFilterdList(searchfilterList);
                }}>Search</button>
                <button className="rated-btn" onClick={() =>{
                    const avgFiltered = listOfRes.filter(res => res.info.avgRating > 4.2);
                    setFilterdList(avgFiltered);
                }}>Top Rated Restuarant</button>
            </div>
            <div className="res-container">
                {filterdList.map((restuarant) =>  (
                    <ResCart key={restuarant.info.id} resData = {restuarant}/> 
                ))}
           </div>
        </div>
       
    );
};

export default Body;