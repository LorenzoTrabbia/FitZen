import boyImg from "../assets/boy.png";
import girlImg from "../assets/woman.png";
import womanImg from "../assets/woman2.png";
import manImg from "../assets/man.png";

import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "Alex Johnson",
        role: "Personal Trainer",
        text: "FitZen makes working out simple and effective. I feel stronger every week!",
        avatar: boyImg,
    },
    {
        id: 2,
        name: "Sarah Smith",
        role: "Yoga Instructor",
        text: "FitZen keeps me motivated and accountable. I can't imagine my life without it!",
        avatar: girlImg,
    },
    {
        id: 3,
        name: "Emily Davis",
        role: "Nutritionist",
        text: "I love the nutrition tracking feature. It helps me stay on top of my goals!",
        avatar: womanImg,
    },
    {
        id: 4,
        name: "Michael Brown",
        role: "Fitness Enthusiast",
        text: "The progress tracking is amazing. I can see how far I've come!",
        avatar: manImg,
    },
];

const cardVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8,
        },
    },
};

function Testimonials() {
    return (
        <div>
            <div className="bg-stone-50 text-black-">
                <div>
                    <motion.h2
                        className="text-4xl font-semibold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        What Users Say
                    </motion.h2>
                    <div
                        className="w-full overflow-x-auto overflow-y-hidden no-scrollbar shadow-md rounded-lg p-6"
                        style={{ maxWidth: "100vw" }}
                    >
                        <div className="mx-auto flex justify-start space-x-6 md:space-x-12 w-max">
                            {testimonials.map(({ id, name, role, text, avatar }) => (
                                <motion.div
                                    key={id}
                                    className="flex-shrink-0 bg-white rounded-lg shadow-md p-6 w-72 md:w-96 cursor-pointer"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <img
                                        src={avatar}
                                        alt={name}
                                        className="rounded-full w-16 h-16 mb-4 mx-auto"
                                    />
                                    <p className="text-gray-700 mb-4">&quot;{text}&quot;</p>
                                    <p className="font-semibold">{name}</p>
                                    <p className="text-sm text-gray-500">{role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials