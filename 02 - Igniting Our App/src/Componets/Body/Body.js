import { useEffect, useState } from "react";
import ResurantCard from "./ResurantCard";
import SimmerUi from "./Shimmer";
import { Link } from "react-router-dom";
import { RESURANT_LIST_URL } from "../../utils/constance";


const Body = () => {
    const [ListOfRes, setListOfRes] = useState([])
    const [inputVal, setInputVal] = useState("")
    const [filterRes, setFilterRes] = useState([])

    useEffect(() => {
        const resList = fetchResList();
    }, []);


    const fetchResList = async () => {
        const response = await fetch(RESURANT_LIST_URL);
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
                    ListOfRes.map((restaurant) => (<Link to={"/resmenu/" + restaurant.info.id} key={restaurant.info.key}><ResurantCard resData={restaurant} /></Link>))
                }
            </div>
        </div>
    );
}

export default Body