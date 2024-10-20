import ResCart, {withIsOpenLabel} from "./ResCart"
import { useContext, useEffect, useState } from "react";
import {SWIGGY_API} from "../constants/const";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
    
   const [listOfRes, setListOfRes] = useState([]);
   const [filterdList, setFilterdList] = useState([]);
   const [searchInput, setSearchInput] = useState("");
   const {lognedInUser, setUserName} = useContext(UserContext);

   const ResCartWithOpenLabel = withIsOpenLabel(ResCart);

useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5096133&lng=78.3168628&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Optional Chaining
    setListOfRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  
    setFilterdList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  
  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return(<h1>Look likes you are internet connection lost</h1>);
  }
  
    return listOfRes.length === 0 ? <Shimmer/> : (
        <div className="bg-green-50">
            <div className="flex p-4">
                <input type="text" className="m-4  my-4 border border-solid border-black" value={searchInput} onChange={(e) =>{
                    setSearchInput(e.target.value);
                }}/>
                <button className="m-4 my-4 bg-blue-200 w-20" onClick={()=>{
                   const searchfilterList = listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchInput));
                   setFilterdList(searchfilterList);
                }}>Search</button>
                <button className="m-4 my-4 bg-blue-200 w-44" onClick={() =>{
                    const avgFiltered = listOfRes.filter((res) => res.info.avgRating > 4.2);
                    setFilterdList(avgFiltered);
                }}>Top Rated Restuarant</button>
                <div>
                    <label>UserName: </label><input type="text" className="m-4  my-4 border border-solid border-black" value={lognedInUser}  onChange={(e) =>{
                      setUserName(e.target.value);
                    }}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filterdList.map((restuarant) =>  (
                    <Link to={"/restuarants/"+restuarant.info.id} key={restuarant.info.id}>
                      {restuarant.info.isOpen ? <ResCartWithOpenLabel resData = {restuarant}/> : <ResCart  resData = {restuarant}/>} 
                    </Link>
                ))}
           </div>
        </div>
       
    );
};

export default Body;