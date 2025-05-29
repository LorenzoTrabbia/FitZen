import { motion } from "framer-motion";
import heroMockup from "../assets/mockup.svg";

function Hero() {
    return (
        <section className="relative bg-stone-50 pt-24 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                        Train smarter.<br />Live better.
                    </h1>
                    <p className="text-lg text-gray-700 mb-8">
                        FitZen is your all-in-one fitness companion: workouts, nutrition, and motivation — in your pocket.
                    </p>
                    <a
                        href="#pricing"
                        className="inline-block text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 
                        hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800 
                        font-medium rounded-lg text-sm px-6 py-3 text-center"
                    >
                        Join the Beta
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden lg:block lg:w-1/2"
                >
                    <img
                        src={heroMockup}
                        alt="App mockup"
                        className="max-w-full h-auto"
                    />
                </motion.div>
            </div>

            <div className="absolute top-[-80px] right-[-120px] w-[300px] h-[300px] bg-indigo-100 rounded-full opacity-50 blur-3xl z-0 hidden lg:block" />
        </section>
    );
}

export default Hero;
