function Footer() {
    return (
        <div>
            <div className="bg-indigo-100 text-black-50 py-10 px-9 flex items-center justify-left">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-semibold mb-8 text-center">FitZen</h1>
                    <p className="text-lg mb-8 text-center">© 2025 FitZen. All rights reserved.</p>
                    <div className="flex justify-center space-x-4">
                        <a className="text-gray-500 hover:text-gray-700">Privacy Policy</a>
                        <a className="text-gray-500 hover:text-gray-700">Terms of Service</a>
                        <a className="text-gray-500 hover:text-gray-700" href="#contact">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer