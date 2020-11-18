import { authService } from "fbase";
import React, { useState } from "react";

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
   
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email") {
            setEmail(value)
        }else if(name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
            data = await authService.createUserWithEmailAndPassword(email, password); //create new Account
            } else {
            data = await authService.signInWithEmailAndPassword(email, password); //log in
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
            // console.log(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
        <>
        <form onSubmit={onSubmit} className="container">
        <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            required 
            value={email} 
            onChange={onChange}
            className="authInput"
            />
        <input 
            name="password" 
            type="password" 
            placeholder="Password" 
            required 
            value={password} 
            className="authInput"
            onChange={onChange}/>
        <input type="submit" value={newAccount ? "Create Account" : "Log in"  } />
    {error && <span className="authErrpr">{error}</span>}
    </form>
<span onClick={toggleAccount}>
    {newAccount ? "Sign in" : "Create Account"}
    </span></>
    )
};

export default AuthForm;