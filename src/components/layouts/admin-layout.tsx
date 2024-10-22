import { useAuthContext } from "@/context/AuthContext";
import UnauthorizedPage from "@/pages/unauthorized";
import AdminNavbar from "../navbar/NavbarAdmin";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";


export default function AdminLayout()  {
    const { isAuthenticated, login, logout } = useAuthContext();


    if (!isAuthenticated) {
        return <UnauthorizedPage />
    }

    return (
        <div className="flex flex-col min-h-screen">
            <AdminNavbar/>

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}