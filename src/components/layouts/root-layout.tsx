import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

import { Outlet } from "react-router-dom"

export default function RootLayout() {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
            <Outlet />
        </main>

        <Footer />
    </div>
    );
  }
