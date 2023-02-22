import React, { useState, useLayoutEffect, useEffect } from "react";
import "./Tab.scss";
import PropTypes from "prop-types";
import Box from "../box";
import keyGen from "../../utils/keyGen";
import Text from "../text";
import classNames from "../../utils/classNames";

const Tab = ({
  is,
  text,
  tabs,
  className,
  initiallyActiveTab,
  horizontal,
  spacing,
  onTabChange,
  ...props
}) => {
  const [internalActive, setInternalActive] = useState(0);

  useLayoutEffect(() => {
    if (
      initiallyActiveTab !== undefined &&
      typeof initiallyActiveTab === "number"
    ) {
      setInternalActive(initiallyActiveTab);
    }
  }, [initiallyActiveTab]);

  useEffect(() => {
    if (onTabChange && typeof onTabChange === "function") {
      onTabChange(internalActive, tabs[internalActive]);
    }
  }, [internalActive]);

  const wrapperClassNames = classNames({
    "ui-tabs": true,
    horizontal,
  });

  const switchActiveTabs = (index, tab) => {
    if (!tab.disabled) {
      setInternalActive(index);
    }
  };
  const generateSpacing = (index) => {
    if (index < tabs.length - 1) {
      if (horizontal) {
        return {
          marginRight: spacing || 0,
        };
      } else {
        return {
          marginBottom: spacing || 0,
        };
      }
    } else {
      return {};
    }
  };
  const mappedTabs = tabs.map(({ text, is, ...tab }, index) => {
    const spacing = generateSpacing(index);
    return (
      <Box
        display={"inline-block"}
        cursor={"pointer"}
        {...spacing}
        {...tab}
        key={keyGen()}
        className={classNames(
          {
            "ui-tab": true,
            active: internalActive === index,
            disabled: typeof tab === "object" && tab.disabled,
          },
          className
        )}
        onClick={() => switchActiveTabs(index, tab)}
      >
        <Text is={"span"} scale={"subhead"}>
          {text}
        </Text>
      </Box>
    );
  });

  return <div className={wrapperClassNames}>{mappedTabs}</div>;
};

export default Tab;

Tab.propTypes = {
  tabs: PropTypes.array,
  horizontal: PropTypes.bool,
  spacing: PropTypes.string,
  initiallyActiveTab: PropTypes.number,
  onTabChange: PropTypes.func,
};

Tab.defaultProps = {
  horizontal: true,
  initiallyActiveTab: 0,
  spacing: "4px",
};
