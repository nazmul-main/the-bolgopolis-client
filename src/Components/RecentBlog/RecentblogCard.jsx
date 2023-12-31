/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { motion } from "framer-motion"; // Import Framer Motion
import LikeButton from "../LikeButton/LikeButton";

const RecentblogCard = ({ blog }) => {
    const { user } = useAuth();
    console.log(user);
    const email = user?.email;
    const { _id, title, img, category, long_description, currentTime, short_description } = blog;

    const handleWishlist = () => {
        const sent = { blogid: _id, title, img, category, long_description, currentTime, short_description, email };
        console.log(sent);

        fetch("https://the-blogopolis-server.vercel.app/api/v1/user/wishlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sent),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Wishlist added successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
    };

    return (
        <motion.div
            className="rounded-lg border-4"
            initial={{ opacity: 0 }} // Initial state (hidden)
            animate={{ opacity: 5 }} // Animated state (visible)
            transition={{ duration: 1 }} // Animation duration
        >
            <motion.img
                animate={

                    {
                        scale: [1, 0, 0, 1, 1],
                        rotate: [0, 3, 40, 40, 0],
                        // borderRadius: ["%", "20%", "50%", "50%", "20%"],

                    }
                }
                transition={{ duration: 1.5 }}
                src={img} alt={title} className="mb-6 w-full h-40 md:h-52 object-cover rounded-t-lg" />
            <div className="space-y-3 px-2">
                <span className="text-black text-sm border-2 border-pink-400 bg-red-100 px-3 py-2 rounded-2xl font-semibold">
                    {category}
                </span>
                <h2 className="text-xl font-bold mt-2">{title}</h2>
                <p className="text-gray-600 text-sm mt-2">{long_description.slice(0, 200)}...</p>F
                <p className="text-gray-500 text-sm mt-2">
                    <span className="font-bold mb-2">Time</span>: {currentTime} <br />
                    <LikeButton />
                </p>
            </div>
            <div className="my-4 flex justify-between px-2">
                <Link to={`/blogdetails/${_id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Details
                </Link>
                <button
                    disabled={!user}
                    onClick={handleWishlist}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                    Wishlist
                </button>
            </div>
        </motion.div>
    );
};

export default RecentblogCard;
