/* eslint-disable react/prop-types */
import  { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../Config/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    /* Google Sigin In  */
    const googleSiginIn = () => {
     return signInWithPopup(auth, googleProvider)
    }

    /* SignUp  user*/
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* sign in user */
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }











    const authentication = {
        googleSiginIn,
        createUser,
        signIn,
    }





    return (
        <AuthContext.Provider value={authentication }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;