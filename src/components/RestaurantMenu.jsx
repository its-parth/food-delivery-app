import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import Accordion from "./Accordian";

const RestaurantMenu = () => {
    console.log('rest rendered');
    const [restInfo, setRestInfo] = useState(null);
    const [menuInfo, setMenuInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9966135&lng=77.5920581&restaurantId=2415&catalog_qa=undefined&submitAction=ENTER');

        console.log(response);
        const restData = await response.json();
        console.log(restData);
        setRestInfo(restData);
        const menu = restData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const filteredMenu = menu.filter(dish => {
            const card = dish?.card?.card;
            return card.hasOwnProperty("itemCards") || card.hasOwnProperty("categories");
        });
        setMenuInfo(filteredMenu);
    }
    return restInfo === null ? (<ShimmerUI />) : (<div className="rest-menu-container">
        <h1>{restInfo?.data?.cards[0]?.card?.card?.text}</h1>
        <div className="Tabs">
            {
                restInfo?.data?.cards[1]?.card?.card?.tabs.map((tab) => (
                    <div key={tab.id}>{tab.title}</div>
                ))
            }
        </div>
        <div className="rest-info-card">
            <div>
                <span>4.7 (86K+ ratings) - 100 for two</span>
            </div>
            <div>South indian, cafe etc.</div>
            <div>Outlet Malleshwaram</div>
            <div>30-35 mins</div>
        </div>

        <div className="rest-menu">
            {
                menuInfo.map((menu) => {
                    const card = menu?.card?.card;
                    if(card.itemCards) {
                        return (
                            <Accordion key={card.categoryId} title={card.title} itemCards={card.itemCards} titleClass="font-bold text-lg"/>
                        )
                    }else {
                        return (
                            <div key={card.categoryId}>
                                <h2>{card.title}</h2>
                                {
                                    card.categories.map((category) => {
                                    return (
                                        <Accordion key={category.categoryId} title={category.title} itemCards={category.itemCards} titleClass="font-normal text-base"/>
                                    )
                                })
                                }
                            </div>
                        )
                    }
                })
            }
        </div>

    </div>)

}

export default RestaurantMenu;