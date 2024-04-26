import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // create user with email and password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        createUser,
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