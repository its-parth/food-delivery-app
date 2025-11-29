import { useEffect, useState } from 'react'
import resList from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
import ShimmerUI from './ShimmerUI';
import useIsOnline from '../utils/useIsOnline';
const Body = () => {
    console.log('body rendered');
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [found, setFound] = useState(true);
    const online = useIsOnline();

    const fetchData = async () => {
        const response = await fetch("https://corsproxy.io/?url=https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966135&lng=77.5920581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        console.log(data);
        const restaurants = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // setFilteredRestaurant(restaurants);
        setRestaurantList(restaurants);
    }


    useEffect(() => {
        // console.log('inside first useEffect')
        fetchData();
        // const intervalId = setInterval(() => {
        //     console.log("Parth Magar OP");
        // }, 1000);
        // console.log('first use effect completed')

        // return () => {
        //     clearInterval(intervalId);
        // }
    }, []);

    useEffect(() => {
        // console.log('inside second useEffect')
        const filteredRest = restaurantList.filter((rest) => {

            return (rest.info.name.toLowerCase().includes(searchText) ||


                rest.info.cuisines?.join(' ').toLowerCase().includes(searchText))
        });

        setFound(filteredRest.length > 0);
        setFilteredRestaurant(filteredRest);
        // console.log('second useEffect completed')
    }, [searchText, restaurantList]);

    const getTopRated = () => {
        const topRestaurant = restaurantList.filter(rest => rest.info.avgRating > 4);
        setRestaurantList(topRestaurant);
        setSearchText("");
        setFound(topRestaurant.length > 0);
    }
    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    }

    if (restaurantList.length === 0) {
        return <ShimmerUI />
    }
    return online ? (<>
        <div className='filter m-2 flex gap-2 items-center'>
            <div className='search flex gap-2 items-center'>
                <input type="text" className='border-2 p-2 rounded-xl' value={searchText} onChange={handleInputChange} placeholder='Search Here' />
            </div>

            <div className='top-rated-btn border-2 border-black select-none inline-block p-2 cursor-pointer bg-red-500 text-white rounded-xl' onClick={getTopRated}>Top Rated Restaurants</div>
        </div>

        <div className="border-2 m-2 rest-container flex flex-wrap p-2 justify-evenly gap-y-4 bg-blue-400">
            {found ? (filteredRestaurant.map(restCard => {
                return <RestaurantCard rest={restCard} key={restCard.info.id} />
            })) : (<div className='font-bold text-white h-[70vh] flex justify-center items-center text-3xl text-center'>Not Any Relevant Restaurants</div>)}
        </div>
    </>) : (<div>
        <h1>Oops It seems you are Offline!! Try again after connecting to the network</h1>
    </div>)

}

export default Body;