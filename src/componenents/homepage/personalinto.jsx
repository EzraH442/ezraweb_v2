import React from "react";

import * as styles from "./personalinfo.module.css";

import { columns } from "./triple-column.module.css";

import PostPreview from "./post-preview";

export default function PersonalInfo() {
    return (
        <div className={styles.info}>
            <h2 className={styles.title}>About Me</h2>

            <p className={styles.description}>
                I&apos;m an IBDP student at Western Canada High School.
                I am usually pretty busy. You can read about my life here.
            </p>

            <hr />

            <div className={columns}>
                <PostPreview
                    title="Complete Redesign!"
                    date="6/12/2021"
                    description="A complete redesign of the webiste has happened! "
                    link="2021-12-6"
                />
                <PostPreview
                    title="Complete Redesign!"
                    date="6/12/2021"
                    description="A complete redesign of the webiste has happened! "
                    link="JournalPage"
                />
            </div>
        </div>
    );
}
