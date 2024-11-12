import { Link } from 'react-router-dom';
import logo from '../../assets/images/pawsitive.png';
import Avatar1 from '../avatar';
interface NavbarProps {
    label: string;
    path: string;
}

const navItems: NavbarProps[] = [
    { 
        label: 'HOME', 
        path: '/' 
    },
    { 
        label: 'ADOPT', 
        path: '/petlist' 
    },
    { 
        label: 'DONATE', 
        path: '/donate' 
    },
    { 
        label: 'EVENTS',
        path:  '/events'
    },
    // { 
    //     label: 'ABOUT', 
    //     path: '/about' 
    // },
    // { 
    //     label: 'SHELTERLIST', 
    //     path: '/shelterlist' 
    // },
];

const Navbar = () => {
    
    return (
        <nav className="bg-color-primary/10 shadow-md w-full h-24">
            <div className="container mx-auto flex justify-between items-center h-full">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="Pawsitive" className="h-24 w-24" />
                </Link>
                <ul className="flex space-x-6">
                    {navItems.map((item) => (
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

export default Navbar;
