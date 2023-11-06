/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import SocialLogin from "./SocalLogin";
import useAuth from "../Hooks/useAuth";

const SignIn = () => {
    const { signin } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);

    console.log('log in', location);

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);

        /* creatting  user */
        signin(email, password)
            .then(res => {
                toast.success('Sigin in successfully');
                navigate(location?.state ? location.state : '/')
              


            })
            .catch(err => {
                toast.error('eamil or password was wrong');

            });

            


    }
    return (
        <div className="flex items-center justify-center max-w-screen-xl mx-auto ">
            <div className="bg-white p-8 rounded-lg shadow-md lg:w-1/3 ">
                <h2 className="text-2xl font-semibold text-gray-700 mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="you@example.com" required />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className=" border  w-full rounded-md py-2 px-2 pr-10"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                required
                            />
                            <span
                                className="text-[#ff3f7f] absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:ring focus:ring-indigo-200">Login</button>
                    </div>
                </form>
                <p className="text-center text-gray-600">You already have an account? <Link className="font-bold text-blue-600" to={'/signup'}>SignUp</Link></p>
                <div className="mt-4">
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignIn;