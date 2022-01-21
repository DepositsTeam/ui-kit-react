import React from 'react';
import PropType from "prop-types";
import './SubtleBadge.css'

function SubtleBadge(props) {
    const { variant, label, size,...rest } = props
    return (
        <div className={`subtle-badge ${variant} ${size}`}{...rest}>
            <p>{label}</p>
        </div>
    )
}

export default SubtleBadge

SubtleBadge.propTypes = {
	size: PropType.oneOf(["small", "medium", "large"]),
    variant: PropType.oneOf(["neutral", "green", "red", "blue", "yellow", "cyan"])
};

SubtleBadge.defaultProps = {
	variant: "neutral",
	size: "small"
}


