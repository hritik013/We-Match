import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    //sign up 
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //update profile 
    const update = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    //get the user 
    useEffect(() => {
        onAuthStateChanged(auth, thisUser => {
            setLoading(false)
            setUser(thisUser)
        })
    }, [])
    const logOut = () => {
        return signOut(auth)
    }

    const GoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }


    const AuthInfo = { user, signUp, logIn, logOut, update, loading, GoogleSignIn }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}