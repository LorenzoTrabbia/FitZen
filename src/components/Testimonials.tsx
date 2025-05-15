function Testimonials() {
    return (
        <div>
            <div className="bg-stone-50 text-black-">
                <div >
                    <h1 className="text-4xl font-semibold mb-8 text-center">What Users Say</h1>
                    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                        <div
                            className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10"
                        >
                            <div className="inline-block px-3">
                                <div className="bg-white shadow-md rounded-lg p-6 border-indigo-500 border-2 inline-block px-3
                                    w-64 max-w-xs overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                >
                                    {/* <img src={boyImg} alt="User" className="rounded-full w-14 h-14 mb-4" /> */}
                                    <p className="text-gray-700">"FitZen makes working out simple and effective. I feel stronger every week!"</p>
                                    <p className="text-gray-500 mt-4">- Alex Johnson</p>
                                </div>
                            </div>
                            <div className="inline-block px-3">
                                <div className="bg-white shadow-md rounded-lg p-6 border-indigo-500 border-2
                                    w-64 max-w-xs overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                >
                                    <p className="text-gray-700">"I love the nutrition tracking feature. It helps me stay on top of my goals!"</p>
                                    <p className="text-gray-500 mt-4">- Sarah Smith</p>
                                </div>
                            </div>
                            <div className="inline-block px-3">
                                <div className="bg-white shadow-md rounded-lg p-6 border-indigo-500 border-2
                                    w-64 max-w-xs overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                >
                                    <p className="text-gray-700">"The progress tracking is amazing. I can see how far I've come!"</p>
                                    <p className="text-gray-500 mt-4">- Michael Brown</p>
                                </div>
                            </div>
                            <div className="inline-block px-3">
                                <div className="bg-white shadow-md rounded-lg p-6 border-indigo-500 border-2
                                    w-64 max-w-xs overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
                                >
                                    <p className="text-gray-700">"FitZen keeps me motivated and accountable. I can't imagine my life without it!"</p>
                                    <p className="text-gray-500 mt-4">- Emily Davis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials