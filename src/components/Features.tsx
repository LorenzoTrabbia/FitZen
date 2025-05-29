import { motion } from "framer-motion";

function Features() {
    return (
        <div className="bg-stone-50 text-black-50 py-20 px-9 flex items-center justify-left" id="features">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    className="text-4xl font-semibold mb-8 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Features
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white shadow-md rounded-lg p-6 border-indigo-500 border-2">
                        <h2 className="text-xl font-semibold mb-2">Personalized Workouts</h2>
                        <p className="text-gray-700">Tailored workout plans based on your fitness level and goals.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 border-indigo-500 border-2">
                        <h2 className="text-xl font-semibold mb-2">Nutrition Tracking</h2>
                        <p className="text-gray-700">Log your meals and track your macros with ease.</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 border-indigo-500 border-2">
                        <h2 className="text-xl font-semibold mb-2">Progress Tracking</h2>
                        <p className="text-gray-700">Monitor your progress with detailed analytics and reports.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features