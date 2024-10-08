import { useEffect, useState } from "react";
const useRestuarantMenu = (resId) => {
const [resMenuList, setResMenuList] = useState([]);
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
    return resMenuList;
}

export default useRestuarantMenu;