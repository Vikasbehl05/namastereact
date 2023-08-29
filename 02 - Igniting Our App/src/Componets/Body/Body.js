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
        const filteerResList = filterRes.filter((res) => res?.info?.name.toLowerCase().includes(inputVal))
        setListOfRes(filteerResList)
    }

    if (ListOfRes?.length === 0) {
        return (
            <SimmerUi />
        )
    }

    return (
        <div className='m-3'>
            <div className="flex flex-row justify-evenly">
                <div className='flex justify-evenly m-3'>
                    <input className=" border-2 m-3 " type="text" value={inputVal} onChange={(e) => { setInputVal(e.target.value) }}>
                    </input>
                    <button className="border-2 p-1 m-3" type="submit" onClick={() => {
                        filterResutant()
                    }}>
                        Search
                    </button>
                </div>
                <button className="p-2" onClick={() => {
                    const filterList = ListOfRes?.filter((res) => res?.info?.avgRating > 4)
                    setListOfRes(filterList)
                }}> Rating above 4</button>
            </div>
            <div className='flex flex-wrap m-5 p-9 justify-between'>
                {
                    ListOfRes?.map((restaurant) => (<Link to={"/resmenu/" + restaurant?.info?.id} key={restaurant.info.key}><ResurantCard resData={restaurant} /></Link>))
                }
            </div>
        </div>
    );
}

export default Body