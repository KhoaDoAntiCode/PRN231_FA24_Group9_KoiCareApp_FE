import { lazy } from "react";
const About = lazy (
    () => import('../pages/about')
);
const Home = lazy(
    () => import('../pages/home/Home')
);
const LoginPage = lazy(
    () => import('@/pages/authentication/loginpage')
);
const PetDetailsPage = lazy(
    () => import('@/components/pet/pet-details')
);
const ApplicationList = lazy(
    () => import('@/components/adoption/application-list')
);
const AdminDashboard = lazy(
    () => import('@/pages/admin')
);

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

// Admin-specific routes for better modularity
export const ROUTE_PATHS_ADMIN = {
    DASHBOARD: '/admin-dashboard',
};

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
