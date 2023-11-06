/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const RecentblogCard = ({ blog }) => {

    const {_id, title, img, category, long_description, currentTime } = blog;

    return (
        <div className="md:w-96   rounded-lg  border-4">
            <img src={img} alt={title} className="mb-6 w-full h-40 md:h-52 object-cover rounded-t-lg" />
            <div className="space-y-3 px-2">
                <span className="text-black text-sm  border-2 border-pink-400 bg-red-100 px-3 py-2 rounded-2xl font-semibold ">{category}</span>
                <h2 className="text-xl font-bold mt-2">{title}</h2>
                <p className="text-gray-600 text-sm mt-2">{long_description}</p>
                <p className="text-gray-500 text-sm mt-2"><span className='font-bold'>Time</span>:{currentTime}</p>
            </div>
            <div className="my-4 flex justify-between px-2 ">
                <Link to={`/blogdetails/${_id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Details
                </Link>
                <Link className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                    Wishlist
                </Link>
            </div>
        </div>
    );
};

export default RecentblogCard;