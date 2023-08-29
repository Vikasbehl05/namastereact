import { LOGO_MENU_URL } from "../../utils/constance";

const ResurantCard = (props) => {
    const { resData } = props;
    return (
        <div className='flex flex-col p-2 m-4 w-40 h-64justify-items-center bg-[rgb(238,238,229)] border border-solid rounded'>
            <img className='max-w-fit max-h-fit' src={LOGO_MENU_URL + resData.info.cloudinaryImageId}></img>
            <h3 className="m-3 mt-6 font-medium text-black">{resData.info.name}</h3>
            <h4 className="m-3">{resData.info.areaName}</h4>
            <h4 className="m-3">{resData.info.avgRating} stars </h4>
        </div>
    )
}

export default ResurantCard