/* eslint-disable react/prop-types */


const RecentblogCard = ({ blog }) => {

    const { title, img, category, short_description, currentTime} = blog;

    return (
        <div className="md:w-80 p-4 border rounded-lg shadow-lg">
            <img src={img} alt={title} className="w-full h-40 object-cover rounded-lg" />
            <h2 className="text-xl font-bold mt-2">{title}</h2>
            <p className="text-gray-600 text-sm mt-2">{short_description}</p>
            <p className="text-gray-500 text-sm mt-2"><span className='font-bold'>Category</span>:{category}</p>
            <p className="text-gray-500 text-sm mt-2"><span className='font-bold'>Category</span>:{currentTime}</p>
            <div className="mt-4 flex justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Details
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                    Wishlist
                </button>
            </div>
        </div>
    );
};

export default RecentblogCard;