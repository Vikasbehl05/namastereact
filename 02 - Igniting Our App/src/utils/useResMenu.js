import { RESURANT_MENU } from "./constance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useResMenu = () => {
    const { resId } = useParams();
    const [resMenu, setResMenu] = useState([])
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
    return [resMenu, topRate]
}

export default useResMenu