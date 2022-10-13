import React, { useState } from "react";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import { ChevronFilledDownIcon, Text } from "../../index";
import { Icon } from "../../index";
import "./accordion.scss";
import { ChevronFilledUp } from "../icons";

const Accordion = ({
  title,
  leftIconActive,
  leftIconInactive,
  rightIcon,
  children,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const generateAccordionHeaderClassName = classNames({
    active: visible,
    "ui-accordion__header": true,
  });

  return (
    <Box className={"ui-accordion"}>
      <Box
        className={generateAccordionHeaderClassName}
        onClick={() => setVisible(!visible)}
      >
        <Box className={"ui-accordion__header__left-content"}>
          <Box className={"ui-accordion__header__left-icon"}>
            {visible ? (
              leftIconActive ? (
                leftIconActive
              ) : (
                <Box className={"text-grey-500"}>
                  <Icon icon={ChevronFilledUp} height={"32px"} width={"32px"} />
                </Box>
              )
            ) : leftIconInactive ? (
              leftIconInactive
            ) : (
              <Box className={"text-grey-500"}>
                <Icon
                  icon={ChevronFilledDownIcon}
                  height={"32px"}
                  width={"32px"}
                />
              </Box>
            )}
          </Box>
          <Box className={"ui-accordion__header__title"}>
            <Text
              marginY={"0"}
              fontFace={"circularSTD"}
              scale={"subhead"}
              className={"text-grey-600"}
            >
              {title}
            </Text>
          </Box>
          {rightIcon && (
            <Box className={"ui-accordion__header__right-icon"}>
              <Icon height={"32px"} width={"32px"} icon={rightIcon} />
            </Box>
          )}
        </Box>
      </Box>
      {visible && <Box class={"ui-accordion__content"}>{children}</Box>}
    </Box>
  );
};

export default Accordion;

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
};
