import { motion } from "framer-motion";
import { BarChart3, Dumbbell, Leaf } from "lucide-react";

const features = [
    {
        icon: Dumbbell,
        number: "01",
        title: "Personalized workouts",
        text: "Build a routine around your fitness level and goals, with sessions that fit the way you move.",
    },
    {
        icon: Leaf,
        number: "02",
        title: "Nutrition tracking",
        text: "Log meals and keep an eye on your macros without turning everyday choices into a chore.",
    },
    {
        icon: BarChart3,
        number: "03",
        title: "Progress tracking",
        text: "See your consistency over time with a clear view of the progress you are making.",
    },
];

function Features() {
    return (
        <section className="section section-dark" id="features">
            <div className="page-shell">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Your routine,<br /><span>in one place.</span>
                </motion.h2>
                <p className="section-intro">The essentials for building a healthier rhythm, designed to stay clear when life gets busy.</p>
                <div className="feature-grid">
                    {features.map(({ icon: Icon, number, title, text }) => (
                        <motion.article
                            key={number}
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="feature-card-top"><Icon size={22} aria-hidden="true" /><span>{number}</span></div>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features