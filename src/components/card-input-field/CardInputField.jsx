import React, { useState, useRef, useEffect } from "react";
import "./CardInput.scss";
import Box from "../box";
import Text from "../text";
import PropTypes from "prop-types";
import Icon from "../icon";
import CardIcon from "../icons/Card.jsx";
import ScanCardIcon from "../icons/ScanCard.jsx";
import Error from "../icons/Error.jsx";
import classNames from "../../utils/classNames";
import CardBrands, { BRAND_ALIAS } from "./card-brands";
import inputPropTypes, { defaultProps } from "../../utils/inputPropTypes";
import cardValidator from "card-validator";

const CardInputField = ({
  label,
  leftIcon,
  size,
  dropDown,
  rightIcon,
  errorMessage,
  inputClassName,
  className,
  initialCardExp,
  initialCardNo,
  initialCardCvv,
  onChange,
  onError,
  allowExpiredCardDateInExp,
  hideScanIcon,
  ...props
}) => {
  const [selectedCard, setSelectedCard] = useState(-1);
  const [cardNo, setCardNo] = useState("");
  // const [cardNoIsFocused, setCardNoIsFocused] = useState(false);
  const [cardNoDisplay, setCardNoDisplay] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [targetPosition, setTargetPosition] = useState(null);
  const [cardNoError, setCardNoError] = useState(null);
  const [cardExpError, setCardExpError] = useState(null);
  const [cardCvvError, setCardCvvError] = useState(null);
  const [computedErrorMessage, setComputedErrorMessage] = useState(null);
  const [cardType, setCardType] = useState("");

  const pseudoInput = useRef();
  const cardNoInput = useRef();
  const cardCVCInput = useRef();
  const cardExpInput = useRef();

  useEffect(() => {
    if (initialCardNo) {
      handleCardNoInput(initialCardNo);
    }
    if (initialCardExp) {
      handleCardExpInput(initialCardExp);
    }
    if (initialCardCvv) {
      handleCardCvvInput(initialCardCvv);
    }
  }, [initialCardNo, initialCardExp, initialCardCvv]);

  useEffect(() => {
    if (cardNoError) {
      if (onError && typeof onError === "function") {
        onError(cardNoError);
      }
      setComputedErrorMessage(cardNoError);
    } else if (cardExpError) {
      if (onError && typeof onError === "function") {
        onError(cardExpError);
      }
      setComputedErrorMessage(cardExpError);
    } else if (cardCvvError) {
      if (onError && typeof onError === "function") {
        onError(cardCvvError);
      }
      setComputedErrorMessage(cardCvvError);
    } else if (errorMessage) {
      setComputedErrorMessage(errorMessage);
    } else {
      if (onError && typeof onError === "function") {
        onError(null);
      }
      setComputedErrorMessage(null);
    }
  }, [cardNoError, cardExpError, cardCvvError, errorMessage]);

  useEffect(() => {
    onChange({
      cardNo,
      cardExp,
      cardCVV,
      cardType,
    });
  }, [cardNo, cardExp, cardCVV, cardType]);

  useEffect(() => {
    if (cardExp.length === 5 && !cardExpError) {
      cardCVCInput.current.focus();
    }
  }, [cardExpError, cardExp]);

  const validateCardNo = (cardNo) => {
    setCardNoError(null);
    const validatedCardNo = cardValidator.number(cardNo.replaceAll(" ", ""));
    if (validatedCardNo && validatedCardNo.card) {
      cardNoInput.current.setAttribute(
        "maxlength",
        validatedCardNo.card.lengths[validatedCardNo.card.lengths.length - 1] +
          validatedCardNo.card.gaps.length
      );
      cardCVCInput.current.setAttribute(
        "maxlength",
        validatedCardNo.card.code.size
      );
    }

    if (!validatedCardNo.isPotentiallyValid && validatedCardNo.card) {
      setCardNoError(
        `Please enter a valid ${validatedCardNo?.card?.niceType} card number`
      );
    } else {
      setCardNoError(null);
    }
  };

  const handleCardNoFocus = () => {
    if (cardExpError) {
      cardExpInput.current.focus();
    } else if (cardCvvError) {
      cardCvvError.current.focus();
    } else {
      pseudoInput.current.classList.add("focus");
      // setCardNoIsFocused(true);
      setCardNoDisplay(cardNo);
    }
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
    // setCardNoIsFocused(false);
    pseudoInput.current.classList.remove("focus");
    const strippedCardNo = cardNo.replace(/\s/g, "");
    if (selectedCard === BRAND_ALIAS.AMEX) {
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
    if (cardNoError) {
      cardNoInput.current.focus();
    } else if (cardCvvError) {
      cardCVCInput.current.focus();
    } else {
      pseudoInput.current.classList.add("focus");
    }
  };

  const handleExpBlur = () => {
    pseudoInput.current.classList.remove("focus");
  };

  const handleCVVFocus = () => {
    if (cardNoError) {
      cardNoInput.current.focus();
    } else if (cardExpError) {
      cardExpInput.current.focus();
    } else {
      pseudoInput.current.classList.add("focus");
    }
  };

  const handleCVVBlur = () => {
    if (cardNoError.value) {
      cardNoInput.current.focus();
    } else if (cardExpError.value) {
      cardExpInput.current.focus();
    } else {
      pseudoInput.current.classList.remove("focus");
    }
  };

  const handleCardNoChange = (e) => {
    setTimeout(() => {
      if (targetPosition !== null) {
        const position =
          targetPosition !== null
            ? targetPosition.key === "Backspace"
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
    if (e.key === "Backspace" || e.key === "Delete") {
      if (cardNoDisplay.length !== e.target.selectionStart) {
        setTargetPosition({ pos: e.target.selectionStart, key: e.key });
      }
    }
  };

  const handleCardNoKeyPress = (e) => {
    console.log(e);
    allowOnlyNumbers(e);
    const strippedCardNo = cardNo.replace(/\s/g, "");

    if (
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "ArrowUp" &&
      e.key !== "ArrowLeft" &&
      e.key !== "ArrowDown" &&
      e.key !== "ArrowRight"
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

  const handleCardCvvInput = (e) => {
    const value = typeof e === "object" ? e.target.value : e;
    setCardCVV(value);
    const validatedCardNo = cardValidator.number(
      props.cardNo.replaceAll(" ", "")
    );
    if (validatedCardNo.card.code.size === e.target.value.length) {
      setCardCvvError("");
    } else {
      setCardCvvError(
        `Invalid CVC size. The CVC must be ${validatedCardNo.card.code.size}`
      );
    }
  };

  const handleCardNoInput = (e) => {
    const value = typeof e === "object" ? e.target.value.replace(/\s/g, "") : e;
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
        setCardType("mastercard");
        setCardNo(parse(BRAND_ALIAS.MASTERCARD));
        setCardNoDisplay(parse(BRAND_ALIAS.MASTERCARD));
        validateCardNo(value);

        break;
      case "3":
        if (value.length >= 2) {
          if (value.charAt(1) === "4" || value.charAt(1) === "7") {
            setSelectedCard(BRAND_ALIAS.AMEX);
            setCardType("american_express");
          } else {
            setCardType("unknown");
            setSelectedCard(BRAND_ALIAS.NOCARD);
          }
        } else {
          setSelectedCard(BRAND_ALIAS.AMEX);
          setCardType("american_express");
        }
        setCardNo(parse(BRAND_ALIAS.AMEX));
        setCardNoDisplay(parse(BRAND_ALIAS.AMEX));
        setCardType("american_express");
        validateCardNo(value);
        break;
      case "6":
        setSelectedCard(BRAND_ALIAS.DISCOVER);
        setCardNo(parse(BRAND_ALIAS.DISCOVER));
        setCardNoDisplay(parse(BRAND_ALIAS.DISCOVER));
        setCardType("discover");
        validateCardNo(value);
        break;
      case "4":
        setSelectedCard(BRAND_ALIAS.VISACARD);
        setCardNo(parse(BRAND_ALIAS.VISACARD));
        setCardNoDisplay(parse(BRAND_ALIAS.VISACARD));
        setCardType("visa");
        validateCardNo(value);
        break;
      default:
        setSelectedCard(BRAND_ALIAS.NOCARD);
        setCardNo(parse(null));
        setCardNoDisplay(parse(null));
        setCardType("unknown");
    }
  };

  const handleCardExpInput = (e) => {
    setCardExpError(null);
    let value = typeof e === "object" ? e.target.value.replace(/\s/g, "") : e;
    if (cardNoError) {
      cardNoInput.current.focus();
    } else if (cardCvvError) {
      cardCVCInput.current.focus();
    } else {
      if (typeof e === "object" && e.type.toLowerCase() === "paste") {
        e.preventDefault();
        value = (e.clipboardData || window.clipboardData).getData("text");
      }

      setCardExp(value);

      const validateCompleteExp = (value) => {
        const month = value.substring(0, 2);
        const year = value.substring(3);
        const currentYear = new Date().getFullYear().toString().substring(2);
        const currentMonth = new Date().getMonth() + 1;

        if (month > 12 || month < 1) {
          setCardExpError(
            "Please enter a valid month in the card expiry field"
          );
          setCardExp(isFinite(month) ? month : "");
        } else if (month.length === 2 && /^\d+$/.test(month)) {
          if (value.charAt(2) !== "/") {
            setCardExp(month + "/");
          } else if (!allowExpiredCardDateInExp && year < currentYear) {
            setCardExpError("You've entered an expired card");
          } else if (
            month < currentMonth &&
            year === currentYear &&
            !allowExpiredCardDateInExp
          ) {
            setCardExpError("You've entered an expired card");
          }
        } else if (month.length === 2 && !/^\d+$/.test(month)) {
          setCardExp(month);
          setCardExpError(
            "Please enter a valid month in the card expiry field"
          );
        }
      };

      validateCompleteExp(value);
    }
  };

  const generateInputFieldClasses = classNames(
    {
      "ui-card-input-field__card-no": true,
      "has-error": computedErrorMessage,
      "has-left-icon": true,
      "has-right-icon": true,
    },
    inputClassName
  );

  const wrapperClasses = classNames(
    [
      `size__${size}`,
      "ui-text-field__wrapper heroNew ui-card-input-field__wrapper",
    ],
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
        <Box
          ref={pseudoInput}
          className={classNames({
            "ui-card-input-field__pseudo-input": true,
            hasError: computedErrorMessage,
          })}
        >
          {selectedCard === -1 ? (
            <Box
              lightClassName={"text-primary-light-500"}
              darkClassName={"text-primary-dark-500"}
            >
              <Icon
                icon={CardIcon}
                className={"ui-card-input-field__left-icon"}
                height={"24px"}
                width={"24px"}
              />
            </Box>
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
                onChange={handleCardCvvInput}
              />
              {!hideScanIcon && (
                <Icon
                  icon={ScanCardIcon}
                  smartColor={"#B8C4CE"}
                  className={"ui-card-input-field__right-icon"}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      {/*<p>Card No: {cardNo}</p>*/}
      {/*<p>Card Display No: {cardNoDisplay}</p>*/}
      {computedErrorMessage && (
        <Box className={"ui-text-field__error"}>
          <Icon icon={Error} className={"ui-text-field__error-icon"} />
          <Text
            className={"ui-card-input-field__error-text"}
            scale={"subhead"}
            fontFace={"circularSTD"}
            marginY={0}
          >
            {computedErrorMessage}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default CardInputField;

CardInputField.propTypes = {
  ...inputPropTypes,
  initialCardExp: PropTypes.string,
  initialCardNo: PropTypes.string,
  initialCardCvv: PropTypes.string,
  variant: PropTypes.oneOf(["variant-1", "variant-2"]),
  allowExpiredCardDateInExp: PropTypes.bool,
  hideScanIcon: PropTypes.bool,
  onError: PropTypes.func,
};

CardInputField.defaultProps = {
  ...defaultProps,
  variant: "variant-1",
  allowExpiredCardDateInExp: false,
};
