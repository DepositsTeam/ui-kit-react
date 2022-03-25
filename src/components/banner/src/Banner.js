import React, { useState } from "react";
import "./Banner.css";
import PropType from "prop-types";
import Box from "../../box";
import Text from "../../text";
import Icon from "../../icon";
import Info from "../../icons/Info";
import Warning from "../../icons/Warning";
import Error from "../../icons/Error";
import Check from "../../icons/Check";
import CloseIcon from "../../icons/Close";

const Banner = ({ onClick, colorScheme, title, description, removable }) => {
  const [visible, setVisible] = useState(true);
  const schemeIcons = {
    info: Info,
    warning: Warning,
    error: Error,
    success: Check,
  };
  const remove = () => {
    if (onClick && typeof onClick === "function") {
      onClick();
    }
    setVisible(false);
  };
  return visible ? (
    <Box className={`color-scheme__${colorScheme} ui-banner`}>
      <Box className="text-content">
        {colorScheme !== "default" && (
          <Icon className={"ui-banner-icon"} icon={schemeIcons[colorScheme]} />
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
          className={"ui-banner_close-icon"}
          smart-color={"currentcolor"}
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
  onClick: PropType.func,
};
