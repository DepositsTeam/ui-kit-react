import React, { useState, useEffect } from "react";
import "./Box.scss";
import { default as BoxComponent } from "ui-box";
import { defaultThemeVars } from "../../utils/default-theme";
import uniqueRandomString from "../../utils/uniqueRandomString";

const Box = React.forwardRef(
  ({ fontFace, id, className, children, style, ...props }, ref) => {
    const [uniqueID, setUniqueID] = useState(
      "auto_generated_" + uniqueRandomString(20)
    );

    useEffect(() => {
      if (id) {
        setUniqueID(id);
      }
    }, [id]);

    return (
      <BoxComponent
        ref={ref}
        className={`${fontFace ?? "heroNew"} ${className}`}
        {...props}
        id={uniqueID}
        style={{ ...defaultThemeVars, ...(style ? { ...style } : {}) }}
      >
        {children}
      </BoxComponent>
    );
  }
);

export default Box;
