
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
import SocalLogin from "./SocalLogin";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const SignUp = () => {
    
    const {createUser} = useAuth()
    const [showPassword, setShowPassword] = useState(false);



    const handleSubmit = (e) => {
        e.preventDefault();

        /* get feild values */
        const name = e.target.name.value
        const email = e.target.email.value
        const img = e.target.img.value
        const password = e.target.password.value

        console.log(name, email, password, img);

        /* password validation */
        if (password.length < 6) {
            toast.error('is less than 6 characters');
            return;
        }

        // if (!/[A-Z]/.test(password)) {
        //     toast.error("don't have a capital letter");
        //     return;
        // }

        // if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
        //     toast.error("don't have a special character");
        //     return;
        // }

        createUser(email, password)
        .then(res =>console.log(res.user))
        .catch(err => console.log(err))

      
        //  /* creatting  user */
        //  createuser(email, password)
        //  .then(res => {
        //      handleUpdateProfile(name, img)
        //          .then(() => {
        //              window.location.reload()
        //              toast.success('user create succesfully')
        //              navigate(location?.state ? location.state : '/')
                     
        //          })

        //  })
        //  .catch(err => {
        //      toast.error(err.message)
        //  })
      


    }

    return (
        <div>
            <div className="h-[15vh] md:h-[25vh] relative">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="bg-[url('https://i.ibb.co/z7Sd3R9/Mass-Circles-1.png')] bg-no-repeat bg-cover h-full">
                    <div className="text-white text-center absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#03d5b4]"> Sigin Up</h1>
                    </div>
                </div>
            </div>
            <div className="flex  flex-col md:flex-row-reverse items-center justify-center max-w-screen-xl mx-auto mt-10 px-7 py-6">

                <div className="md:w-2/4 col-span-1">
                    <img src="../resource/undraw_Sign_up_n6im-removebg-preview.jpg" alt="" />
                </div>
                <div className="shadow-md md:w-2/3 col-span-3 mx-auto  lg:w-1/3 p-5  border rounded-md">
                    <h2 className="text-3xl font-bold mb-8 text-center text-[#2C3659] ">Sign up</h2>

                    <form onSubmit={handleSubmit} className="space-y-7 ">
                        <div>
                            <input
                                className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                                placeholder="Your Name "
                                type="name"
                                name="name"
                                id="" required /><br />

                        </div>
                        <div>
                            <input
                                className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                                placeholder="Email Aeddress "
                                type="email"
                                name="email"
                                id="" required /><br />
                        </div>
                        <div>
                            <input
                                className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                                placeholder="Image URL (Optional) "
                                type="text"
                                name="img"
                                id="" /><br />
                        </div>
                        <div className="relative">
                            <input
                                className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id=""
                                required
                            />
                            <span
                                className="text-[#03d5b4] absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div>
                            <input className="mr-2" type="checkbox" name="terms" id="terms" />
                            <label htmlFor="terms">Accept our <a href="" className="text-[#03d5b4]">terms</a> and <a href="" className="text-[#03d5b4]">condition</a></label>
                        </div>

                        <input className="w-full btn bg-[#03d5b4] hover:bg-[#03d5b4]  font-bold text-[#2C3659]" type="submit" value="Sign Up" />

                        <p>Aready have an acount <Link className="text-[#03d5b4] font-semibold" to="/signin">Login</Link> </p>
                    </form>
                    <SocalLogin></SocalLogin>

                </div>
            </div>
        </div>
    );
};

export default SignUp;