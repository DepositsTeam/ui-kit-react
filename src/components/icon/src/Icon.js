import React from "react";
import "./icon.css";
import Box from "../../box";
import classNames from "../../../utils/classNames";
import PropTypes from "prop-types";

const Icon = ({ className, icon, children, ...props }) => {
  const defaultViewBox = "0 0 24 24";
  const IconComponent = icon.component;

  const generatedClassName = classNames(
    {
      "ui-svg": true,
    },
    className
  );

  return (
    <Box
      viewBox={icon.viewBox || defaultViewBox}
      className={generatedClassName}
      is={"svg"}
      fill={props.fill || icon.fill}
      {...props}
    >
      <IconComponent {...props} />
    </Box>
  );
};

export default Icon;

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  smartColor: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Icon.defaultProps = {
  smartColor: "currentcolor",
};
