import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../../../assets/images/pawsitive.png';
import footer from '../../../assets/images/footer.png';
const Footer = () => {
    return (
        <footer className="bg-white relative">
            <div className="relative h-[301px] w-full">
                <img
                    src={footer}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-around ">
                    <h2 className="text-white text-4xl font-bold mb-4">
                        YOU WANT TO HELP?
                    </h2>
                    <button className="bg-color-secondary text-white px-8 py-2 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300">
                        DONATE
                    </button>
                </div>
                <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 1440 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 50C120 30 240 20 360 30C480 40 600 70 720 80C840 90 960 80 1080 60C1200 40 1320 30 1440 40V100H0V50Z"
                        fill="white"
                    />
                </svg>
            </div>
            <div className="container mx-auto px-4 py-8 relative">
                <div className="flex justify-center items-center gap-6">
                    <div className="w-full md:w-1/4 mb-6 md:mb-0 ml-10">
                        <img src={logo} alt="Pawsitive" className="" />
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0 ml-10">
                        <h3 className="font-bold text-red-500 mb-2 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500">
                            About us
                        </h3>
                        <p className="text-sm text-gray-600 mt-4">
                            Group of young Vietnamese and international
                            volunteers, working for the love of dogs
                        </p>
                    </div>
                    <div className="w-full md:w-1/4 mb-6 md:mb-0 ml-10">
                        <h3 className="font-bold text-red-500 mb-2 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-red-500">
                            Contact
                        </h3>
                        <p className="text-sm text-gray-600 mt-4">
                            📞 (+84)123 456 6789
                        </p>
                        <p className="text-sm text-gray-600">
                            ✉️ pawsitive@gmail.com
                        </p>
                        <p className="text-sm text-gray-600">
                            📍 Ho Chi Minh - Viet Nam
                        </p>
                    </div>

                    <div className="w-full md:w-1/4 mb-6 md:mb-0 flex ml-10">
                        <a
                            href="#"
                            className="text-red-500 hover:text-red-600 mx-2"
                        >
                            <FaYoutube size={40} />
                        </a>
                        <a
                            href="#"
                            className="text-red-500 hover:text-red-600 mx-2"
                        >
                            <FaFacebook size={40} />
                        </a>
                        <a
                            href="#"
                            className="text-red-500 hover:text-red-600 mx-2"
                        >
                            <FaInstagram size={40} />
                        </a>
                    </div>
                </div>

                <div className="text-center mt-8 text-sm text-gray-500">
                    © 2024 PAWSITIVE. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
