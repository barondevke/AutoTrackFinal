import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "./assets/firebase"
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()


    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert(`Welcome back ${email}`)
                navigate('/')
            })
            .catch(() => {
                alert("User not Found");
            });
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
            <form onSubmit={signIn}>
                <h1>Log In</h1>
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
                <button type="submit">Log In</button>
            </form>
           <p><NavLink exact to="/register">Don't have an account? Register</NavLink></p>
        </div>
        </div>
        </div>
    );
};

export default Login;