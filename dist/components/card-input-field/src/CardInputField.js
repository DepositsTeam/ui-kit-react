"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.parse-float.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.string.trim.js");

var _react = _interopRequireWildcard(require("react"));

require("./CardInput.css");

var _box = _interopRequireDefault(require("../../box"));

var _text = _interopRequireDefault(require("../../text"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _icon = _interopRequireDefault(require("../../icon"));

var _Card = _interopRequireDefault(require("../../icons/Card"));

var _ScanCard = _interopRequireDefault(require("../../icons/ScanCard"));

var _Error = _interopRequireDefault(require("../../icons/Error"));

var _classNames = _interopRequireDefault(require("../../../utils/classNames"));

var _cardBrands = _interopRequireWildcard(require("./card-brands"));

const _excluded = ["label", "leftIcon", "size", "dropDown", "rightIcon", "errorMessage", "inputClassName", "className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const CardInputField = _ref => {
  let {
    label,
    leftIcon,
    size,
    dropDown,
    rightIcon,
    errorMessage,
    inputClassName,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [selectedCard, setSelectedCard] = (0, _react.useState)(-1);
  const [cardNo, setCardNo] = (0, _react.useState)(""); // const [cardNoIsFocused, setCardNoIsFocused] = useState(false);

  const [cardNoDisplay, setCardNoDisplay] = (0, _react.useState)("");
  const [cardExp, setCardExp] = (0, _react.useState)("");
  const [cardCVV, setCardCVV] = (0, _react.useState)("");
  const [targetPosition, setTargetPosition] = (0, _react.useState)(null);
  const pseudoInput = (0, _react.useRef)();
  const cardNoInput = (0, _react.useRef)();
  const cardCVCInput = (0, _react.useRef)();
  const cardExpInput = (0, _react.useRef)();

  const handleCardNoFocus = () => {
    pseudoInput.current.classList.add("focus"); // setCardNoIsFocused(true);

    setCardNoDisplay(cardNo);
  };

  const allowOnlyNumbers = e => {
    const isNumber = isFinite(parseFloat(e.key));
    const value = e.key;

    if (!isNumber && value !== "Delete" && value !== "Backspace") {
      e.preventDefault();
      return;
    }
  };

  const handleCardNoBlur = e => {
    e.preventDefault(); // setCardNoIsFocused(false);

    pseudoInput.current.classList.remove("focus");
    const strippedCardNo = cardNo.replace(/\s/g, "");

    if (selectedCard === _cardBrands.BRAND_ALIAS.AMEX) {
      if (strippedCardNo.length === 15) {
        setCardNoDisplay("**** ".concat(cardNo.substring(cardNo.length - 4)));
      }
    } else {
      if (strippedCardNo.length === 16) {
        setCardNoDisplay("**** ".concat(cardNo.substring(cardNo.length - 4)));
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

  const handleCardNoChange = e => {
    setTimeout(() => {
      if (targetPosition !== null) {
        const position = targetPosition !== null ? targetPosition.key === "Backspace" ? targetPosition.pos - 1 : targetPosition.pos : cardNo.length;
        cardNoInput.current.selectionStart = targetPosition !== null ? position : cardNo.length;
        cardNoInput.current.selectionEnd = targetPosition !== null ? position : cardNo.length;
        setTargetPosition(null);
      }
    });
  };

  const handleCardNoKeyDown = e => {
    if (e.key === "Backspace" || e.key === "Delete") {
      if (cardNoDisplay.length !== e.target.selectionStart) {
        setTargetPosition({
          pos: e.target.selectionStart,
          key: e.key
        });
      }
    }
  };

  const handleCardNoKeyPress = e => {
    allowOnlyNumbers(e);
    const strippedCardNo = cardNo.replace(/\s/g, "");
    console.log(e.key);

    if (e.key !== "Backspace" && e.key !== "Delete" && e.key !== "ArrowUp" && e.key !== "ArrowLeft" && e.key !== "ArrowDown" && e.key !== "ArrowRight") {
      if (selectedCard === _cardBrands.BRAND_ALIAS.AMEX) {
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

  const handleCardNoInput = e => {
    const value = e.target.value.replace(/\s/g, "");

    function parse(type) {
      switch (type) {
        case _cardBrands.BRAND_ALIAS.AMEX:
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

        if (type === _cardBrands.BRAND_ALIAS.AMEX) {
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
      } // alert(pseudoValue.trim())


      return pseudoValue.trim();
    }

    switch (value.charAt(0)) {
      case "5":
        setSelectedCard(_cardBrands.BRAND_ALIAS.MASTERCARD);
        setCardNo(parse(_cardBrands.BRAND_ALIAS.MASTERCARD));
        setCardNoDisplay(parse(_cardBrands.BRAND_ALIAS.MASTERCARD));
        break;

      case "3":
        if (value.length >= 2) {
          if (value.charAt(1) === "4" || value.charAt(1) === "7") {
            setSelectedCard(_cardBrands.BRAND_ALIAS.AMEX);
          } else {
            setSelectedCard(_cardBrands.BRAND_ALIAS.NOCARD);
          }
        } else {
          setSelectedCard(_cardBrands.BRAND_ALIAS.AMEX);
        }

        setCardNo(parse(_cardBrands.BRAND_ALIAS.AMEX));
        setCardNoDisplay(parse(_cardBrands.BRAND_ALIAS.AMEX));
        break;

      case "6":
        setSelectedCard(_cardBrands.BRAND_ALIAS.DISCOVER);
        setCardNo(parse(_cardBrands.BRAND_ALIAS.DISCOVER));
        setCardNoDisplay(parse(_cardBrands.BRAND_ALIAS.DISCOVER));
        break;

      case "4":
        setSelectedCard(_cardBrands.BRAND_ALIAS.VISACARD);
        setCardNo(parse(_cardBrands.BRAND_ALIAS.VISACARD));
        setCardNoDisplay(parse(_cardBrands.BRAND_ALIAS.VISACARD));
        break;

      default:
        setSelectedCard(_cardBrands.BRAND_ALIAS.NOCARD);
        setCardNo(parse(null));
        setCardNoDisplay(parse(null));
    }
  };

  const handleCardExpInput = e => {
    setCardExp(e.target.value);
    const value = e.target.value;

    if (value.length === 2) {
      if (value > 12 || !isFinite(value)) {
        e.preventDefault();
        return;
      } else {
        setCardExp("".concat(value, "/"));
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

  const generateInputFieldClasses = (0, _classNames.default)({
    "ui-card-input-field__card-no": true,
    "has-error": errorMessage,
    "has-left-icon": true,
    "has-right-icon": true
  }, inputClassName);
  const wrapperClasses = (0, _classNames.default)(["size__".concat(size), "ui-card-input-field__wrapper"], className);
  return /*#__PURE__*/_react.default.createElement(_box.default, {
    className: wrapperClasses
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    is: "label"
  }, /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-card-input-field__label",
    scale: "subhead"
  }, label)), /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-card-input-field__input-wrapper"
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    ref: pseudoInput,
    className: "ui-card-input-field__pseudo-input"
  }, selectedCard === -1 ? /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: _Card.default,
    smartColor: "#0C9CCC",
    className: "ui-card-input-field__left-icon"
  }) : /*#__PURE__*/_react.default.createElement("img", {
    src: _cardBrands.default[selectedCard].src,
    alt: _cardBrands.default[selectedCard].brand,
    className: "ui-card-input-field__left-icon"
  }), /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-card-input-field__inputs"
  }, /*#__PURE__*/_react.default.createElement(_box.default, _extends({
    className: generateInputFieldClasses,
    is: "input",
    placeholder: "0000 0000 0000 0000",
    maxLength: "19"
  }, props, {
    onFocus: handleCardNoFocus,
    onBlur: handleCardNoBlur,
    onKeyPress: handleCardNoKeyPress,
    onKeyDown: handleCardNoKeyDown,
    onChange: handleCardNoChange,
    onInput: handleCardNoInput,
    value: cardNoDisplay,
    ref: cardNoInput
  })), /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-card-input__pushed-right"
  }, /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-card-input-field__exp",
    is: "input",
    placeholder: "MM/YY",
    maxLength: "5",
    onFocus: handleExpFocus,
    onBlur: handleExpBlur,
    onInput: handleCardExpInput,
    onKeyPress: allowOnlyNumbers,
    value: cardExp,
    ref: cardExpInput
  }), /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-card-input-field__cvv",
    is: "input",
    maxLength: "3",
    placeholder: "CVV",
    onFocus: handleCVVFocus,
    onBlur: handleCVVBlur,
    onKeyPress: allowOnlyNumbers,
    value: cardCVV,
    ref: cardCVCInput,
    onChange: e => setCardCVV(e.target.value)
  }), /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: _ScanCard.default,
    smartColor: "#B8C4CE",
    className: "ui-card-input-field__right-icon"
  }))))), errorMessage && /*#__PURE__*/_react.default.createElement(_box.default, {
    className: "ui-card-input-field__error"
  }, /*#__PURE__*/_react.default.createElement(_icon.default, {
    icon: _Error.default,
    className: "ui-card-input-field__error-icon"
  }), /*#__PURE__*/_react.default.createElement(_text.default, {
    className: "ui-card-input-field__error-text",
    scale: "subhead",
    fontFace: "circularSTD"
  }, errorMessage)));
};

var _default = CardInputField;
exports.default = _default;
CardInputField.propTypes = {
  label: _propTypes.default.string,
  dropDown: _propTypes.default.bool,
  size: _propTypes.default.oneOf(["small", "medium", "large", "xlarge", "huge", "massive"]),
  errorMessage: _propTypes.default.string
};
CardInputField.defaultProps = {
  size: "medium"
};