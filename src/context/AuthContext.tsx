import React ,{ useContext, useEffect, useState } from "react"

import { useNavigate } from "react-router-dom";
import { Role } from '@/enum';
import { mapStringToRole } from '@/utils/convertRole';
import { UserDTOType  } from "@/schema/auth.schema"
import decodeToken from '@/utils/decodeJWT';


type AuthProviderProps = {
    children: React.ReactNode
  }
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
  // setUser: (user: UserDTOType | null) => void;
  login: ( token: string) => void;
  logout: () => void;
};

export const AuthContext = React.createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState<UserDTO | null>(null)

    const navigate = useNavigate()

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (token) {
          handleLoginWithToken(token);
      }
  }, []);

  const handleLoginWithToken = (token: string) => {
    try {
        const decodedToken = decodeToken(token);
        if (decodedToken) {
            console.log("Decoded Token:", decodedToken); // Log the decoded token for debugging

            // Extract the role from the token using the claim key
            const roleString = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
            if (!roleString) {
                throw new Error("Role is missing in the token");
            }

            // Map the role string to the Role enum
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
        } else {
            throw new Error("Failed to decode the token");
        }
    } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        setUser(null);
    }
};


    const login = (token: string) => {
      localStorage.setItem('authToken', token);
      handleLoginWithToken(token);
  };

    const logout = () => {
      localStorage.removeItem('authToken');
      setIsAuthenticated(false);
      setUser(null);
      navigate('/login');
  };
  
    return (
      <AuthContext.Provider
        value={{ isAuthenticated, user, login, logout }}
      >
        {children}
      </AuthContext.Provider>
    )
  }
  
  export default AuthProvider
  
  export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
      throw new Error("useAuthContext must be used within an AuthProvider")
    }
    return context
  }