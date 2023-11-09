/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const SocialLogin = () => {

    const {  googleLogin } = useContext(AuthContext)

    const navigate = useNavigate()
    

    const handleSocialLogin = (loginFunction) => {
        loginFunction()
        .then(res => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Signin Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            navigate(location?.state ? location.state : '/')
            
        })
        .catch(err => {
            console.log(err); 

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