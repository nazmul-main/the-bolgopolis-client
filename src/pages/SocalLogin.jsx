import { toast } from "react-hot-toast";


// import { Navigate } from 'react-router-dom';

import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const SocalLogin = () => {
    const {googleSiginIn} = useContext(AuthContext)

    const handleSocialLogin = (media) => {
        media()
        .then(res => {
            toast.success('user create succesfully')
            // // Navigate(location?.state ? location.state : '/')
            console.log(res);
        })
        .catch(err => {
            toast.error(err.message)
        })
    }


    return (
        <div>
            <div className='divider'>  Continue With </div>
            <div>
                <button onClick={() => handleSocialLogin(googleSiginIn)}  className='btn w-full'>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocalLogin;