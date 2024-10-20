
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";

const RestuarantMenu = () => {
    const {resId} = useParams();
    const resMenuList = useRestuarantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    
    if(resMenuList.length === 0) return <Shimmer/>;
     const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resMenuList?.cards[2]?.card?.card?.info;
     const itemCardList = resMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
     
     const categories = resMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => 
        category?.card?.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    return(
       <div className="p-4 text-center">
            <h1 className="font-bold text-3xl my-6">{name}</h1>
            <p className="font-bold">{cuisines.join(", ")}</p>

            {categories.map((category, index) => (
                <RestuarantCategory key={category?.card?.card?.title} data={category?.card?.card} 
                showItems = {index === showIndex ? true : false}
                setShowIndex = {() => setShowIndex(index)}
                />
            ))}
       </div>
    );

   
};

export default RestuarantMenu;