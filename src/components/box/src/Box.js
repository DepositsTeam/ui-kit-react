import React from "react";
import "./box.css";
import { default as BoxComponent } from "ui-box";

const Box = React.forwardRef(
  ({ fontFace, className, children, ...props }, ref) => {
    return (
      <BoxComponent
        ref={ref}
        className={`${fontFace ?? "heroNew"} ${className}`}
        {...props}
      >
        {children}
      </BoxComponent>
    );
  }
);

export default Box;
