import React from "react";

import Header from "../componenents/header";

import Banner from "../componenents/homepage/banner";
import ThreeColumns from "../componenents/homepage/triple-column";

import left from "../images/column2.jpg";
import right from "../images/right.jpg";
import summit from "../images/summit.jpg";

const HomePage = () => (
    <div>
        <Header />
        <Banner />
        <ThreeColumns
            pos={1}
            title="Backpacking"
            text="I like to go backpacking!"
            images={{
                image1: {
                    src: { left },
                    alt: "Backpacking across a large scree field",
                },
                image2: {
                    src: { right },
                    alt: "Great views from the top of a mountain",
                },
            }}
        />

        <ThreeColumns
            pos={3}
            title="Scrambling"
            text="I also love climbing mountains!"
            images={{
                image1: {
                    src: { summit },
                    alt: "Backpacking across a large scree field",
                },
                image2: {
                    src: { summit },
                    alt: "Great views from the top of a mountain",
                },
            }}
        />

        <div>
            <h1>I'm also an IBDP Student at Western Canada High School</h1>
            <p>So I'm usually very busy</p>
        </div>
    </div>
);

export default HomePage;
