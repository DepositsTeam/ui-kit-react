import React from 'react';
import PropType from "prop-types";
import './SolidBadge.css';

function SolidBadge(props) {
    const {variant, label, size,...rest} = props
    return (
        <div className={`solid-badge ${variant} ${size}`}{...rest}>
            <p>{label}</p>
        </div>
    )
}

export default SolidBadge

SolidBadge.propTypes = {
    size: PropType.oneOf(["small", "medium", "large"]),
    variant: PropType.oneOf(["solid-neutral", "solid-green", "solid-red", "solid-cyan", "solid-blue", "solid-yellow"])
}

SolidBadge.defaultProps = {
    variant: "neutral",
    size: "small"
}

