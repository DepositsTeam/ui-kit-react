import React, { useState } from "react";
import Box from "../box";
import "./alert.css";
import PropTypes from "prop-types";
import Text from "../text";
import classNames from "../../utils/classNames";
import Button from "../button";
import Icon from "../icon";
import Check from "../icons/Check";
import Error from "../icons/Error";
import Warning from "../icons/Warning";
import Info from "../icons/Info";
import Close from "../icons/Close";
import Heading from "../heading";

const Alert = ({
  message,
  description,
  colorScheme,
  theme,
  button,
  buttonAction,
  onAction,
  className,
  closable,
  bordered,
  smartColor,
  iconColor,
  icon,
  ...props
}) => {
  const [showAlert, setShowAlert] = useState(true);
  const generateAlertClassName = classNames(
    {
      [`theme__${theme}`]: true,
      [`color-scheme__${colorScheme}`]: true,
      "ui-alert": true,
      "is-toast": closable,
      smartColor: smartColor,
      iconColor: iconColor,
    },
    className
  );
  const smartColors = {
    "--smart-color": smartColor,
    "--icon-color": iconColor,
  };

  const schemeIcons = {
    info: Info,
    warning: Warning,
    error: Error,
    success: Check,
  };

  const remove = () => {
    setShowAlert(false);
  };

  return showAlert ? (
    <Box className={generateAlertClassName} {...props} style={smartColors}>
      <div className={"ui-alert__content-wrapper"}>
        <div className={"ui-alert__content"}>
          {colorScheme !== "default" && (
            <Icon
              className={"ui-alert__header-icon"}
              icon={icon ? icon : schemeIcons[colorScheme]}
            />
          )}
          <div className={"ui-alert__text"}>
            <Box className={"ui-alert__header"}>
              <Heading scale={"subtitle-2"} className={"ui-alert__header-text"}>
                {message}
              </Heading>
            </Box>
            {description && theme !== "inline" && (
              <Text scale={"subhead"} className={"ui-alert__body"}>
                {description}
              </Text>
            )}

            {button && theme !== "inline" && (
              <Button className={"ui-alert__call-to-action"} {...button} />
            )}
          </div>
        </div>
      </div>
      {closable && theme !== "inline" && (
        <Icon
          smartcolor={"currentcolor"}
          className={"ui-alert__close-icon"}
          icon={Close}
          onClick={props.onClick || remove}
        />
      )}
    </Box>
  ) : (
    <div />
  );
};

export default Alert;

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  colorScheme: PropTypes.oneOf([
    "default",
    "info",
    "warning",
    "error",
    "success",
  ]).isRequired,
  theme: PropTypes.oneOf(["flat", "filled", "inline"]).isRequired,
  button: PropTypes.object,
  action: PropTypes.func,
  closable: PropTypes.bool,
  bordered: PropTypes.bool,
  smartColor: PropTypes.string,
  iconColor: PropTypes.string,
  icon: PropTypes.object,
};

Alert.defaultProps = {
  message: "This is a simple message",
  colorScheme: "default",
  theme: "flat",
  closable: false,
};
