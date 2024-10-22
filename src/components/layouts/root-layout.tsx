import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';

import { Outlet } from "react-router-dom"
// interface DefaultLayoutProps {
//     children: React.ReactNode;
// }

// const DefaultLayout: React.ComponentType<DefaultLayoutProps> = ({
//     children,
// }) => {
//     return (
//         <div className="flex flex-col h-screen">
//             <Navbar />
//                 <main className="flex-grow">
//                     {children}
//                 </main>
//             <Footer />
//         </div>
//     );
// };

// export default DefaultLayout;

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
