
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState("");
    const handleSubscribe = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email.");
        } else {
            toast.success("Thank you for subscribing to our newsletter!");
            setEmail("");
        }
    };

    return (
        <div className='bg-[#595b3d74] text-white py-12 '>
            <div className=" max-w-screen-xl px-4  mx-auto grid grid-cols-2 md:grid-cols-3 items-center justify-center px4 gap-6 mb-8">
                <div className="w-full  mx-auto">
                    <img className='w-24 h-24 rounded-full' src="../../../public/assets/png-clipart-blogger-facebook-edublog-livejournal-facebook-rectangle-india-removebg-preview.png" alt="" />
                </div>
                <div className="w-full  mx-auto">
                    <div className="text-gray-600 flex gap-4">
                        <Link to={'/addblog'} className="hover:text-gray-900 font-bold"> Add Blog</Link>
                        <Link to={'/allblogs'} className="hover:text-gray-900 font-bold"> All Bocg</Link>
                        <Link to={'/featuredblogs'} className="hover:text-gray-900 font-bold"> Feature Blog</Link>
                        <Link to={'/wishlist'} className="hover:text-gray-900 font-bold"> Wishlist</Link>
                    </div>
                </div>


                <div className=" md:col-span-1 col-span-2">
                    <p className="text-gray-600 hover:text-gray-900 font-bold mb-4">Subscribe to our newsletter for updates.</p>
                    <div className="flex">
                        <form onSubmit={handleSubscribe}>
                            <input type="email" placeholder="Email" className=" font-bold bg-[#f4f1e1] text-gray-600 p-2 rounded-l-md outline-none"  />
                            <button className="bg-[#555843] hover:bg-[#343629] text-white p-2 rounded-r-md ">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr className='text-gray-600' />
            <div className="mt-8 text-center text-gray-600">
                <p className="hover:text-gray-900 font-bold">&copy; 2023 Nazmul. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
