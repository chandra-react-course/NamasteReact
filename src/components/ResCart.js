import {CART_IMAGE} from "../constants/const";
const ResCart = (props) =>{
    return(
        <div className="w-52 p-4 m-4 border border-gray-500 rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-md" src={CART_IMAGE+props.resData.info.cloudinaryImageId} alt=""></img>
            <h3 className ="font-bold my-4 text-lg">{props.resData.info.name}</h3>
            <h4>{props.resData.info.cuisines.join(", ")}</h4> 
            <div className="rate-cost-for-members">
                <h5>{props.resData.info.avgRating+" Rating"}</h5>
                 <h5>{props.resData.info.costForTwo}</h5>
            </div>   
        </div>
    );
};

export const withIsOpenLabel = (ResCart) =>{
    return(props) => {
        return(
            <div>
                <label className="absolute bg-black text-white mx-4 rounded-md">Open</label>
                <ResCart {...props}/>
            </div>
        );
    };
};

export default ResCart;