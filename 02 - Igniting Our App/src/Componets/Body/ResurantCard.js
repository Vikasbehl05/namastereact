import { LOGO_MENU_URL } from "../../utils/constance";

const ResurantCard = (props) => {
    const { resData } = props;
    return (
        <div className='flex flex-col container m-7 p-5 w-40 justify-items-center bg-[rgb(236,236,236)] '>
            <img className='max-w-fit max-h-fit rounded-lg' src={LOGO_MENU_URL + resData.info.cloudinaryImageId}></img>
            <h3 className="m-3 mt-6 font-medium text-black">{resData.info.name}</h3>
            <h4 className="m-3">{resData.info.areaName}</h4>
            <h4 className="m-3">{resData.info.avgRating} stars </h4>
        </div>
    )
}

export const includeVegMark = (ResurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute w-3 h-3 bg-green-500 rounded-full"></label>
                <ResurantCard {...props} />
            </div>
        )
    }
}

export default ResurantCard