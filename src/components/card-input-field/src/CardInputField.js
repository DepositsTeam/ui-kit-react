import React from "react";
import "./CardInput.css";
import Icon from "../../icon";
import CardIcon from "../../icons/Card";
import ScanCardIcon from "../../icons/ScanCard";

const CardInputField = (props) => {
  return (
    <div className="ui-credit-card-input">
      <label className="form-label">Credit or Debit Card</label>
      <div className="ui-credit-card-input__pseudo-input">
        <Icon icon={CardIcon} />
        <input
          id="cardNumber"
          className="card-number allowOnlyNumber"
          placeholder="Card Number"
          maxLength="19"
          checked
        />
        <div className="pushed-right">
          <input
            className="card-exp allowOnlyNumber"
            id="cardExp"
            placeholder="MM/YY"
            maxLength="5"
          />
          <input
            className="card-cvc allowOnlyNumber"
            id="cardCVC"
            placeholder="CVC"
            maxLength="3"
          />
        </div>
      </div>
    </div>
  );
};

export default CardInputField
