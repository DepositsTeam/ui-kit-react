import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "../box";
import classNames from "../../utils/classNames";
import "./ProgressBar.scss";

const ProgressBar = ({
  variant,
  percentage,
  totalSteps,
  currentStep,
  fillColor,
  emptyColor,
  darkFillColor,
  darkEmptyColor,
  height,
  ...props
}) => {
  const [computedWidth, setComputedWidth] = useState(0);

  useEffect(() => {
    if (percentage) {
      setComputedWidth(percentage);
    } else {
      if (currentStep !== undefined && totalSteps !== undefined) {
        setComputedWidth(Math.round((currentStep / totalSteps) * 100));
      } else setComputedWidth(0);
    }
  }, [percentage, currentStep, totalSteps]);

  const computedThemeStyles = {
    "--fill-color": fillColor || "#0db9e9",
    "--empty-color":
      emptyColor || variant === "variant-2" ? "#bdf3fc" : "#999999",
    "--height": height,
  };

  return (
    <Box
      className={classNames({ "ui-progress-bar": true, [variant]: variant })}
      style={{ ...computedThemeStyles }}
    >
      <Box
        className={classNames({
          "ui-progress-bar__active": true,
          [variant]: variant,
        })}
        style={{ "--width": `${computedWidth}%` }}
      />
    </Box>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  totalSteps: PropTypes.number,
  currentStep: PropTypes.number,
  fillColor: PropTypes.string,
  emptyColor: PropTypes.string,
  darkFillColor: PropTypes.string,
  darkEmptyColor: PropTypes.string,
  variant: PropTypes.oneOf(["variant-1", "variant-2"]),
  height: PropTypes.string,
};

ProgressBar.defaultProps = {
  variant: "variant-1",
  height: "6px",
};
