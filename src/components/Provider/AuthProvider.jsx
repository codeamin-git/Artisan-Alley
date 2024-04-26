import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    // create user with email and password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user with email and password
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            console.log(user.email, 'signed out successfully');
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