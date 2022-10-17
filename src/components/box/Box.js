import React from "react";
import "./box.scss";
import { default as BoxComponent } from "ui-box";
import { defaultThemeVars } from "../../utils/default-theme";

const Box = React.forwardRef(
  ({ fontFace, className, children, style, ...props }, ref) => {
    return (
      <BoxComponent
        ref={ref}
        className={`${fontFace ?? "heroNew"} ${className}`}
        {...props}
        style={{ ...defaultThemeVars, ...(style ? { ...style } : {}) }}
      >
        {children}
      </BoxComponent>
    );
  }
);

export default Box;
