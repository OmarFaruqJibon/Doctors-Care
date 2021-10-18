import { getAuth, signInWithPopup, GoogleAuthProvider , signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import iniatializeAuthentication from "../SignIn/Firebase/Firebase.init";
iniatializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
          });
    },[]);

    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);

            });
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser([]);
          }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
    }
    return{
        user,
        error,
        googleSignIn,
        handleSignOut
    }
};
export default useFirebase;
