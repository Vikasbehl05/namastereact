import { useState } from "react";
import useResMenu from "../../utils/useResMenu";
import MenuItem from "./MenuItem";

const ResurantMenu = (props) => {

    const [resMenu, topRate] = useResMenu()
    const [showAccor, setShowAccor] = useState(false)
    const menuList = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    const newMenuList = menuList?.filter((item) => (item.card?.card?.["@type"].includes("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")))

    function handleClick() {
        setShowAccor(!showAccor)
    }

    return (
        <div className="flex flex-col items-center text-center justify-center">
            <h3 className="m-1 text-xl text-center font-bold "> {resMenu?.data?.cards[0]?.card?.card?.info?.name}</h3>
            <h1 className="m-1 font-light"> {resMenu?.data?.cards[0]?.card?.card?.info?.cuisines?.join(",")} </h1>
            {
                newMenuList?.map((item) => (
                    <div className="w-4/6 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex flex-col">
                        <div onClick={handleClick} className="flex justify-between">
                            <span className="text-xl font-bold"> {item?.card?.card?.title}</span>
                            <span className="font-extrabold"> {">"} </span>
                        </div>
                        <div>
                            {
                                item?.card?.card?.itemCards?.map((item) => (showAccor && <li className="list-none" key={item?.card?.info.id}><MenuItem item={item} /></li>))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ResurantMenu