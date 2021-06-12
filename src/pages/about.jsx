import React from "react";

import Header from "../componenents/header";

import Body from "../componenents/containers/body";

export default function AboutPage() {
    return (
        <div>
            <Header />
            <Body backgroundColor="grey">
                <h1>About Me</h1>
                <p>
                    I'm a grade 10 student at Western Canada High School! I'm interested in
                    programming, and have made a variety of applications!
                </p>
            </Body>
        </div>
    );
}
