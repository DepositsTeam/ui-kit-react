import React from "react";
import "./Switch.css";
import Text from "../../text";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";

const Switch = ({ label, alignToTop, className, ...props }) => {
    const switchClassName = classNames(
        { "ui-switch__wrapper": true, alignToTop },
        className
    );
    return (
        <Box is={"label"} className={switchClassName}>
            <Box is={"label"} className="switch">
                <Box
                    is={"input"}
                    className={"slider"}
                    type={"checkbox"}
                    {...props}
                />
                <Box is={"span"} className={"slider round"}>

                </Box>
            </Box>
            <Text className={"ui-switch__label-text"}>{label}</Text>
        </Box>
    );
};

export default Switch;

Switch.defaultProps = {
    alignToTop: false,
    disabled: false,
};

Switch.propTypes = {
    disabled: PropTypes.bool,
    alignToTop: PropTypes.bool,
};
