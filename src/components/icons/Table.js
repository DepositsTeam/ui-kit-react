import React from "react";
import PropTypes from "prop-types";

const TableComponent = ({
  fill,
  stroke,
  smartColor,
  strokeWidth,
  strokeLineCap,
  strokeLineJoin,
  fillRule,
  clipRule,
  props,
}) => {
  return (
    <>
      <path
        fillRule={fillRule}
        clipRule={clipRule}
        fill={smartColor || fill}
        d="M2.25 5.25C2.25 4.83579 2.58579 4.5 3 4.5H21C21.4142 4.5 21.75 4.83579 21.75 5.25V18C21.75 18.3978 21.592 18.7794 21.3107 19.0607C21.0294 19.342 20.6478 19.5 20.25 19.5H3.75C3.35218 19.5 2.97065 19.342 2.68934 19.0607C2.40804 18.7794 2.25 18.3978 2.25 18V5.25ZM3.75 10.5V13.5H7.50001V10.5H3.75ZM3.75 9V6H20.25V9H3.75ZM9.00001 10.5V13.5H20.25V10.5H9.00001ZM20.25 15H9.00001V18H20.25V15ZM7.50001 18V15H3.75V18H7.50001Z"
      />
    </>
  );
};

const Table = {
  component: TableComponent,
  viewBox: "0 0 24 24",
  fill: "none",
};

TableComponent.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLineCap: PropTypes.string,
  strokeLineJoin: PropTypes.string,
  smartColor: PropTypes.string,
  fillRule: PropTypes.string,
  clipRule: PropTypes.string,
};

TableComponent.defaultProps = {
  stroke: "black",
  strokeWidth: "1.5",
  strokeLineCap: "round",
  strokeLineJoin: "round",
  fillRule: "evenodd",
  clipRule: "evenodd",
};

export default Table;
