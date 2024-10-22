import { Link } from 'react-router-dom';
import logo from '../../assets/images/pawsitive.png';
import Avatar1 from '../avatar';

interface NavbarProps {
    label: string;
    path: string;
}

const adminNavItems: NavbarProps[] = [
    { 
        label: 'Dashboard', 
        path: '/admin-dashboard' 
    },
    { 
        label: 'Manage Shelter', 
        path: '/admin/manage-shelter' 
    },
    { 
        label: 'Manage Pets', 
        path: '/admin/manage-pets' 
    },
    { 
        label: 'Manage Adoption Forms', 
        path: '/admin/manage-adoption-forms' 
    },
    { 
        label: 'Manage Events', 
        path: '/admin/events' 
    },
];

const AdminNavbar = () => {
    return (
        <nav className="bg-color-primary/10 shadow-md w-full h-24">
            <div className="container mx-auto flex justify-between items-center h-full">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Pawsitive Admin" className="h-24 w-24" />
                </Link>
                <ul className="flex space-x-6">
                    {adminNavItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className="text-gray-700 hover:text-red-500 transition duration-300"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Avatar1 />
            </div>
        </nav>
    );
};

export default AdminNavbar;
