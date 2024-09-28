import banner from '../../../assets/images/tải xuống.svg';

const Hero = () => {
    return (
        <div className="relative w-full h-[600px]">
            <div className="absolute inset-0">
                <img
                    src={banner}
                    alt="Happy Corgi running in a field"
                    className="w-full h-full object-cover object-center scale-x-[-1]"
                />
            </div>
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-12 lg:px-24">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                    PAWSITIVE
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat.
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full text-lg transition duration-300">
                    SEE MORE
                </button>
            </div>
        </div>
    );
};

export default Hero;
