import { useEffect, useState } from "react";
import ResurantCard from "./ResurantCard";
import SimmerUi from "./Shimmer";
import { FilterSection } from "./FilterSection";


const Body = () => {
    const [ListOfRes, setListOfRes] = useState([])
    const [inputVal, setInputVal] = useState("")
    const [filterRes, setFilterRes] = useState([])

    useEffect(() => {
        const resList = fetchResList();
    }, []);

    const fetchResList = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9314583&lng=77.6299858&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        if (!response.ok) {
            throw new Error("Problem fetching api");
        }
        const responseJson = await response.json()

        setListOfRes(responseJson?.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRes(responseJson?.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const filterResutant = () => {
        const filteerResList = filterRes.filter((res) => res.info.name.toLowerCase().includes(inputVal))
        setListOfRes(filteerResList)
    }

    if (ListOfRes.length === 0) {
        return (
            <SimmerUi />
        )
    }
    return (
        <div className='bodyContainer'>
            <div className="filter-section">
                <div className='search'>
                    <input type="text" value={inputVal} onChange={(e) => { setInputVal(e.target.value) }}>
                    </input>
                    <button type="submit" onClick={() => {
                        filterResutant()
                    }}>
                        Search
                    </button>
                </div>
                <button className="filter" onClick={() => {
                    const filterList = ListOfRes.filter((res) => res.info.avgRating > 4)
                    setListOfRes(filterList)
                }}> Rating above 4</button>
            </div>
            <div className='res-container'>
                {
                    ListOfRes.map((restaurant) => (<ResurantCard key={restaurant.info.key} resData={restaurant} />))
                }
            </div>
        </div>
    );
}

export default Body