import { useState, useEffect } from "react";
import {
  asteriskCardNo,
  asteriskCvv,
  asteriskExp,
  formatCardNo,
} from "../debitCardUtils";

export const useDebitCard = (props) => {
  const [hidden, setHidden] = useState(true);

  const computedCardNo = hidden
    ? formatCardNo(asteriskCardNo(props.cardNo))
    : formatCardNo(props.cardNo);

  const computedExp = hidden ? asteriskExp(props.exp) : props.exp;

  const computedCVV = hidden ? asteriskCvv(props.cvv) : props.cvv;

  const cardBrand = `https://assets.ondeposits.com/img/debit-card-brands/svg/${props.brand}_light.svg`;

  const toggleHidden = () => setHidden(!hidden);

  return { computedCardNo, computedExp, computedCVV, toggleHidden, cardBrand };
};
