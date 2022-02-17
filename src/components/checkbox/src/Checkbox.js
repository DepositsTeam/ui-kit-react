import React from "react";
import "./Checkbox.css";
import Text from "../../text";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";

const Checkbox = ({ label, alignToTop, dashed, className, ...props }) => {
  const checkboxClassName = classNames(
    { "ui-checkbox__wrapper": true, alignToTop, dashed },
    className
  );
  return (
    <Box is={"label"} className={checkboxClassName}>
      <Box
        is={"input"}
        className={"ui-checkbox"}
        type={"checkbox"}
        {...props}
      />
      <Text className={"ui-checkbox__label-text"}>{label}</Text>
    </Box>
  );
};

export default Checkbox;

Checkbox.defaultProps = {
  alignToTop: false,
  disabled: false,
  dashed: false,
};

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  alignToTop: PropTypes.bool,
  dashed: PropTypes.bool,
};
