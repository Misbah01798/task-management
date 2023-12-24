import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, applyActionCode, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // const createUser = (name, photo, email, password) => {
    //     setLoading(true);
    //     return createUserWithEmailAndPassword(auth, name, photo, email, password);
    // }
    const createUser = async (name, photo, email, password) => {
        setLoading(true);

        try {
            
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        
            const user = userCredential.user;

            await updateProfile(user, { displayName: name, photoURL: photo });

            setLoading(false);

            return userCredential;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle =() =>{
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user:', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        signInWithGoogle,
        createUser,
        signIn,
        logOut,
        updateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
