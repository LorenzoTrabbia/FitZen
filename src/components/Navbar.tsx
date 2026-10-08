import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-canvas/90 backdrop-blur-md">
            <nav className="page-shell flex h-18 items-center justify-between" aria-label="Primary navigation">
                <a href="#top" className="font-display text-xl font-bold tracking-tight text-ink" onClick={closeMenu}>
                    Fit<span className="text-brand">Zen</span>
                </a>

                <div className="desktop-nav items-center gap-8">
                    <a className="nav-link" href="#features">Features</a>
                    <a className="nav-link" href="#approach">Approach</a>
                    <a className="button button-small button-dark" href="#contact">Get in touch</a>
                </div>

                <button
                    type="button"
                    className="icon-button"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                >
                    {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                </button>
            </nav>

            <div id="mobile-navigation" className={`mobile-menu ${isOpen ? "mobile-menu-open" : ""}`}>
                <a href="#features" onClick={closeMenu}>Features</a>
                <a href="#approach" onClick={closeMenu}>Approach</a>
                <a href="#contact" onClick={closeMenu}>Get in touch</a>
            </div>
        </header>
    );
};

export default Navbar;
