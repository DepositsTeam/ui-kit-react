import React from "react";
import "./text.css";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";

const Text = ({ className, scale, uppercase, equalLineHeight, ...props }) => {
  const is = props.is ?? "p";
  const generatedClass = classNames(
    {
      [scale]: scale,
      uppercase,
      "equal-line-height": equalLineHeight,
      "ui-text": true,
    },
    className
  );
  return (
    <Box is={is} {...props} className={generatedClass}>
      {props.children}
    </Box>
  );
};

Text.propTypes = {
  is: PropTypes.oneOf(["p", "span", "small", "sub", "sup"]),
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
};

Text.defaultProps = {
  is: "p",
  scale: "body",
  uppercase: false,
  equalLineHeight: false,
};

export default Text;
