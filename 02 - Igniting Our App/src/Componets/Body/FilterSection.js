export const FilterSection = () => {
    return (
        <div className="fillter-section">
            <div className='search'> </div>
            <button className="filter" onClick={() => {
                const filterList = ListOfRes.filter((res) => res.info.avgRating > 4)
                setListOfRes(filterList)
            }}> Rating above 4</button>
        </div>
    )
}