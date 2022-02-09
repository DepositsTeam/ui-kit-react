import React from "react"
import "./Checkbox.css"
import Text from "../../text";
import Box from "../../box";
import PropTypes from "prop-types";

const Checkbox = ({label, ...props}) => {
    return (
        <Box is={"label"} className={"ui-checkbox__wrapper"}>
            <input className={"ui-checkbox"} type={"radio"} {...props} />
            <Text className={"ui-checkbox__label-text"}>{label}</Text>
        </Box>
    )
}

export default Checkbox

Checkbox.defaultProps = {

}

Checkbox.propTypes = {
    disabled: PropTypes.bool
}