import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "./SocalLogin";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useAuth()

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, photo, password);

        /* password validation */
        if (password.length < 6) {
            toast.error('is less than 6 characters');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error("don't have a capital letter");
            return;
        }

        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            toast.error("don't have a special character");
            return;
        }

        /* creatting  user */
        createUser(email, password)
            .then(res => {
                console.log(res);
                window.location.reload();
                toast.success('Sign Up successfully');

                
            })
            .then(err => console.log(err))
            

    }


    return (
        <div>
            <div className="flex items-center justify-center max-w-screen-xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-md lg:w-1/3">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="Your Name" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="you@example.com" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Photo </label>
                            <input type="text" id="text" name="photo" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-200" placeholder="photo url" required />
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
                            <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:ring focus:ring-indigo-200">Sign Up</button>
                        </div>
                    </form>
                    <p className="text-center text-gray-600">You already have an account? <Link className="font-bold text-blue-600" to={'/signin'}>SignUp</Link></p>
                <div className="mt-4">
                    <SocialLogin></SocialLogin>
                </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;