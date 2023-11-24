import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { firebaseGithubProvider, firebaseGoogleProvider } from "../../firebase/providers";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    const logOut = () => signOut(auth)

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, firebaseGoogleProvider)
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, firebaseGithubProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authContectInfos = {
        user, loading, logIn, logOut, signUp, googleLogin, githubLogin
    }

    return (
        <AuthContext.Provider value={authContectInfos}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;