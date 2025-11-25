import {CDN_URL} from '../utils/constants'
const RestaurantCard = (props) => {
    let {rest} = props;
    let {name, id, avgRating, costForTwo, cloudinaryImageId, sla, cuisines} = rest.info;
    let {deliveryTime} = sla;
    return <div className="rest-card w-[270px] border-red-600 border-2 p-2 flex flex-col gap-3.5 bg-blue-100 cursor-pointer">
        <img src={CDN_URL+cloudinaryImageId} className='w-full h-40 object-cover'/>
        <h2 className='font-bold text-lg'>{name}</h2>
        <h2>{cuisines.join(", ")}</h2>
        <p>{avgRating} ⭐</p>
        <p>{(costForTwo)} Only/-</p>
        <p>{deliveryTime} Minutes To Deliver</p>
    </div>
}

export default RestaurantCard;