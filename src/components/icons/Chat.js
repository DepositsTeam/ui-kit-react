import React from "react";
import PropTypes from "prop-types";

const ChatComponent = ({
  fill,
  stroke,
  smartColor,
  strokeWidth,
  strokeLineCap,
  strokeLineJoin,
  props,
}) => {
  return (
    <>
      <path
        d="M3 20L4.3 16.1C3.17644 14.4383 2.76999 12.4704 3.15622 10.5623C3.54244 8.65419 4.69506 6.93567 6.39977 5.72628C8.10447 4.51688 10.2453 3.8989 12.4241 3.98724C14.6029 4.07559 16.6715 4.86424 18.2453 6.20656C19.819 7.54889 20.7909 9.35354 20.9801 11.285C21.1693 13.2164 20.563 15.1432 19.2739 16.7071C17.9848 18.271 16.1007 19.3656 13.9718 19.7874C11.8429 20.2091 9.6142 19.9293 7.7 19L3 20"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M12 12V12.01"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M8 12V12.01"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
      <path
        d="M16 12V12.01"
        stroke={smartColor || stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLineCap}
        strokeLinejoin={strokeLineJoin}
      />
    </>
  );
};

const Chat = {
  component: ChatComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

ChatComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
};

ChatComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
};

export default Chat;
