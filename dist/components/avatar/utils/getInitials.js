"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.string.replace.js");

const getInitials = function getInitials(name) {
  let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "?";
  if (!name || typeof name !== "string") return fallback;
  return name.replace(/\s+/, " ").split(" ").slice(0, 3).map(firstLetter => firstLetter && firstLetter[0]).join("");
};

var _default = getInitials;
exports.default = _default;