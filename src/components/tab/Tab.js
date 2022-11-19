import React from "react";
import "./Tab.scss";
import PropType from "prop-types";
import Box from "../box";
import keyGen from "../../utils/keyGen";
import Text from "../text";
import classNames from "../../utils/classNames";

const Tab = ({ is, text, tabs, horizontal, spacing, ...props }) => {
  const wrapperClassNames = classNames({
    "ui-tabs": true,
    horizontal,
  });
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
        is={is ? is : "a"}
        {...spacing}
        {...tab}
        key={keyGen()}
        className={"ui-tab"}
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
  tabs: PropType.array,
  horizontal: PropType.bool,
  spacing: PropType.string,
};

Tab.defaultProps = {};
