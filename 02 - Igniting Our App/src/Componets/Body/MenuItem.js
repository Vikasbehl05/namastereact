import React from "react";
import { MENU_IMAGE_URL } from "../../utils/constance";

const MenuItem = ({ item }) => {
    const imageUrl = item?.card?.info?.imageId
    return (
        <div className="flex justify-between m-4 p-3 border-b-4 border-solid">
            <div className="flex flex-col items-start justify-between m-1 p-2 w-9/12">
                <h3 className="font-medium">{item?.card?.info?.name}</h3>
                <p className="font-light">₹{item?.card?.info?.price / 100}</p>
                <p className="font-thin text-gray-500">{item?.card?.info?.description}</p>
            </div>
            <div className="w-3/12 flex items-center justify-center relative">
                <img src={MENU_IMAGE_URL + imageUrl} alt={""} className="w-28 h-24 object-cover mr-3 rounded " />
                <div className="absolute bottom-0"><button className="rounded-lg border-2 bg-slate-600 text-white">ADD +</button></div>
            </div>
        </div>
    );
};

export default MenuItem;