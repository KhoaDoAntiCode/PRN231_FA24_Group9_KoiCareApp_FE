import { useAuthContext } from "@/context/AuthContext";
import UnauthorizedPage from "@/pages/unauthorized";


export default function AdminLayout()  {
    const { isAuthenticated, login, logout } = useAuthContext();


    if (!isAuthenticated) {
        return <UnauthorizedPage />
    }

    return (
        <div>
            Admin Layout
        </div>
    )
}