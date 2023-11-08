/* eslint-disable no-unused-vars */
import { Link, Navigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import SocialLogin from "./SocalLogin";
import Swal from "sweetalert2";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, handleUpdateProfile } = useAuth()
    const location = useLocation()

    const handleSubmit = e => {




        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value
        console.log(name, email, photo, password);

        /*--------------- password validation -----------*/

        if (password.length < 6) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "passwoed is less than 6 characters",
                showConfirmButton: false,
                timer: 1500
            });
            alert('');
            return;
        }

        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "don't have a capital letter",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "don't have a special character",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }

        if (!/\d/.test(password)) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "doesn't have a numeric character",
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }


        /* creating user */
        createUser(email, password)
            .then(res => {
                handleUpdateProfile(name, photo)
                    .then(() => {
                        window.location.reload();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "User created successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        Navigate(location?.this.state ? location.state : '/');
                    })
            })
            .catch(err => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "User already exists",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }
     const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
    };

    return (
        <div className="bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}>
        <div style={overlayStyle}></div>
                <div className="flex items-center justify-center h-screen max-w-screen-xl mx-auto ">
                    <div className=" relative bg-white p-8 rounded-lg shadow-md lg:w-1/3">
                        <h2 className="text-2xl font-semibold md:font-bold md:text-3xl text-center text-gray-700 mb-6">Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Name</label>
                                <input type="text" id="name" name="name" className="  border-[#555843] outline-none border   w-full rounded-md py-2 px-2 pr-10" placeholder="Your Name" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" className="  border-[#555843] outline-none border   w-full rounded-md py-2 px-2 pr-10" placeholder="you@example.com" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Photo </label>
                                <input type="text" id="text" name="photo" className="  border-[#555843] outline-none border   w-full rounded-md py-2 px-2 pr-10" placeholder="photo url (optinal)" />
                            </div>
                            <div className="relative mb-4">
                            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    className="  border-[#555843] outline-none border   w-full rounded-md py-2 px-2 pr-10"
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    required
                                />
                                <span
                                    className="text-[#555843] absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>
                            <div className="mb-4">
                                <button type="submit" className="w-full text-white py-2 rounded-lg bg-[#555843] hover:bg-[#34362a] focus:ring focus:ring-indigo-200">Sign Up</button>
                            </div>
                        </form>
                        <p className="text-center text-gray-600">You already have an account? <Link className="font-bold text-blue-600" to={'/signin'}>SignIn</Link></p>
                        <div className="mt-4">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default SignUp;