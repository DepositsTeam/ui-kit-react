import PropTypes from "prop-types";
import "./DebitCardBalance.scss";
import { useDebitCard } from "../../utils/hooks/debitCard.hook";
import number_format from "../../utils/number_format";
import { Box, Text } from "../../index";
import classNames from "../../utils/classNames";
import { CardBrands } from "../../utils/debitCardUtils";

const DebitBalance = ({ logo, theme, name, balance, width, ...props }) => {
  const computedLogo = props.logo
    ? props.logo
    : `https://assets.ondeposits.com/img/logo/renapay/svg/logo_all_${
        theme === "light" ? "dark" : "white"
      }.svg`;

  const { computedCardNo, computedExp, computedCVV, cardBrand, toggleHidden } =
    useDebitCard(props);

  const computedBalance = `$${number_format(balance, 2)}`;

  return (
    <Box
      className={classNames(["d-debit-card-balance", `theme__${theme}`])}
      style={{ "--width": width }}
      onClick={toggleHidden}
    >
      <Box
        paddingY="20px"
        paddingX="24px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          marginY={0}
          uppercase
          fontSize="14px"
          className="d-debit-card-balance__name ocrb"
        >
          {name}
        </Text>
        <Box
          className="d-debit-card-balance__logo"
          is="img"
          src={computedLogo}
          alt=""
        />
      </Box>
      <Box paddingX="24px">
        <Text
          fontFace="circularSTD"
          fontWeight="600"
          className="d-debit-card-balance__balance"
          marginY={0}
        >
          {computedBalance}
        </Text>
        <Text
          marginY={0}
          fontSize="11px"
          letterSpacing="0.5px"
          fontFace="circularSTD"
          className="d-debit-card-balance__available-balance"
          fontWeight="400"
        >
          Available Balance
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingX="24px"
        borderTop="1px solid"
        borderColor={theme === "light" ? "#F1F5F9" : "#202B3C"}
      >
        <Box>
          <Text className="d-debit-card-balance__detail">Card number</Text>
          <Text className="d-debit-card-balance__detail-value">
            {computedCardNo}
          </Text>
        </Box>
        <Box>
          <Text className="d-debit-card-balance__detail">Exp</Text>
          <Text className="d-debit-card-balance__detail-value">
            {computedExp}
          </Text>
        </Box>
        <Box>
          <Text className="d-debit-card-balance__detail">CVV</Text>
          <Text className="d-debit-card-balance__detail-value">
            {computedCVV}
          </Text>
        </Box>
        <Box>
          <Box
            className="d-debit-card-balance__card-brand"
            is="img"
            src={cardBrand}
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DebitBalance;

DebitBalance.propTypes = {
  logo: PropTypes.string,
  cardNo: PropTypes.string,
  exp: PropTypes.string,
  cvv: PropTypes.string,
  brand: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(CardBrands)]),
  width: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
};

DebitBalance.defaultProps = {
  cardNo: "5399415874124589",
  exp: "10/25",
  cvv: "123",
  name: "Eric Aprioku",
  brand: "mastercard",
  width: "336px",
  logo: "https://assets.ondeposits.com/img/logo/renapay/svg/logo_all_white.svg",
  theme: "light",
};
