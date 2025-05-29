import { motion } from "framer-motion";

function Pricing() {
    return (
        <div>
            <div className="bg-stone-50 text-black-50 py-20 px-9 flex items-center justify-left" id="pricing">
                <div className="max-w-7xl mx-auto">
                    <motion.h2
                        className="text-4xl font-semibold mb-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Pricing
                    </motion.h2>
                    <motion.p
                        className="text-gray-600 mb-10 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Choose a plan that fits your needs.
                    </motion.p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white shadow-md rounded-lg p-6 border-indigo-500 border-2">
                            <h2 className="text-xl font-semibold mb-2">Basic Plan</h2>
                            <p className="text-gray-700">$9.99/month</p>
                            <ul className="list-disc list-inside mt-4">
                                <li>Access to all workouts</li>
                                <li>Nutrition tracking</li>
                                <li>Community support</li>
                            </ul>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 border-indigo-500 border-2">
                            <h2 className="text-xl font-semibold mb-2">Pro Plan</h2>
                            <p className="text-gray-700">$19.99/month</p>
                            <ul className="list-disc list-inside mt-4">
                                <li>All Basic Plan features</li>
                                <li>Personalized workout plans</li>
                                <li>Progress tracking</li>
                            </ul>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 border-indigo-500 border-2">
                            <h2 className="text-xl font-semibold mb-2">Premium Plan</h2>
                            <p className="text-gray-700">$29.99/month</p>
                            <ul className="list-disc list-inside mt-4">
                                <li>All Pro Plan features</li>
                                <li>One-on-one coaching</li>
                                <li>Exclusive content and resources</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing