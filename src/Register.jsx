import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./assets/firebase";
import { NavLink } from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            });

        setEmail("")
        setPassword("")
    };

    return (
        <div className="signInParent">
        <div className="sign-in-container">
            <div className="inSection">
            <div className="leftSide">
             <div className="logo">
                <i className="fa-solid fa-car" ></i>
                <span className="logo-text">Auto Track</span>
              </div>
             </div>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Sign Up</button>
            </form>
            <p><NavLink exact to="/login">Have an account?Login</NavLink></p>
            </div>
        </div>
        </div>
    );
};

export default Register;