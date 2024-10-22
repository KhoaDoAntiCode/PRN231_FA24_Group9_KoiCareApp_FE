import { lazy } from "react";
const About = lazy (
    () => import('../pages/about')
);
import Home from '../pages/home/Home';
import LoginPage from "@/pages/authentication/loginpage";
import PetDetails from "@/components/pet/pet-details/pet-detail-section";
import PetDetailsPage from "@/components/pet/pet-details";
import { App } from "antd";
import ApplicationList from "@/components/adoption/application-list";
import AdminDashboard from "@/pages/admin";
// import RegisterPage from "@/pages/authentication/registerpage";
 const routes= {
    home: '/',
    about: '/about',
    login: '/login',
    id: '/@:nickname',
    adopt: '/adopt',
    search: '/search',
    register: '/register',
    PetDetails: '/petdetails',
    AdoptionList: '/adoptionlist',
    AdminDashboard : '/admin-dashboard'
};

export const ROUTE_PATHS_ADMIN = {
    DASHBOARD: '/dashboard',

}


interface RouteObject {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType<{ children: React.ReactNode }>;
}
const publicRoutes: RouteObject[] = [
    { path: routes.home, component: Home },
    { path: routes.about, component: About },
    { path: routes.login, component: LoginPage},

    { path: routes.PetDetails, component: PetDetailsPage},
    { path: routes.AdoptionList, component: ApplicationList},
    { path: routes.AdminDashboard,component: AdminDashboard}
];

const privateRoutes: RouteObject[] = [
    // { path: routes.AdminDashbaord,component: AdminDashboard}
];

export { routes, publicRoutes, privateRoutes };
