
import { useDispatch } from "react-redux";
import {CART_IMAGE} from "../constants/const";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items}) =>{

    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }
    return(
        <div>
           {items.map((item) =>(
            <div key = {item.card.info.id} className="p-2 m-2 border-b-2 flex justify-between">
                <div className=" w-10/12 text-left">
                    <span className="font-bold">{item.card.info.name}</span><br/>
                    <span>₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice/100 : item.card.info.finalPrice/100}</span><br/>
                    <span className="text-xs text-black-100">{item.card.info.description}</span>
               </div>
               <div  className=" w-2/12 p-4">
                    <div className="absolute mx-6">
                        <button className="bg-black text-white shadow-lg rounded-sm" onClick={() =>handleAddItem(item)}> ADD+ </button>
                    </div>
                    <img className="w-full" src={CART_IMAGE+item.card.info.imageId}></img>
               </div>
            </div>
           ))}
        </div>
    );
};
export default ItemList;