"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = keyGen;

function keyGen() {
  let length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }

  return result;
}