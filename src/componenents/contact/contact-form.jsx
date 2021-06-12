import React from "react";

import * as styles from "./contact-form.module.css";

export default function ContactForm() {
    return (
        <div>
            <h1 className={styles.title}>contact</h1>
            <h2>Send me an email: </h2>
            <form action="https://mtcuuh40qb.execute-api.us-east-1.amazonaws.com/dev" method="post" id="contact-form">
                <input type="hidden" name="_to" value="7328e5bf4196c078f5d4611363dad301:c8dd8c1f29f7844ca3ab6667c4408ec7cefa9e164037" className={styles.input} />
                <input type="hidden" name="_recaptcha" id="recaptcha" value="" className={styles.input} />
                <input type="hidden" name="_redirect" id="redirect" value="https://www.cookiekiller.xyz/success.html" className={styles.input} />
                <input type="text" name="name" placeholder="Name" required="" className={styles.input} />
                <br />
                <input type="email" name="_replyTo" placeholder="Email" required="" className={styles.input} />
                <br />
                <textarea type="text" name="message" placeholder="Message" required="" className={`${styles.input} ${styles.textArea}`} />
                <br />

                <button id="send" type="submit" className={styles.button}>Send</button>
            </form>
            <div>
                <p className={styles.privatePolicy}>
                    This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy">Privacy Policy</a>
                    and
                    <a href="https://policies.google.com/terms">Terms of Service</a>
                    apply.
                </p>
            </div>
        </div>
    );
}
