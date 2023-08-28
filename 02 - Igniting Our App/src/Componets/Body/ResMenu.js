import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { RESURANT_MENU } from "../../utils/constance";
import MenuItem from "./MenuItem";

const ResurantMenu = (props) => {
    const [resMenu, setResMenu] = useState([])
    const { resId } = useParams();
    const [topRate, setTopRate] = useState(false)

    const URL = RESURANT_MENU + resId

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const res = await fetch(URL)
        if (!res.ok) {
            throw new Error("Problem fetching api");
        }
        const resJson = await res.json()
        setResMenu(resJson)
        if (resJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title.includes("Top Picks")) {

            setTopRate(true)

        }
    }
    const menuList = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    return (
        <div className="res-menu">
            <h3 className="res-name"> {resMenu?.data?.cards[0]?.card?.card?.info?.name}</h3>
            <ul>
                {
                    topRate ? menuList?.cards[2]?.card?.card?.itemCards?.map((itm) => (<li key={itm.id}><MenuItem item={itm} /></li>)) : menuList?.cards[1]?.card?.card?.itemCards?.map((itm) => (<li key={itm.id}><MenuItem item={itm} /></li>))
                }

            </ul>
        </div>
    )
}

export default ResurantMenu