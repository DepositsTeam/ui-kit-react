import React from "react";
import "./Radio.css";
import Box from "../../box";
import Text from "../../text";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";

const Radio = ({ className, ringed, label, ...props }) => {
  const generateRadioClassName = classNames(
    {
      ringed,
      "ui-radio__wrapper": true,
    },
    className
  );
  return (
    <Box is={"label"} className={generateRadioClassName}>
      <input className={"ui-radio"} type={"radio"} {...props} />
      <Text className={"ui-radio__label-text"}>{label}</Text>
    </Box>
  );
};

export default Radio;

Radio.defaultProps = {
  ringed: false,
};

Radio.propTypes = {
  ringed: PropTypes.bool,
};
