import React from "react";

import PropTypes from "prop-types";

import * as styles from "./triple-column.module.css";

function buildTextCol(title, text) {
    return (
        <div className={`${styles.column} ${styles.text}`}>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}
function buildImageCol(src, alt) {
    return (
        <div className={styles.column}>
            <img src={src} alt={alt} />
        </div>
    );
}

export default function ThreeColumns({
    pos, title, text, images,
}) {
    if (pos === 1) {
        return (
            <div className={styles.columns}>
                {buildTextCol(title, text)}
                {buildImageCol(images.image1.src, images.image1.alt)}
                {buildImageCol(images.image2.src, images.image2.alt)}
            </div>
        );
    } if (pos === 2) {
        return (
            <div className={styles.columns}>
                {buildImageCol(images.image1.src, images.image1.alt)}
                {buildTextCol(title, text)}
                {buildImageCol(images.image2.src, images.image2.alt)}
            </div>
        );
    } if (pos === 3) {
        return (
            <div className={styles.columns}>
                {buildImageCol(images.image1.src, images.image1.alt)}
                {buildImageCol(images.image2.src, images.image2.alt)}
                {buildTextCol(title, text)}
            </div>
        );
    }
    return (
        <div className={styles.columns}>
            <div className={`${styles.column} ${styles.text}`}>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className={styles.column}>
                <img src={images.image1.src} alt={images.image1.alt} />
            </div>
            <div className={styles.column}>
                <img src={images.image2.src} alt={images.image2.alt} />
            </div>
        </div>
    );
}

ThreeColumns.propTypes = {
    pos: PropTypes.oneOf([1, 2, 3]).isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    images: PropTypes.shape({
        image1: PropTypes.shape({
            src: PropTypes.any.isRequired,
            alt: PropTypes.string.isRequired,
        }).isRequired,
        image2: PropTypes.shape({
            src: PropTypes.any.isRequired,
            alt: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};
