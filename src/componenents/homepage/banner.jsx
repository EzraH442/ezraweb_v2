import React from "react";
import * as styles from "./banner.module.css";

import homeTopImage from "../../images/home-top.jpg";

export default function Banner() {
    return (
        <div className={styles.container}>
            <img src={homeTopImage} className={styles.image} alt="mountain scenery" />
            <p className={styles.text}>
                &quot;a quote&quot;
                <br />
                -from some guy
            </p>
        </div>
    );
}
