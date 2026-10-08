function Footer() {
    return (
        <footer className="site-footer">
            <div className="page-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <a href="#top" className="font-display text-xl font-bold tracking-tight">Fit<span className="text-brand">Zen</span></a>
                <p>© {new Date().getFullYear()} FitZen. A focused fitness companion.</p>
                <a href="#contact" className="footer-link">Contact</a>
            </div>
        </footer>
    )
}

export default Footer