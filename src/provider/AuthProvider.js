import React, {  createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        setTheme(JSON.parse(window.localStorage.getItem('theme') || 'false'));
    }, []);

    const handleChange = () => {
        setTheme(!theme);
        window.localStorage.setItem('theme', JSON.stringify(!theme));
    }
    const authProvider ={
        theme,
        handleChange
    }
    return (
        <AuthContext.Provider value={authProvider}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;