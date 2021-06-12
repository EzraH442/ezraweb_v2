import React from "react";

import PropTypes from "prop-types";

export default function Body({ backgroundColor, children }) {
    return (
        <div style={{ backgroundColor }}>
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
