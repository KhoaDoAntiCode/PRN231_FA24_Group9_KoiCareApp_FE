import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Role } from "@/enum";
import { mapStringToRole } from "@/utils/convertRole";
import { UserDTOType } from "@/schema/auth.schema";
import decodeToken from "@/utils/decodeJWT";

type AuthProviderProps = {
    children: React.ReactNode;
};

interface UserDTO {
    id: string;
    emailAddress: string;
    fullName: string;
    phoneNumber: string;
    role: Role;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: UserDTOType | null;
    userRole: Role | null; // Added userRole here
    login: (token: string) => void;
    logout: () => void;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<UserDTO | null>(null);
    const [userRole, setUserRole] = useState<Role | null>(null); // Initialize userRole state

    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (token) {
          // Check if token was previously set, so it only navigates on fresh logins
          if (!isAuthenticated) handleLoginWithToken(token);
      }
  }, [isAuthenticated]); // Only check token on fresh logins
  
    const handleLoginWithToken = (token: string) => {
        try {
            const decodedToken = decodeToken(token);
            console.log(decodedToken);
            if (decodedToken) {const roleString = decodedToken["Role"];
                if (!roleString) throw new Error("Role is missing in the token");
                

                const role = mapStringToRole(roleString);

                const userData: UserDTO = {
                    id: decodedToken.Id,
                    emailAddress: decodedToken.Email,
                    fullName: decodedToken.FullName || "",
                    phoneNumber: decodedToken.PhoneNumber || "",
                    role: role,
                };
                
                setIsAuthenticated(true);
                setUser(userData);
                setUserRole(role); // Set userRole here

                HandleAfterTheLogin(userData);
            } else {
                throw new Error("Failed to decode the token");
            }
        } catch (error) {
            console.error("Error decoding token:", error);
            localStorage.removeItem("authToken");
            setIsAuthenticated(false);
            setUser(null);
            setUserRole(null); // Reset userRole on error
        }
    };

    const HandleAfterTheLogin = (user: UserDTO) => {
        if (hasRole(user, Role.Administrator)) {
            navigate("/admin-dashboard");
        } else if (hasRole(user, Role.Staff)) {
            navigate("/staff");
        } else {
            navigate("/");
        }
    };

    const hasRole = (user: UserDTO, requiredRole: Role): boolean => {
        return user.role === requiredRole;
    };

    const login = (token: string) => {
        localStorage.setItem("authToken", token);
        handleLoginWithToken(token);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
        setUser(null);
        setUserRole(null); // Reset userRole on logout
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};
