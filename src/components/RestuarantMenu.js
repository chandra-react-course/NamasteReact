import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestuarantMenu = () => {
    const [resMenuList, setResMenuList] = useState([]);
    const {resId} = useParams();
    useEffect(() =>{
        fetchMenu();    
    },[]);

    fetchMenu = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5096133&lng=78.3168628&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        const resInfo = json?.data;
        setResMenuList(resInfo);

    };

    if(resMenuList.length === 0) return <Shimmer/>;
     const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resMenuList?.cards[2]?.card?.card?.info;
     const itemCardList = resMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    return(
       <div className="menu-items">
        <ul>
            <h2>{name}</h2>
            {cuisines.join(", ")}
            {costForTwoMessage}
            <h2>Menu</h2>
            {itemCardList.map((restMenu) =>(
                <li key={restMenu.card.info.id}>{restMenu.card.info.name}</li>
            ))};
        </ul>
       </div>
    );

   
};

export default RestuarantMenu;