import React, { useState } from "react";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import Icon from "../icon";
import "./Accordion.scss";
import Text from "../text";
import {
  ChevronFilledUp,
  ChevronFilledDown as ChevronFilledDownIcon,
} from "../icons";

const Accordion = ({
  title,
  leftIconActive,
  leftIconInactive,
  rightIcon,
  children,
  className,
  ...props
}) => {
  const [visible, setVisible] = useState(false);

  const generateAccordionHeaderClassName = classNames({
    active: visible,
    "ui-accordion__header": true,
    [className]: true,
  });

  return (
    <Box className={"ui-accordion"}>
      <Box
        className={generateAccordionHeaderClassName}
        onClick={() => setVisible(!visible)}
      >
        <Box className={"ui-accordion__header__left-content"}>
          <Box className={"ui-accordion__header__left-icon"}>
            {visible
              ? leftIconActive || (
                  <Box className={"text-grey-500"}>
                    <Icon
                      icon={ChevronFilledUp}
                      height={"32px"}
                      width={"32px"}
                    />
                  </Box>
                )
              : leftIconInactive || (
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
  children: PropTypes.node,
  leftIconActive: PropTypes.element,
  leftIconInactive: PropTypes.element,
  rightIcon: PropTypes.element,
};
