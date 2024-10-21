import { jwtDecode } from "jwt-decode";

interface DecodedToken {
    Id: string;
    Email: string;
    role: number;
    exp: number; // Expiration time
    iss: string; // Issuer
    aud: string; // Audience
    [key: string]: any; // Other fields that may be present
}

export default function decodeToken(token: string): DecodedToken | null {
    try {
        // Decode the token using jwt-decode
        const decoded = jwtDecode<DecodedToken>(token);
        return decoded;
    } catch (error) {
        console.error("Failed to decode token:", error);
        return null;
    }
}


