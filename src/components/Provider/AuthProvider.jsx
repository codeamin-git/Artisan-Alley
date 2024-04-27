import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()

    // create user with email and password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user with email and password
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // log out
    const logOut = ()=>{
        setUser(null)
        signOut(auth)
        .then(()=>{
            console.log(user.email, 'signed out successfully');
            toast.success('You are logged out.')
        })
    }

    // observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
        })
        return ()=> unSubscribe()
    }, [])
    
    const authInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;