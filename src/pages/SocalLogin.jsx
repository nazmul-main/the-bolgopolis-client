/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";


const SocialLogin = () => {

    const {  googleLogin } = useContext(AuthContext)

    const navigate = useNavigate()
    

    const handleSocialLogin = (loginFunction) => {
        loginFunction()
        .then(res => {
            toast.success('Sigin in successfully');
            navigate(location?.state ? location.state : '/')
            
        })
        .catch(err => {
            toast.error('eamil or password was wrong'); 

        });
    }



    return (
        <>
            <div className='divider'>Countinew With</div>
            <div>
                <button onClick={() => handleSocialLogin(googleLogin)} type="button" className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:ring focus:ring-red-200">Sign in with Google</button>
            </div>
        </>
    );
};

export default SocialLogin;