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
  center,
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
      customFontWeight: props.fontWeight,
      customFontSize: props.fontSize,
      customLineHeight: props.lineHeight,
      center,
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
  scale: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle-1",
    "subtitle-2",
    "subhead",
  ]),
  uppercase: PropTypes.bool,
  equalLineHeight: PropTypes.bool,
  fontFace: PropTypes.string,
  darkClassName: PropTypes.string,
  lightClassName: PropTypes.string,
  center: PropTypes.bool,
};

Heading.defaultProps = {
  is: "h2",
  scale: null,
  uppercase: false,
  equalLineHeight: false,
  darkClassName: "text-neutral-300",
};

export default Heading;
