import React from 'react';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import './SignIn.css';

const SignIn = () => {
    const {user, googleSignIn} = useFirebase();
    console.log(user);
    return (
        <div>
            <div class="signIn-container">
                    <div class="form-container">
                                <div class="form-top-container">
                                    <h5>already members</h5>
                                </div>
                                <div class="form-items-container">
                                    <input type="text" class="form-input first-input" placeholder="Enter your name" name="Name"/>
                                    <div class="second-input">
                                        <input type="password" class="form-input second-input" name="Password" id="" placeholder="Enter Your Password"/>
                                    </div>
                                    <button type="submit">Sign in</button>
                                </div>

                        <div class="form-bottom-container">
                            <p><small>Don't have an account yet?</small></p>
                            <p>Create an account</p>
                        </div>
                        <button onClick={googleSignIn} className="google-btn">Sign In With Google</button>
                    </div>                
            </div>
        </div>
    );
};

export default SignIn;