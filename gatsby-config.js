module.exports = {
    siteMetadata: {
        title: "Ezra's Website",
    },
    plugins: [
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    "Major Mono Display",
                    "Open Sans",
                    "Raleway",
                ],
                display: "swap",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`,
            },
        },
    ],
};
