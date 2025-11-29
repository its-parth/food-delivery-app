const MenuDish = (props) => {
    const dishInfo = props?.dish?.card?.info;
    return <div className="font-normal">{dishInfo.name}</div>
}

export default MenuDish;