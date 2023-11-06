/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {

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
        <div className='max-w-screen-xl mx-auto  px-4 md:px-24 md:mt-12  '>
            <div className=" flex flex-col  lg:flex-row  items-center justify-centerborder md:py-12 md:px-12 bg-[#A7D397]  rounded-2xl">
                <div className='flex-[3] space-y-3'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '>Subscribe to Porto newsletter <br /> and stay updated.</h1>
                    <p className=''>Don't miss anything. Get all the latest posts delivered straight to <br /> your inbox. It's free</p>
                </div>
                <div className="bg-[#D0D4CA] p-8 rounded-2xl shadow-md flex-[2]">
                    <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
                    <form onSubmit={handleSubscribe}>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-3 py-2 border rounded-md"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-[#555843] text-white px-4 py-2 rounded hover:bg-[#343629]"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
            </div>
        </div>
    );
};

export default Newsletter;
