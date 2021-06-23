import React from "react";

import PropTypes from "prop-types";

import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { column } from "./triple-column.module.css";
import {
    modifiedColumnHeight, postLink, date as postDate, text,
} from "./personalinfo.module.css";

export default function PostPreview({
    title, date, headline, link, image,
}) {
    return (
        <div className={`${column} ${modifiedColumnHeight}`}>
            <h3>{title}</h3>
            <p className={postDate}>{date}</p>
            <p className={text}>{headline}</p>
            {image ? <GatsbyImage image={image} alt="" /> : ""}
            <Link to={link} className={postLink}>Full Post</Link>
        </div>
    );
}

PostPreview.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.any,
};

PostPreview.defaultProps = {
    image: "the image",
};
