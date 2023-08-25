import { LOGO_MENU_URL } from "../../utils/constance";

const ResurantCard = (props) => {
    const { resData } = props;
    return (
        <div className='res-card'>
            <img className='res-logo' src={LOGO_MENU_URL + resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.areaName}</h4>
            <h4>{resData.info.avgRating} stars </h4>
        </div>
    )
}

export default ResurantCard