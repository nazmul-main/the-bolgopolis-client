import { useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

const LikeButton = () => {
    const [likes, setLikes] = useState(34);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);

        // Add logic to send a request to your Express server to update the likes in the database
        // You can use a library like axios for making HTTP requests.
    };

    return (
        <div>
            <button
                onClick={handleLike}
                className="flex px-3 py-1 bg-[#646852] text-white rounded-md cursor-pointer mt-2"
            >
                {isLiked ? (
                    <AiFillDislike className="text-white text-xl text-center" />
                ) : (
                    <AiFillLike className="text-white text-xl text-center" />
                )}
                <span className="text-white ml-2">{likes}</span>
            </button>
        </div>
    );
};

export default LikeButton;
