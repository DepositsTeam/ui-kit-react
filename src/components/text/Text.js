import React from "react";
import "./text.scss";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Text = ({
  className,
  scale,
  uppercase,
  equalLineHeight,
  fontWeight,
  fontSize,
  lineHeight,
  ...props
}) => {
  const is = props.is ?? "p";
  const generatedClass = classNames(
    {
      [scale]: scale,
      uppercase,
      "equal-line-height": equalLineHeight,
      "ui-text": true,
      customFontWeight: fontWeight,
      customFontSize: fontSize,
      customLineHeight: lineHeight,
    },
    className
  );
  return (
    <Box is={is} {...props} data-testid="text" className={generatedClass}>
      {props.children}
    </Box>
  );
};

Text.propTypes = {
  is: PropTypes.oneOfType([
    PropTypes.oneOf(["p", "span", "small", "sub", "sup", "subhead", "a"]),
    PropTypes.elementType,
  ]),
  scale: PropTypes.oneOf([
    "body",
    "subhead",
    "p-18",
    "overline",
    "footnote",
    "overline",
    "footnote-caps",
  ]),
  uppercase: PropTypes.bool,
  equalLineHeight: PropTypes.bool,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
};

Text.defaultProps = {
  is: "p",
  scale: "body",
  uppercase: false,
  equalLineHeight: false,
};

export default Text;
