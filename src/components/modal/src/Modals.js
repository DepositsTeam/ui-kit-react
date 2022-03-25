import React from "react";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";
import Icon from "../../icon";
import ChevronFilledDown from "../../icons/ChevronFilledDown";
import Error from "../../icons/Error";
import Text from "../../text";
import "./modal.css";
import TextField from "../../text-field/src/TextField";
import Close from "../../icons/Close";
import Button from "../../button/src/Button";
import { Primary } from "../../button/stories/Button.stories";

const Modals = ({  
  formTitle,
  placeHolder,
  label,
  buttonLabel,
  signatureTitle,
  signatureContent,
  leftIcon,
  size,
  dropDown,
  rightIcon,
  errorMessage,
  inputClassName,
  className,
  ...props }) => {
  const generateInputFieldClasses = classNames(
    {
      "ui-modal": true,
      "ui-modalSignature": true,
      // "has-error": errorMessage,
      // "has-left-icon": leftIcon,
      // "has-right-icon": dropDown || rightIcon,
    },
    inputClassName
  );

  const wrapperClasses = classNames(
    [`size__${size}`, "ui-modal__wrapper", "ui-modal-signature__wrapper"],
    className
  );

  return (
      <Box className={"ui-modal"}>

      <div className={"ui-modal__header"}>
        <Text className={"ui-modal__title"} >
          {formTitle}
        </Text>

        {signatureTitle && (
          <div className={"ui-modal__signatureheader"}>
            <Text className={"ui-modal__title"} >
              {signatureTitle}
            </Text>
            
            
      </div>
      )}

      <Icon className={"ui-modal__close"} icon={Close}/>
      </div>
     
      <div className={"ui-modal__field"}>

        <div>
          <Box is={"label"}>
          <Text className={"ui-text-field__label"} scale={"subhead"}>
            {label}
          </Text>
        </Box>

        <Box className={"ui-modal__inputfield"} is={"input"} {...props} />

        <Box is={"label"}>
          <Text className={"ui-text-field__label"} scale={"subhead"}>
            {label}
          </Text>
        </Box>

        <Box className={"ui-modal__inputfield"} is={"input"} {...props} />


        <Box is={"label"}>
          <Text className={"ui-text-field__label"} scale={"subhead"}>
            {label}
          </Text>
        </Box>

        <Box className={"ui-modal__inputfield"} is={"input"} {...props} />

        <Box className="ui-modal__button" >
          {buttonLabel}
        </Box>
        </div>

        {signatureContent && (
        <div>
          <Text className={"ui-text-field__label"} scale={"subhead"}>
            {signatureContent}
          </Text>
        </div>
      )}

      </div>
    </Box>
  );
};

Modals.propTypes = {
  // title: PropTypes.string,
  label: PropTypes.string,
  // dropDown: PropTypes.bool,
  // size: PropTypes.oneOf([
  //   "small",
  //   "medium",
  //   "large",
  //   "xlarge",
  //   "huge",
  //   "massive",
  // ]),
  errorMessage: PropTypes.string,
};

// Modals.defaultProps = {
//   size: "medium",
// };

export default Modals;
