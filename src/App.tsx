import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './router/router';
import { Fragment } from 'react/jsx-runtime';
import RootLayout from './components/layouts/root-layout';
import { Suspense, useEffect, useState } from "react";
import { Root } from '@radix-ui/react-slot';
import  Home from './pages/home/Home';
import  About from './pages/about';
import LoginPage  from './pages/authentication/loginpage';
import RegisterPage from './pages/authentication/registerpage';
import PetDetailsPage from './components/pet/pet-details';
import PetList from './components/pet/petcards/PetList';
import AdoptionForm from './components/adoption/adoption-form';
import AboutPage from './pages/about';
import EventPage from './pages/event';
import SuccessPage from './pages/success';
import ApplicationList from './components/adoption/application-list';
import ShelterList from './pages/admin/shelters';
import AdminDashboard from './pages/admin';


function App() {
    const [loading,setLoading] = useState<boolean>(true);
    return (
            // <div className="App">
            //     {publicRoutes && publicRoutes.length > 0 ? (
            //         <Routes>
            //             {publicRoutes.map((route, index) => {
            //                 const Page = route.component;
            //                 let Layout = RootLayout
            //                 if (route.layout) {
            //                     Layout = route.layout;
            //                 } else if (route.layout === null) {
            //                     Layout = Fragment;
            //                 }
            //                 return (
            //                     <Route
            //                         key={index}
            //                         path={route.path}
            //                         element={
            //                             <Layout>
            //                                 <Page />
            //                             </Layout>
            //                         }
            //                     />
            //                 );
            //             })}
            //         </Routes>
            //     ) : (
            //         <p>No routes available.</p>
            //     )}
            // </div>
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* !Pet Route */}
                <Route path="/petlist"    element={<PetList />} />
                <Route path="/petdetails/:id" element={<PetDetailsPage />} />

                {/* Adoption Form Route */}
                <Route path="/adoption/:id" element={<AdoptionForm />} />
                <Route path="/adoptionlist" element={<ApplicationList />} />

                <Route path='/events' element={<EventPage />} />

                <Route path='/success' element={< SuccessPage />} />

                <Route path='/shelterlist' element={<ShelterList />} />
                <Route path='/admin-dashboard' element={<AdminDashboard />} />
            </Route>    
        </Routes>
    );
}

export default App;