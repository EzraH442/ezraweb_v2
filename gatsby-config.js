module.exports = {
    siteMetadata: {
        title: "ezra's Website",
        titleTemplate: "Ezra's Website | %s",
        siteUrl: "https://wwww.ezrahuang.xyz",
    },
    plugins: [
        {
            resolve: "gatsby-transformer-remark",
            options: {
                footnotes: true,
                gfm: false,
                plugins: [],
            },
        },
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
                path: `${__dirname}/src`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/images`,
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-plugin-react-helmet",
    ],
};
