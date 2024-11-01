import {  Route, Routes } from 'react-router-dom';
import RootLayout from './components/layouts/root-layout';
import { useState } from "react";
import  Home from './pages/home/Home';
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
import AdminLayout from './components/layouts/admin-layout';
import EventDetailsPage from './components/events/event-details/';


function App() {
    const [loading,setLoading] = useState<boolean>(true);
    return (
<Routes>
    {/* User Routes */}
    <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/petlist" element={<PetList />} />
        <Route path="/petdetails/:id" element={<PetDetailsPage />} />
        <Route path="/adoption/:id" element={<AdoptionForm />} />
        <Route path="/adoptionlist" element={<ApplicationList />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/shelterlist" element={<ShelterList />} />
    </Route>    

    {/* Admin Routes */}
    <Route element={<AdminLayout />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* Uncomment and add additional admin routes here */}
    </Route>
</Routes>

    );
}

export default App;