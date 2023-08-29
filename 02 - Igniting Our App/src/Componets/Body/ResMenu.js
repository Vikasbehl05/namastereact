import useResMenu from "../../utils/useResMenu";
import MenuItem from "./MenuItem";

const ResurantMenu = (props) => {

    const [resMenu, topRate] = useResMenu()

    const menuList = resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR

    // resMenu?.length === 0 ? (<SimmerUi />) :
    return (
        <div className="res-menu">
            <h3 className="m-3 "> {resMenu?.data?.cards[0]?.card?.card?.info?.name}</h3>
            <ul>
                {
                    topRate ? menuList?.cards[2]?.card?.card?.itemCards?.map((itm) => (<li key={itm?.id}><MenuItem item={itm} /></li>)) : menuList?.cards[1]?.card?.card?.itemCards?.map((itm) => (<li key={itm?.id}><MenuItem item={itm} /></li>))
                }

            </ul>
        </div>
    )
}

export default ResurantMenu