import React from "react";
import "./Switch.css";
import Text from "../../text";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";

const Switch = ({ label, colorScheme, disabled, className, ...props }) => {
    const switchClassName = classNames(
        {
            "ui-switch__wrapper": true,
            [`state__disabled`]: disabled,
            [`semantic__${colorScheme}`]: colorScheme,

        },
        className
    );
    return (
        <Box is={"label"} className={switchClassName}>
            <Box is={"div"} className="ui__switch">
                <Box
                    is={"input"}
                    className={"ui__slider"}
                    type={"checkbox"}
                    {...props}
                />
                <Box is={"span"} className={"ui__slider round"}/>
            </Box>
            <Text className={"ui-switch__label-text"}>{label}</Text>
        </Box>
    );
};

export default Switch;


Switch.propTypes = {
    colorScheme: PropTypes.oneOf([
        "primary",
        "danger",
        "success",
        "outline",
        "invisible",
    ]),
    disabled: PropTypes.bool,
};

Switch.defaultProps = {
    colorScheme: 'success',
    disabled: false,
};