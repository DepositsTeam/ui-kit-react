import React from "react";
import "./FlatAlert.css";
import success from "./assets/Icon_Success.svg";
import warning from "./assets/Icon_Warning.svg";
import info from "./assets/Icon_Info.svg";
import union from "./assets/Union.svg";
import filledWarning from "./assets/DarkWarning.svg";
import filledError from "./assets/ErrorUnion.svg";
import filledInfo from "./assets/LightIcon_ Info.svg";
import filledSuccess from "./assets/SuccessUnion.svg";
import PropType from "prop-types";

function FlatAlert(props) {
  const { variant, label, description, ...rest } = props;
  return (
    <div className={`flat-alert flex-label ${variant}`} {...rest}>
      <div className="alert-card">
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          <img
            src={
              (variant === "green-alert"  || variant === "inline-success-alert")
                ? success
                : (variant === "red-alert" || variant === "inline-error-alert")
                ? union
                : (variant === "yellow-alert" || variant === "inline-warning-alert")
                ? warning
                : (variant === "blue-alert" || variant === "inline-info-alert") 
                ? info
                : variant === "success-fill"
                ? filledSuccess
                : variant === "error-fill"
                ? filledError
                : variant === "info-fill"
                ? filledInfo
                : variant === "warning-fill"
                ? filledWarning
                : null
            }
          />
          <div className="alert-text">
            <p className="label" style={{}}>
              {label}
            </p>
            <p style={{ top: "8px" }}>
              {description && <p className="description">{description}</p>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlatAlert;

FlatAlert.propTypes = {
  variant: PropType.oneOf([
    "neutral-fill",
    "success-fill",
    "error-fill",
    "info-fill",
    "warning-fill"
  ]),
};

FlatAlert.defaultProps = {
  variant: "neutral",
};
