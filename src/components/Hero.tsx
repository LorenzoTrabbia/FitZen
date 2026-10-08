import { motion } from "framer-motion";
import heroMockup from "../assets/mockup.svg";
import { ArrowDownRight, Check } from "lucide-react";

function Hero() {
    return (
        <section id="top" className="hero-section">
            <div className="page-shell hero-grid">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-copy"
                >
                    <p className="eyebrow"><span className="eyebrow-dot" />A calmer way to get fit</p>
                    <h1 className="display-title">Train smarter.<br /><em>Live better.</em></h1>
                    <p className="hero-lede">
                        FitZen brings workouts, nutrition, and progress into one focused space—so your routine feels easier to keep.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <a href="#features" className="button button-primary">Explore FitZen <ArrowDownRight size={18} aria-hidden="true" /></a>
                        <a href="#contact" className="button button-quiet">Talk to us</a>
                    </div>
                    <div className="hero-points" aria-label="FitZen capabilities">
                        <span><Check size={16} aria-hidden="true" /> Workouts</span>
                        <span><Check size={16} aria-hidden="true" /> Nutrition</span>
                        <span><Check size={16} aria-hidden="true" /> Progress</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-visual"
                >
                    <img
                        src={heroMockup}
                        alt="FitZen fitness app interface preview"
                        className="hero-mockup"
                    />
                </motion.div>
            </div>
            <a className="hero-scroll" href="#features">Scroll to explore <ArrowDownRight size={16} aria-hidden="true" /></a>
        </section>
    );
}

export default Hero;
