import React from "react";
import PropTypes from "prop-types";
import "./Stepper.scss";
import classNames from "../../utils/classNames";
import Box from "../box";
import Text from "../text";
import tinycolor from "tinycolor2";
import CheckIcon from "../icons/Check.jsx";
import Icon from "../icon";

const Stepper = ({
  steps,
  currentStep,
  fontSize,
  spacing,
  indicatorSize,
  scheme,
  activeColor,
  StepComponent,
  ...props
}) => {
  const computedStyles = {
    "--spacing": spacing,
    "--indicator-size": indicatorSize,
    "--active-color": activeColor,
    "--active-color-bg": activeColor
      ? tinycolor(activeColor).lighten(43)
      : null,
  };
  const mappedSteps = steps.map((step, index) => (
    <Box
      key={`step__${index}`}
      className={classNames({
        active: currentStep === index,
        completed: currentStep > index,
        todo: currentStep < index,
        last: index === steps.length - 1,
        [scheme]: scheme,
        "ui-step": true,
      })}
    >
      <Box
        className={classNames({
          active: currentStep === index,
          completed: currentStep > index,
          todo: currentStep < index,
          last: index === steps.length - 1,
          [scheme]: scheme,
          activeColor,
          "ui-step__indicator": true,
        })}
      >
        {currentStep > index && (
          <Icon className={"indicator-icon"} icon={CheckIcon} />
        )}
      </Box>
      <Box className="ui-step__content">
        {StepComponent ? (
          <StepComponent step={step} />
        ) : (
          <>
            <Text
              marginY="0"
              className="ui-step__content-title"
              fontSize={fontSize}
            >
              {typeof step === "string" ? step : step.text}
            </Text>
            {step.description && (
              <Text
                marginY="0"
                fontFace="circularSTD"
                scale="subhead"
                color="#878B9A"
              >
                {step.description}
              </Text>
            )}
          </>
        )}
      </Box>
    </Box>
  ));
  return (
    <Box
      className={classNames(["ui-stepper", scheme])}
      style={{ ...computedStyles }}
    >
      {mappedSteps}
    </Box>
  );
};

export default Stepper;

Stepper.propTypes = {
  steps: PropTypes.array,
  currentStep: PropTypes.number,
  fontSize: PropTypes.string,
  spacing: PropTypes.string,
  indicatorSize: PropTypes.string,
  scheme: PropTypes.oneOf(["variant-1", "variant-2"]),
  activeColor: PropTypes.string,
};

Stepper.defaultProps = {
  currentStep: 0,
  fontSize: "14px",
  spacing: "50px",
  indicatorSize: "20px",
  scheme: "variant-1",
};
