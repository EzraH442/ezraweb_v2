import React from "react";

import PropTypes from "prop-types";

import { Link } from "gatsby";

import { column, text } from "./triple-column.module.css";
import { modifiedColumnHeight, postLink, date as postDate } from "./personalinfo.module.css";

export default function PostPreview({
    title, date, description, link, image,
}) {
    return (
        <div className={`${column} ${modifiedColumnHeight}`}>
            <h3>{title}</h3>

            <img src={image} alt="" />
            <p className={text}>{description}</p>

            <Link to={`../../pages/journals/${link}`} className={postLink}>Full Post</Link>
            <p className={postDate}>{date}</p>
        </div>
    );
}

PostPreview.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
};

PostPreview.defaultProps = {
    title: "a post title",
    date: "a date",
    description: "a short exerpt from the post",
    link: "the link to the post",
    image: "the image",
};
