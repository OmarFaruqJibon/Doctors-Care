import React, { useState } from 'react';
import { getAuth,  createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import useAuth from '../../hooks/useAuth';
import './SignIn.css';

const SignIn = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [logIn,setLogIn] = useState(false);
    const auth = getAuth();
    

    const handleEmail =(e)=> {
        setEmail(e.target.value);
    }

    const handlePassword =(e)=> {
        setPassword(e.target.value);
    }
    const handleUserName =(e)=> {
        setName(e.target.value);
    }

    const toggleLogIn =(e) =>{
        setLogIn(e.target.checked);
    }

    const handleRegistration= e => {
        e.preventDefault();
        if(password.length<6){
            setError('Password should have at least 6 characters');
            return;
          }
          if(logIn){
            processLogIn(email,password);
          }
          else{
            createNewUser(email,password);
          }
          
      }

      const createNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
          .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            setUserName();
          }).catch(err => {
           setError(err.message);
          })
      }

      const processLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setError('');
        }).catch(err => {
          setError(err.message);
        })
      }

      const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
          }).catch((err) => {
            setError(err.message);
          });
      }



    const {googleSignIn} = useAuth();
    return (
        <div>
            <h4 className="text-danger App">{error}</h4>
            <form onSubmit={handleRegistration} className="mx-5">
            <div class="signIn-container">
                    <div class="form-container">
                                <div class="form-top-container">
                                    <h5>{logIn ? 'Sign In' : 'Register'}</h5>
                                </div>
                                <div class="form-items-container">

                                    {!logIn && <input onBlur={handleUserName} type="text" class="form-input first-input" placeholder="Enter your name" name="Name" required/>}
                                    
                                    <input onBlur={handleEmail} type="email" class="form-input first-input" placeholder="Enter your email" name="Email" required/>

                                    <div class="second-input">
                                        <input onBlur={handlePassword} type="password" class="form-input second-input" name="Password" id="" placeholder="Enter Your Password" required/>
                                    </div>
                                    <button type="submit">{logIn ? 'Sign In' : 'Register'}</button>

                                   
                                </div>

                        <div class="form-bottom-container">
                            <p><small>Don't have an account yet?</small></p>
                            <input onChange={toggleLogIn} className="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label className="form-check-label mb-2" htmlFor="gridCheck1">
                            Already registered?
                            </label>

                            {/* <button>Create an account</button> */}
                        </div>
                        <button onClick={googleSignIn} className="google-btn">Sign In With Google</button>
                    </div>
            </div>
            </form>
        </div>
    );
};

export default SignIn;