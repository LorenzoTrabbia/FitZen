function Hero() {
    return (
        <div>
            <div className="bg-stone-50 text-black-50 py-20 px-9 flex items-center justify-left mt-17">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-semibold mb-4">Train smarter.<br />Live better.</h1>
                    <p className="text-lg mb-8">FitZen is your all-in-one fitness companion: workouts, nutrition, and motivation - in your pocket.</p>
                    <a href="#pricing" type="button" className="text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 
                        hover:bg-gradient-to-br focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        Join the Beta
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero