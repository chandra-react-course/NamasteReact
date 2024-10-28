import { useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearItems = ()=>{
        dispatch(clearItem());
    }
    return(
        <div className="w-6/12 m-auto">
            <ItemList items={cartItems}/>
            <button className="bg-black text-white shadow-lg rounded-sm mx-72 my-6" onClick={handleClearItems}>Clear</button>
            {cartItems.length === 0 && <h1>Pleae select items to cart.</h1>}
        </div>
    )
}

export default Cart;