import {CART_IMAGE} from "../constants/const";
const ResCart = (props) =>{
    return(
        <div className="res-cart">
            <img className="cart-img" src={CART_IMAGE+props.resData.info.cloudinaryImageId} alt=""></img>
            <h3>{props.resData.info.name}</h3>
            <h4>{props.resData.info.cuisines.join(", ")}</h4> 
            <div className="rate-cost-for-members">
                <h5>{props.resData.info.avgRating+" Rating"}</h5>
                 <h5>{props.resData.info.costForTwo}</h5>
            </div>   
        </div>
    );
};

export default ResCart;