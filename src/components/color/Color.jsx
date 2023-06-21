import React from "react";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import keyGen from "../../utils/keyGen";
import "./Color.scss";

const Color = ({ colorName, colorCode, textColor, colors }) => {
  const getProperColorName = (colorName) => {
    const colorNameArray = colorName.split(" ");
    return `${colorNameArray[0].toLowerCase()}-${colorNameArray[1]}`;
  };

  const generatedClassName = classNames({
    "ui-color": true,
    [`bg-${getProperColorName(colorName)}`]: colorName,
    [`text-${textColor}`]: colorName,
  });

  const generatedColors = colors?.length ? (
    colors.map((color, index) => (
      <div
        key={`ui-color__${keyGen()}`}
        className={`ui-color__container bg-${getProperColorName(
          color.colorName
        )} text-${color.textColor}`}
      >
        <p>{color.colorName}</p>
        <p>{color.colorCode}</p>
      </div>
    ))
  ) : (
    <div className="ui-color__container">
      <p>{colorName}</p>
      <p>{colorCode}</p>
    </div>
  );
  return (
    <Box is={"div"} className={generatedClassName}>
      {generatedColors}
      {/* <div className="ui-color__container">
				<p>{colorName}</p>
				<p>{colorCode}</p>
			</div> */}
    </Box>
  );
};

Color.propTypes = {
  colorName: PropTypes.string.isRequired,
  colorCode: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  colors: PropTypes.array,
};

Color.defaultProps = {
  colorName: "Cyan 100",
  colorCode: "#F2FAFC",
};

export default Color;
