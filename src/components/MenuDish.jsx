const MenuDish = (props) => {
    const dishInfo = props?.dish?.card?.info;
    return <div>{dishInfo.name}</div>
}

export default MenuDish;