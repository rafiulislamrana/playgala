import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, updateProfile, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from 'react-toastify';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);;
    }

    const update = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        });
        location.reload()
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("I am logged in", currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const HandleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                toast("You Logged in Successfully!",res)
            })
            .catch(err => console.error(err))
    }
    const HandleGoogleRegi = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                toast("Your Account Created Successfully!",res)
            })
            .catch(err => console.error(err))
    }


    const authInfo = {
        user,
        createUser,
        update,
        logOut,
        login,
        loading,
        HandleGoogle,
        HandleGoogleRegi
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;