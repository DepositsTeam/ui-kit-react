"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = classNames;

require("core-js/modules/es.array.reduce.js");

require("core-js/modules/es.string.trim.js");

function classNames(obj, className) {
  let generatedClass;

  if (Array.isArray(obj)) {
    generatedClass = obj.join(" ");
  } else {
    generatedClass = Object.entries(obj).filter(entry => entry[1]).reduce((carry, current) => carry + "".concat(carry ? " " : "").concat(current[0]), "");
  }

  return (generatedClass + (className ? " ".concat(className) : "")).trim();
}