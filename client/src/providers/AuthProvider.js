import React, { useState } from 'react';
import axios from 'axios';
import useNavigation from 'react-router-dom';

export const AuthContext = React.createContext();
export const AuthConsumer =  AuthContext.Consumer;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const navigate = useNavigation()

    handleRegister = () => {
        axios.post("/api/auth", user)
            .then( res => {
                setUser(res.data.data);
                navigate("/");
            })
            .catch( err => {
                console.log(err);
            })
    }

    handleLogin = () => {
        axios.post("/api/auth/sign_in", user)
            .then( res => {
                setUser(res.data.date);
                navigate("/");
            })
            .catch( err => {
                console.log(err);
            })
    }

    handleLogout = () => {
        axios.delete("/api/auth/sign_out")
            .then( res => {
                setUser(null)
                navigate("/login")
            })
            .catch( err => {
                console.log(err)
            })
    }

    return (
        <AuthContext.Provider value={{
            user,
            setUser: (user) => setUser(user),
            handleRegister,
            handleLogin,
            handleLogout,
            authenticated: user !== null,
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;