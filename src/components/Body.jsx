import resList from '../utils/mockData'
import RestaurantCard from './RestaurantCard'
const Body = () => {
    return <div className="border-2 m-2 rest-container flex flex-wrap p-2 justify-evenly gap-y-4 bg-blue-400">
        {resList.map(restCard => {
            return <RestaurantCard rest={restCard} key={restCard.data.id}/>
        })}
    </div>
    
}

export default Body;