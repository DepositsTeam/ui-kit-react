import React, { useState, useContext } from "react";
import Box from "../box";
import "./Alert.scss";
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
import { getTextColor } from "../../utils/colorManager";
import { ThemeContext } from "../providers/ThemeProvider";

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
  const { theme: d__theme } = useContext(ThemeContext);
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
    "--smart-text-color": getTextColor(smartColor),
    "--light-primary-title-text-color": getTextColor(
      d__theme["--light-primary-action-color"],
      "#ffffff",
      "#212934"
    ),
    "--light-primary-description-text-color": getTextColor(
      d__theme["--light-primary-action-color"],
      "#ffffff",
      "#5f6b7a"
    ),
    "--dark-primary-title-text-color": getTextColor(
      d__theme["--dark-primary-action-color"],
      "#ffffff",
      "#212934"
    ),
    "--dark-primary-description-text-color": getTextColor(
      d__theme["--dark-primary-action-color"],
      "#ffffff",
      "#5f6b7a"
    ),
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
      <Box className={"ui-alert__content-wrapper"}>
        <Box className={"ui-alert__content"}>
          {colorScheme !== "default" && (
            <Icon
              className={"ui-alert__header-icon"}
              icon={icon || schemeIcons[colorScheme]}
            />
          )}
          <Box className={"ui-alert__text"}>
            {message && (
              <Box className={"ui-alert__header"}>
                <Heading
                  scale={"subtitle-2"}
                  className={"ui-alert__header-text"}
                >
                  {message}
                </Heading>
              </Box>
            )}
            {description && theme !== "inline" && (
              <Text marginTop={0} scale={"subhead"} className={"ui-alert__body no-top"}>
                {description}
              </Text>
            )}

            {button && theme !== "inline" && (
              <Button className={"ui-alert__call-to-action"} {...button} />
            )}
          </Box>
        </Box>
      </Box>
      {closable && theme !== "inline" && (
        <Icon
          smartcolor={"currentcolor"}
          className={"ui-alert__close-icon"}
          icon={Close}
          onClick={props.onClose || props.onClick || remove}
        />
      )}
    </Box>
  ) : (
    <div />
  );
};

export default Alert;

Alert.propTypes = {
  message: PropTypes.string,
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
  colorScheme: "default",
  theme: "flat",
  closable: false,
};
