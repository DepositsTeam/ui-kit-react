import React, { useState, useRef, useEffect } from "react";
import "./CardInput.css";
import Box from "../../box";
import Text from "../../text";
import PropTypes from "prop-types";
import Icon from "../../icon";
import CardIcon from "../../icons/Card";
import ScanCardIcon from "../../icons/ScanCard";
import Error from "../../icons/Error";
import classNames from "../../../utils/classNames";
import CardBrands, { BRAND_ALIAS } from "./card-brands";

const CardInputField = ({
  label,
  leftIcon,
  size,
  dropDown,
  rightIcon,
  errorMessage,
  inputClassName,
  className,
  ...props
}) => {
  const [selectedCard, setSelectedCard] = useState(-1);
  const [cardNo, setCardNo] = useState("");
  const [cardNoIsFocused, setCardNoIsFocused] = useState(false);
  const [cardNoDisplay, setCardNoDisplay] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [targetPosition, setTargetPosition] = useState(null);

  const pseudoInput = useRef();
  const cardNoInput = useRef();
  const cardCVCInput = useRef();
  const cardExpInput = useRef();

  const handleCardNoFocus = () => {
    pseudoInput.current.classList.add("focus");
    setCardNoIsFocused(true);
    setCardNoDisplay(cardNo);
  };

  const allowOnlyNumbers = (e) => {
    const isNumber = isFinite(parseFloat(e.key));
    const value = e.key;
    if (!isNumber && value !== "Delete" && value !== "Backspace") {
      e.preventDefault();
      return;
    }
  };

  const handleCardNoBlur = (e) => {
    e.preventDefault();
    setCardNoIsFocused(false);
    pseudoInput.current.classList.remove("focus");
    const strippedCardNo = cardNo.replace(/\s/g, "");
    if (selectedCard == BRAND_ALIAS.AMEX) {
      if (strippedCardNo.length === 15) {
        setCardNoDisplay(`**** ${cardNo.substring(cardNo.length - 4)}`);
      }
    } else {
      if (strippedCardNo.length === 16) {
        setCardNoDisplay(`**** ${cardNo.substring(cardNo.length - 4)}`);
      }
    }
  };

  const handleExpFocus = () => {
    pseudoInput.current.classList.add("focus");
  };

  const handleExpBlur = () => {
    pseudoInput.current.classList.remove("focus");
  };

  const handleCVVFocus = () => {
    pseudoInput.current.classList.add("focus");
  };

  const handleCVVBlur = () => {
    pseudoInput.current.classList.remove("focus");
  };

  const handleCardNoChange = (e) => {
    setTimeout(() => {
      if (targetPosition !== null) {
        const position =
          targetPosition !== null
            ? targetPosition.key == "Backspace"
              ? targetPosition.pos - 1
              : targetPosition.pos
            : cardNo.length;
        cardNoInput.current.selectionStart =
          targetPosition !== null ? position : cardNo.length;
        cardNoInput.current.selectionEnd =
          targetPosition !== null ? position : cardNo.length;
        setTargetPosition(null);
      }
    });
  };

  const handleCardNoKeyDown = (e) => {
    if (e.key == "Backspace" || e.key == "Delete") {
      if (cardNoDisplay.length != e.target.selectionStart) {
        setTargetPosition({ pos: e.target.selectionStart, key: e.key });
      }
    }
  };

  const handleCardNoKeyPress = (e) => {
    allowOnlyNumbers(e);
    const strippedCardNo = cardNo.replace(/\s/g, "");
    console.log(e.key);

    if (
      e.key != "Backspace" &&
      e.key != "Delete" &&
      e.key != "ArrowUp" &&
      e.key != "ArrowLeft" &&
      e.key != "ArrowDown" &&
      e.key != "ArrowRight"
    ) {
      if (selectedCard === BRAND_ALIAS.AMEX) {
        if (strippedCardNo.length === 15) {
          e.preventDefault();
          cardNoInput.current.blur();
          cardExpInput.current.focus();
          return;
        }
      } else {
        if (strippedCardNo.length === 16) {
          e.preventDefault();
          cardNoInput.current.blur();
          cardExpInput.current.focus();
          return;
        }
      }
    }
  };

  const handleCardNoInput = (e) => {
    const value = e.target.value.replace(/\s/g, "");
    function parse(type) {
      switch (type) {
        case BRAND_ALIAS.AMEX:
          cardNoInput.current.setAttribute("maxlength", 17);
          cardCVCInput.current.setAttribute("maxlength", 4);
          break;
        default:
          cardNoInput.current.setAttribute("maxlength", 19);
          cardCVCInput.current.setAttribute("maxlength", 3);
          break;
      }
      let pseudoValue = "";
      for (let i = 0; i < value.length; i++) {
        pseudoValue += value.charAt(i);
        let strippedPseudoValue = pseudoValue.replace(/\s/g, "");
        if (type === BRAND_ALIAS.AMEX) {
          if (strippedPseudoValue.length === 4) {
            pseudoValue += " ";
          }
          if (strippedPseudoValue.length === 10) {
            pseudoValue += " ";
          }
        } else {
          if (strippedPseudoValue.length % 4 === 0) {
            pseudoValue += " ";
          }
        }
      }
      // alert(pseudoValue.trim())
      return pseudoValue.trim();
    }
    switch (value.charAt(0)) {
      case "5":
        setSelectedCard(BRAND_ALIAS.MASTERCARD);
        setCardNo(parse(BRAND_ALIAS.MASTERCARD));
        setCardNoDisplay(parse(BRAND_ALIAS.MASTERCARD));

        break;
      case "3":
        if (value.length >= 2) {
          if (value.charAt(1) == "4" || value.charAt(1) == "7") {
            setSelectedCard(BRAND_ALIAS.AMEX);
          } else {
            setSelectedCard(BRAND_ALIAS.NOCARD);
          }
        } else {
          setSelectedCard(BRAND_ALIAS.AMEX);
        }
        setCardNo(parse(BRAND_ALIAS.AMEX));
        setCardNoDisplay(parse(BRAND_ALIAS.AMEX));

        break;
      case "6":
        setSelectedCard(BRAND_ALIAS.DISCOVER);
        setCardNo(parse(BRAND_ALIAS.DISCOVER));
        setCardNoDisplay(parse(BRAND_ALIAS.DISCOVER));

        break;
      case "4":
        setSelectedCard(BRAND_ALIAS.VISACARD);
        setCardNo(parse(BRAND_ALIAS.VISACARD));
        setCardNoDisplay(parse(BRAND_ALIAS.VISACARD));

        break;
      default:
        setSelectedCard(BRAND_ALIAS.NOCARD);
        setCardNo(parse(null));
        setCardNoDisplay(parse(null));
    }
  };

  const handleCardExpInput = (e) => {
    setCardExp(e.target.value);
    const value = e.target.value;
    if (value.length === 2) {
      if (value > 12 || !isFinite(value)) {
        e.preventDefault();
        return;
      } else {
        setCardExp(`${value}/`);
        return;
      }
    }
    if (value.length === 3) {
      if (value.charAt(2) !== "/" || value.substring(0, 2) > 12) {
        e.preventDefault();
        setCardExp(e.target.value.substring(0, 2));
        return;
      }
    }
    if (value.length === 1 && value === "/") setCardExp("");
    if (value.length === 5) {
      e.preventDefault();
      cardCVCInput.current.focus();
      return;
    }
  };

  const generateInputFieldClasses = classNames(
    {
      "ui-card-input-field__card-no": true,
      "has-error": errorMessage,
      "has-left-icon": true,
      "has-right-icon": true,
    },
    inputClassName
  );

  const wrapperClasses = classNames(
    [`size__${size}`, "ui-card-input-field__wrapper"],
    className
  );

  return (
    <Box className={wrapperClasses}>
      <Box is={"label"}>
        <Text className={"ui-card-input-field__label"} scale={"subhead"}>
          {label}
        </Text>
      </Box>
      <Box className={"ui-card-input-field__input-wrapper"}>
        <Box ref={pseudoInput} className={"ui-card-input-field__pseudo-input"}>
          {selectedCard === -1 ? (
            <Icon
              icon={CardIcon}
              smartColor={"#0C9CCC"}
              className={"ui-card-input-field__left-icon"}
            />
          ) : (
            <img
              src={CardBrands[selectedCard].src}
              alt={CardBrands[selectedCard].brand}
              className={"ui-card-input-field__left-icon"}
            />
          )}

          <Box className={"ui-card-input-field__inputs"}>
            <Box
              className={generateInputFieldClasses}
              is={"input"}
              placeholder={"0000 0000 0000 0000"}
              maxLength="19"
              {...props}
              onFocus={handleCardNoFocus}
              onBlur={handleCardNoBlur}
              onKeyPress={handleCardNoKeyPress}
              onKeyDown={handleCardNoKeyDown}
              onChange={handleCardNoChange}
              onInput={handleCardNoInput}
              value={cardNoDisplay}
              ref={cardNoInput}
            />
            <Box className={"ui-card-input__pushed-right"}>
              <Box
                className={"ui-card-input-field__exp"}
                is={"input"}
                placeholder={"MM/YY"}
                maxLength="5"
                onFocus={handleExpFocus}
                onBlur={handleExpBlur}
                onInput={handleCardExpInput}
                onKeyPress={allowOnlyNumbers}
                value={cardExp}
                ref={cardExpInput}
              />
              <Box
                className={"ui-card-input-field__cvv"}
                is={"input"}
                maxLength="3"
                placeholder={"CVV"}
                onFocus={handleCVVFocus}
                onBlur={handleCVVBlur}
                onKeyPress={allowOnlyNumbers}
                value={cardCVV}
                ref={cardCVCInput}
                onChange={(e) => setCardCVV(e.target.value)}
              />
              <Icon
                icon={ScanCardIcon}
                smartColor={"#B8C4CE"}
                className={"ui-card-input-field__right-icon"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      {/*<p>Card No: {cardNo}</p>*/}
      {/*<p>Card Display No: {cardNoDisplay}</p>*/}
      {errorMessage && (
        <Box className={"ui-card-input-field__error"}>
          <Icon icon={Error} className={"ui-card-input-field__error-icon"} />
          <Text
            className={"ui-card-input-field__error-text"}
            scale={"subhead"}
            fontFace={"circularSTD"}
          >
            {errorMessage}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default CardInputField;

CardInputField.propTypes = {
  label: PropTypes.string,
  dropDown: PropTypes.bool,
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
    "xlarge",
    "huge",
    "massive",
  ]),
  errorMessage: PropTypes.string,
};

CardInputField.defaultProps = {
  size: "medium",
};
