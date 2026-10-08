import { useState } from "react";
import type { FormEvent } from "react";

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="section section-light" id="approach">
            <div className="page-shell contact-grid">
                <div>
                    <p className="eyebrow">A better baseline</p>
                    <h2 className="section-title text-ink">Make space for<br /><span>your well-being.</span></h2>
                    <p className="section-intro text-muted">Questions, ideas, or feedback? Send a note and help shape a more thoughtful fitness experience.</p>
                </div>
                <form className="contact-form" id="contact" onSubmit={handleSubmit}>
                    <p className="demo-notice">
                        <span aria-hidden="true">Demo</span>
                        This form is for presentation only and is not connected to an inbox.
                    </p>
                    <div className="field-group">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
                    </div>
                    <div className="field-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
                    </div>
                    <div className="field-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={4} required placeholder="What is on your mind?" />
                    </div>
                    <button className="button button-dark w-full sm:w-auto" type="submit">Send message</button>
                    {submitted && <p className="form-success" role="status">Demo only — this form does not send messages.</p>}
                </form>
            </div>
        </section>
    );
};

export default Contact;
