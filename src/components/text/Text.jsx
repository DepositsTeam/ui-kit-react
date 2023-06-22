import React from "react";
import "./Text.scss";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Text = ({
  className,
  scale,
  uppercase,
  center,
  equalLineHeight,
  fontWeight,
  fontSize,
  lineHeight,
  ...props
}) => {
  const is = props.is ?? "p";
  const scaleClass = (scale) => {
    if (scale === "overline") {
      return "overline-font-size";
    } else return scale;
  };
  const generatedClass = classNames(
    {
      [scaleClass(scale)]: scale,
      uppercase,
      "equal-line-height": equalLineHeight,
      "ui-text": true,
      center,
      customFontWeight: fontWeight,
      customFontSize: fontSize,
      customLineHeight: lineHeight,
    },
    className
  );
  return (
    <Box
      fontWeight={fontWeight}
      fontSize={fontSize}
      lineHeight={lineHeight}
      is={is}
      {...props}
      data-testid="text"
      className={generatedClass}
    >
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
    "p-16",
    "overline",
    "footnote",
    "footnote-caps",
  ]),
  uppercase: PropTypes.bool,
  equalLineHeight: PropTypes.bool,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  darkClassName: PropTypes.string,
  center: PropTypes.bool,
};

Text.defaultProps = {
  is: "p",
  uppercase: false,
  equalLineHeight: false,
  darkClassName: "text-neutral-600",
};

export default Text;
