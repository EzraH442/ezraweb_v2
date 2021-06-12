import React from "react";

import Header from "../componenents/header";

import Body from "../componenents/containers/body";

import ContactForm from "../componenents/contact/contact-form";

import polarBearPicture from "../images/polar-bear-1.jpg";

import * as styles from "../componenents/contact/contact-page.module.css";

export default function ContactPage() {
    return (
        <div>
            <Header />
            <Body backgroundColor="#329bea">
                <div className={styles.container}>
                    <ContactForm />
                    <img src={polarBearPicture} alt="a polar bear" className={styles.picture} />
                </div>
            </Body>
        </div>

    );
}
