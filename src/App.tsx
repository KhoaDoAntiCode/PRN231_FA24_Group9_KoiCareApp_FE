import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './router/router';
import { Fragment } from 'react/jsx-runtime';
import RootLayout from './components/layouts/root-layout';
import { Suspense, useEffect, useState } from "react";
import { Root } from '@radix-ui/react-slot';
import  Home from './pages/Home';
import  About from './pages/About';
import LoginPage  from './pages/authentication/loginpage';
import RegisterPage from './pages/authentication/registerpage';

function App() {
    const [loading,setLoading] = useState<boolean>(true);
    return (
        // <BrowserRouter>
        //     <div className="App">
        //         {publicRoutes && publicRoutes.length > 0 ? (
        //             <Routes>
        //                 {publicRoutes.map((route, index) => {
        //                     const Page = route.component;
        //                     let Layout = RootLayout
        //                     if (route.layout) {
        //                         Layout = route.layout;
        //                     } else if (route.layout === null) {
        //                         Layout = Fragment;
        //                     }
        //                     return (
        //                         <Route
        //                             key={index}
        //                             path={route.path}
        //                             element={
        //                                 <Layout>
        //                                     <Page />
        //                                 </Layout>
        //                             }
        //                         />
        //                     );
        //                 })}
        //             </Routes>
        //         ) : (
        //             <p>No routes available.</p>
        //         )}
        //     </div>
        // </BrowserRouter> 
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Route>    
        </Routes>
    );
}

export default App;