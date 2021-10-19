import { getAuth, signInWithPopup, GoogleAuthProvider , signOut , onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import iniatializeAuthentication from "../SignIn/Firebase/Firebase.init";
iniatializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
      const unsubscribed =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }else{
                setUser({});
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    },[]);

    const googleSignIn = () =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                setError('');
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            }).finally(() => setIsLoading(false));
    }

    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser([]);
          }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          }).finally(() => setIsLoading(false));
    }

    return{
        user,
        error,
        isLoading,
        googleSignIn,
        handleSignOut
    }
};
export default useFirebase;
