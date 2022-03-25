"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BRAND_ALIAS = void 0;
var _default = [{
  brand: "American Xpress",
  src: "https://assets.deposits.com/img/card-brands/amexcard.svg"
}, {
  brand: "Discover",
  src: "https://assets.deposits.com/img/card-brands/discovercard.svg"
}, {
  brand: "Mastercard",
  src: "https://assets.deposits.com/img/card-brands/mastercard.svg"
}, {
  brand: "Visacard",
  src: "https://assets.deposits.com/img/card-brands/visacard.svg"
}];
exports.default = _default;
const BRAND_ALIAS = {
  AMEX: 0,
  DISCOVER: 1,
  MASTERCARD: 2,
  VISACARD: 3,
  NOCARD: -1
};
exports.BRAND_ALIAS = BRAND_ALIAS;