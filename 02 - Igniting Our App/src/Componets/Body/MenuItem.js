import React from "react";
import { MENU_IMAGE_URL } from "../../utils/constance";

const MenuItem = ({ item }) => {
    const imageUrl = item?.card?.info?.imageId
    console.log(MENU_IMAGE_URL + imageUrl)
    return (
        <div className="menu-item">
            <img src={MENU_IMAGE_URL + imageUrl} alt={MENU_IMAGE_URL + imageUrl} className="item-image" />
            <div className="item-details">
                <h3 className="item-name">{item?.card?.info?.name}</h3>
                <p className="item-description">{item?.card?.info?.description}</p>
                <p className="item-price">Price: ${item?.card?.info?.price / 100}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default MenuItem;