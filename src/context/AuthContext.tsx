// import React ,{ createContext,useContext, useState ,useEffect, useLayoutEffect} from "react";

// interface AuthContextType {
//     token: string | null;
//     setToken : (token: string | null) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({children} : {children: React.ReactNode}) => {
//     const [user, setUser] = useState(null);
//     const [token,setToken] = useState<string | null>(localStorage.getItem('token'));

//     useEffect(() => {
//         if (token) {
//             localStorage.setItem('token', token);
//         } else {
//             localStorage.removeItem('token');
//         }
//     }, [token]);

//     // const login = (userData, jwtToken) => {
//     //     setUser(userData);
//     //     setToken(jwtToken);
//     // };

//     // const logout = () => {
//     //     setUser(null);
//     //     setToken(null);
//     // };
//     return (
//         <AuthContext.Provider value = {{token,setToken}} >
//             {children}
//         </AuthContext.Provider>    
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// }