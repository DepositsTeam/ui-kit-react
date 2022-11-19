import React from "react";
import "./Heading.scss";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Heading = ({
  className,
  equalLineHeight,
  scale,
  uppercase,
  ...props
}) => {
  const is = props.is ?? "h2";
  const generatedClass = classNames(
    {
      [scale]: scale,
      [is]: is,
      uppercase,
      "ui-heading": true,
      "equal-line-height": equalLineHeight,
    },
    className
  );
  return (
    <Box is={is} {...props} data-testid="heading" className={generatedClass}>
      {props.children}
    </Box>
  );
};

Heading.propTypes = {
  is: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  scale: PropTypes.oneOf(["subtitle-1", "subtitle-2", "subhead"]),
  uppercase: PropTypes.bool,
  equalLineHeight: PropTypes.bool,
};

Heading.defaultProps = {
  is: "h2",
  scale: null,
  uppercase: false,
  equalLineHeight: false,
};

export default Heading;
