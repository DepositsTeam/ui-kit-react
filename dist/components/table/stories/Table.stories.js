"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Table = _interopRequireDefault(require("../src/Table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Table",
  component: _Table.default
};
exports.default = _default;

const BadgeComponent = _ref => {
  let {
    content,
    color,
    background
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: 'max-content',
      color,
      background,
      padding: '4px 8px',
      borderRadius: '18px'
    }
  }, content);
};

const h = ['name', 'city', 'company', 'country', 'qty', 'state'];
const state = [{
  component: /*#__PURE__*/_react.default.createElement(BadgeComponent, {
    background: "#C4EFDF",
    color: "green",
    content: "Completed"
  }),
  alt: 'Completed'
}, {
  component: /*#__PURE__*/_react.default.createElement(BadgeComponent, {
    background: "#FFF0DB",
    color: "#E08304",
    content: "Pending Review"
  }),
  alt: 'Pending Review'
}, {
  component: /*#__PURE__*/_react.default.createElement(BadgeComponent, {
    background: "#FCC5CE",
    color: "#842432",
    content: "Rejected"
  }),
  alt: 'Rejected'
}, {
  component: /*#__PURE__*/_react.default.createElement(BadgeComponent, {
    background: "#DDEFFF",
    color: "#0059AC",
    content: "Postponed"
  }),
  alt: 'Postponed'
}];
const data = [{
  [h[0]]: 'first',
  [h[1]]: 'Text',
  [h[2]]: 'Abel',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'second',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[1]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[3]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '442',
  [h[5]]: state[1]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[1]
}, {
  [h[0]]: 'Kainy',
  [h[1]]: 'Call',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[2]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[1]
},
/*10*/
{
  [h[0]]: 'tenth',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnso',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'eleven',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kainy',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'twenty',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'twenty-one',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Kristen Watson',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & Johnson',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}, {
  [h[0]]: 'Last',
  [h[1]]: 'Text',
  [h[2]]: 'Johnson & ',
  [h[3]]: 'Text',
  [h[4]]: '445',
  [h[5]]: state[0]
}];

const Template = args => /*#__PURE__*/_react.default.createElement(_Table.default, args);

const Default = Template.bind({});
exports.Default = Default;
Default.args = {
  headings: h,
  data: data,
  itemsPerPage: 10
};