function Features() {
    return (
        <div className="bg-stone-50 text-black-50 pb-20 px-9 flex items-center justify-left">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-semibold mb-8 text-center">Features</h1>
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