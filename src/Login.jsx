import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./assets/firebase"
import { useNavigate } from "react-router-dom";

const Login = ({ changeForm }) => {
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
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1>Log In to your Account</h1>
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
            <button onClick={() => { changeForm("register") }} >Don't have an account</button>
        </div>
    );
};

export default Login;