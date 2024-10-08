
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu"

const RestuarantMenu = () => {
    
    const {resId} = useParams();
    const resMenuList = useRestuarantMenu(resId);

    if(resMenuList.length === 0) return <Shimmer/>;
     const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resMenuList?.cards[2]?.card?.card?.info;
     const itemCardList = resMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    return(
       <div className="p-4">
        <ul>
            <h2 className="font-bold text-3xl my-6">{name}</h2>
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