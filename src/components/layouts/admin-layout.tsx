import { useAuthContext } from "@/context/AuthContext";
import UnauthorizedPage from "@/pages/unauthorized";
import AdminNavbar from "../navbar/NavbarAdmin";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import { Role } from "@/enum";


export default function AdminLayout()  {
    const { isAuthenticated, userRole } = useAuthContext();

    // Check if the user is authenticated and has the Administrator role
    if (!isAuthenticated || userRole !== Role.Administrator) {
        return <UnauthorizedPage />;
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