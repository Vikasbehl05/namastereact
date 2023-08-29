import React from "react";
import { MENU_IMAGE_URL } from "../../utils/constance";

const MenuItem = ({ item }) => {
    const imageUrl = item?.card?.info?.imageId
    console.log(MENU_IMAGE_URL + imageUrl)
    return (
        <div className="flex m-3 p-3 items-center border-2 border-solid border-gray-600">
            <img src={MENU_IMAGE_URL + imageUrl} alt={MENU_IMAGE_URL + imageUrl} className="w-28 h-24 object-cover mr-3" />
            <div className="flex-1">
                <h3 className="m-0">{item?.card?.info?.name}</h3>
                <p className="mx-2">{item?.card?.info?.description}</p>
                <p className="m-0 font-bold">Price: ₹{item?.card?.info?.price / 100}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default MenuItem;