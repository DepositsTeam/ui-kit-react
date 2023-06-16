import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "./Box.scss";
import { default as BoxComponent } from "ui-box";
import uniqueRandomString from "../../utils/uniqueRandomString";
import { DarkModeContext } from "../providers/DarkModeProvider.jsx";
import classNames from "../../utils/classNames";

const Box = React.forwardRef(
  (
    {
      fontFace,
      lightClassName,
      darkClassName,
      id,
      className,
      children,
      style,
      onMouseEnter,
      onMouseLeave,
      hoverClassName,
      ...props
    },
    ref
  ) => {
    const [uniqueID, setUniqueID] = useState(
      "auto_generated_" + uniqueRandomString(20)
    );
    const [isHovered, setIsHovered] = useState(false);
    const { darkMode } = useContext(DarkModeContext);

    const mouseEntered = (e) => {
      setIsHovered(true);
      if (onMouseEnter && typeof onMouseEnter === "function") {
        onMouseEnter(e);
      }
    };

    const mouseLeft = (e) => {
      setIsHovered(false);
      if (onMouseLeave && typeof onMouseLeave === "function") {
        onMouseLeave(e);
      }
    };

    useEffect(() => {
      if (id) {
        setUniqueID(id);
      }
    }, [id]);

    return (
      <BoxComponent
        ref={ref}
        className={classNames(
          {
            [`${fontFace ?? "heroNew"}`]: true,
            dark_mode: !!darkMode,
            [darkClassName]: !!darkMode,
            [lightClassName]: !darkMode,
            [hoverClassName]: isHovered,
            "ui-kit-general-box": true,
          },
          className
        )}
        {...props}
        id={uniqueID}
        style={{ ...(style ? { ...style } : {}) }}
        onMouseEnter={mouseEntered}
        onMouseLeave={mouseLeft}
      >
        {children}
      </BoxComponent>
    );
  }
);

export default Box;

Box.propTypes = {
  lightClassName: PropTypes.string,
  darkClassName: PropTypes.string,
  hoverClassName: PropTypes.string,
};
