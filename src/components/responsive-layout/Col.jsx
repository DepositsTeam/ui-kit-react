import React from "react";
import PropTypes from "prop-types";
import Box from "../box";
import "./Col.scss";
import classNames from "../../utils/classNames";

const Col = ({ children, ...props }) => {
  const computedXS = props.xs
    ? typeof props.xs === "object"
      ? props.xs.span
      : props.xs
    : undefined;

  const computedSM = props.sm
    ? typeof props.sm === "object"
      ? props.sm.span
      : props.sm
    : undefined;

  const computedMD = props.md
    ? typeof props.md === "object"
      ? props.md.span
      : props.md
    : undefined;

  const computedLG = props.lg
    ? typeof props.lg === "object"
      ? props.lg.span
      : props.lg
    : undefined;

  const computedXL = props.xl
    ? typeof props.xl === "object"
      ? props.xl.span
      : props.xl
    : undefined;

  const computedXXL = props.xxl
    ? typeof props.xxl === "object"
      ? props.xxl.span
      : props.xxl
    : undefined;

  const computedOffsetXS = props.offsetXs
    ? props.offsetXs
    : props.xs && props.xs.offset
    ? props.xs.offset
    : undefined;

  const computedOffsetSM = props.offsetSm
    ? props.offsetSm
    : props.sm && props.sm.offset
    ? props.sm.offset
    : undefined;

  const computedOffsetMD = props.offsetMd
    ? props.offsetMd
    : props.md && props.md.offset
    ? props.md.offset
    : undefined;

  const computedOffsetLG = props.offsetLg
    ? props.offsetLg
    : props.lg && props.lg.offset
    ? props.lg.offset
    : undefined;

  const computedOffsetXL = props.offsetXl
    ? props.offsetXl
    : props.xl && props.xl.offset
    ? props.xl.offset
    : undefined;

  const computedOffsetXXL = props.offsetXxl
    ? props.offsetXxl
    : props.xxl && props.xxl.offset
    ? props.xxl.offset
    : undefined;

  const computedOrderXS = props.orderXs
    ? props.orderXs
    : props.xs && props.xs.order
    ? props.xs.order
    : undefined;

  const computedOrderSM = props.orderSm
    ? props.orderSm
    : props.sm && props.sm.order
    ? props.sm.order
    : undefined;

  const computedOrderMD = props.orderMd
    ? props.orderMd
    : props.md && props.md.order
    ? props.md.order
    : undefined;

  const computedOrderLG = props.orderLg
    ? props.orderLg
    : props.lg && props.lg.order
    ? props.lg.order
    : undefined;

  const computedOrderXL = props.orderXl
    ? props.orderXl
    : props.xl && props.xl.order
    ? props.xl.order
    : undefined;

  const computedOrderXXL = props.orderXxl
    ? props.orderXxl
    : props.xxl && props.xxl.order
    ? props.xxl.order
    : undefined;

  return (
    <Box
      className={classNames({
        "ui-responsive__col": true,
        [`ui-responsive__col-xs-${computedXS}`]: computedXS,
        [`ui-responsive__col-sm-${computedSM}`]: computedSM,
        [`ui-responsive__col-md-${computedMD}`]: computedMD,
        [`ui-responsive__col-lg-${computedLG}`]: computedLG,
        [`ui-responsive__col-xl-${computedXL}`]: computedXL,
        [`ui-responsive__col-xxl-${computedXXL}`]: computedXXL,
        [`ui-responsive__offset-xs-${computedOffsetXS}`]: computedOffsetXS,
        [`ui-responsive__offset-sm-${computedOffsetSM}`]: computedOffsetSM,
        [`ui-responsive__offset-md-${computedOffsetMD}`]: computedOffsetMD,
        [`ui-responsive__offset-lg-${computedOffsetLG}`]: computedOffsetLG,
        [`ui-responsive__offset-xl-${computedOffsetXL}`]: computedOffsetXL,
        [`ui-responsive__offset-xxl-${computedOffsetXXL}`]: computedOffsetXXL,
        [`ui-responsive__order-xs-${computedOrderXS}`]: computedOrderXS,
        [`ui-responsive__order-sm-${computedOrderSM}`]: computedOrderSM,
        [`ui-responsive__order-md-${computedOrderMD}`]: computedOrderMD,
        [`ui-responsive__order-lg-${computedOrderLG}`]: computedOrderLG,
        [`ui-responsive__order-xl-${computedOrderXL}`]: computedOrderXL,
        [`ui-responsive__order-xxl-${computedOrderXXL}`]: computedOrderXXL,
      })}
    >
      {children}
    </Box>
  );
};

export default Col;

Col.propTypes = {
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  xxl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  offsetXs: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  offsetSm: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  offsetMd: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  offsetLg: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  offsetXl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  offsetXxl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  orderXs: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  orderSm: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  orderMd: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  orderLg: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  orderXl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  orderXxl: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};
