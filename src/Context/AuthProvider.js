import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);

    const auth = getAuth(app);


    const provider = new GoogleAuthProvider();


    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userEmailLogin = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }


    const updateUserProfile = (profile) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);

        })

        return ()=> unsubscribe();

    },[])


    const logOut = () =>{
        return signOut(auth);
    }



    const authInfo = {user,createUser,userEmailLogin,logOut,googleLogin,updateUserProfile,loading};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;