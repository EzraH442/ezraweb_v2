import React from "react";

import PropTypes from "prop-types";

import { body } from "./body.module.css";

export default function Body({ backgroundColor, children }) {
    return (
        <div style={{ backgroundColor }} className={body}>
            { children }
        </div>
    );
}

Body.propTypes = {
    backgroundColor: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Body.defaultProps = {
    backgroundColor: "#FFFFFF",
};
