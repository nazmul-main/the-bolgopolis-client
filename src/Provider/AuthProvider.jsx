/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../Config/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

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

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

    }, []);
    console.log(user);









    const authentication = {
        googleSiginIn,
        createUser,
        signIn,
    }





    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;