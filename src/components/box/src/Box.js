import React from "react";
import "./box.css";
import { default as BoxComponent } from "ui-box";

const Box = ({ fontFace, className, children, ...props }) => {
  return (
    <BoxComponent
      className={`${fontFace ?? "heroNew"} ${className}`}
      {...props}
    >
      {children}
    </BoxComponent>
  );
};

export default Box;
