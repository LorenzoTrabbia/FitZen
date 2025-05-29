import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-light-background dark:bg-dark-background ${!isOpen ? " bg-white/60 backdrop-blur-md shadow-md" : ""}`}>
                <div className={`text-xl font-bold text-light-text dark:text-dark-text transition-colors duration-300 ease-in-out ${isOpen ? "backdrop-blur-md text-white" : ""}`}>
                    FitZen
                </div>

                <button
                    className={`text-gray-900 w-10 h-10 relative focus:outline-none transition-colors duration-300 ease-in-out ${isOpen ? "backdrop-blur-md text-white" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-direction-col">
                        <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? "rotate-45" : "-translate-y-1.5"}`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? "opacity-0" : ""}`}></span>
                        <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? "-rotate-45" : "translate-y-1.5"}`}></span>
                    </div>
                </button>
            </nav>

            <div
                className={`fixed top-0 left-0 w-full h-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-md text-gray-900 
                    dark:text-gray-100 text-center flex-col items-center justify-center transition-opacity duration-300 ease-in-out z-40 flex 
                    ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <ul className="space-y-8 text-2xl font-medium">
                    <li><a href="#features" onClick={toggleMenu}>Features</a></li>
                    <li><a href="#pricing" onClick={toggleMenu}>Pricing</a></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
