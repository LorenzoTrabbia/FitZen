import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section className="bg-stone-50 py-16 px-4 md:px-8" id="contact">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    className="text-4xl font-semibold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    className="text-gray-600 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Have a question or want to work together? Fill out the form and I'll get back to you soon.
                </motion.p>

                <form className="space-y-6 text-left">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            required
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-stone-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-stone-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Message</label>
                        <textarea
                            rows={5}
                            required
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-stone-500"
                            placeholder="Your message..."
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-stone-800 text-white px-6 py-3 rounded-md hover:bg-stone-600 transition-all"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
