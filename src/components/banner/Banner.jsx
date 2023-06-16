import React, { useState } from "react";
import "./Banner.scss";
import PropType from "prop-types";
import Box from "../box";
import Text from "../text";
import Icon from "../icon";
import Info from "../icons/Info.jsx";
import Warning from "../icons/Warning.jsx";
import Error from "../icons/Error.jsx";
import Check from "../icons/Check.jsx";
import CloseIcon from "../icons/Close.jsx";
import { getTextColor } from "../../utils/colorManager";
import classNames from "../../utils/classNames";

const Banner = ({
  colorScheme,
  title,
  description,
  removable,
  full,
  onRemove,
  alignTop,
  icon,
  iconColor,
  noIcon,
  smartColor,
  className,
  ...props
}) => {
  const [visible, setVisible] = useState(true);
  const schemeIcons = {
    info: Info,
    warning: Warning,
    error: Error,
    success: Check,
  };
  const cssVars = {
    "--smart-color": smartColor,
    "--smart-title-color": getTextColor(smartColor),
    "--smart-description-color": getTextColor(smartColor, "#6D7786", "#94A3B8"),
    "--icon-color": iconColor,
  };
  const bannerClasses = classNames(
    {
      "ui-banner": true,
      [`color-scheme__${colorScheme}`]: true,
      alignTop,
      full,
      smartColor,
      iconColor,
    },
    className
  );

  const remove = () => {
    if (onRemove && typeof onRemove === "function") {
      onRemove();
    }
    setVisible(false);
  };
  return visible ? (
    <Box className={bannerClasses} style={cssVars} {...props}>
      <Box className="text-content">
        {(colorScheme !== "default" || icon) && !noIcon && (
          <Icon
            className={"ui-banner-icon"}
            icon={icon ? icon : schemeIcons[colorScheme]}
          />
        )}
        <Text
          scale="subhead"
          className="ui-banner__title text-gray-700"
          font-face="circularSTD"
        >
          {title}
        </Text>
        <Text
          scale="subhead"
          className="ui-banner__description text-gray-600"
          font-face="circularSTD"
        >
          <span dangerouslySetInnerHTML={{ __html: description }} />
        </Text>
      </Box>
      {removable && (
        <Icon
          icon={CloseIcon}
          onClick={remove}
          className={"ui-banner__close-icon"}
          cursor={"pointer"}
        />
      )}
    </Box>
  ) : (
    <div />
  );
};

export default Banner;

Banner.defaultProps = {
  colorScheme: "default",
  full: true,
  noIcon: false,
};

Banner.propTypes = {
  title: PropType.string,
  description: PropType.string,
  colorScheme: PropType.oneOf([
    "default",
    "info",
    "warning",
    "error",
    "success",
  ]),
  removable: PropType.bool,
  onRemove: PropType.func,
  full: PropType.bool,
  alignTop: PropType.bool,
  icon: PropType.object,
  iconColor: PropType.string,
  noIcon: PropType.bool,
  smartColor: PropType.string,
};
