import PropTypes from "prop-types";
import { CardBrands } from "../../utils/debitCardUtils";
import "./DebitCard.scss";
import { Box, Text } from "../../index";
import { useDebitCard } from "../../utils/hooks/debitCard.hook";
import rfid from "./rfid.svg";

const DebitCard = ({ logo, name, width, ...props }) => {
  const { computedCardNo, computedExp, computedCVV, cardBrand, toggleHidden } =
    useDebitCard(props);

  return (
    <Box className="ui-d-debitcard__wrapper">
      <Box
        className="ui-d-debitcard"
        style={{ "--width": width }}
        onClick={toggleHidden}
      >
        <Box height="100%" display="flex" justifyContent="space-between">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Box
                is="img"
                className="ui-d-debitcard__logo"
                src={logo}
                alt=""
              />
            </Box>
            <Box>
              <Box
                is="img"
                className="ui-d-debitcard__rfid"
                src={rfid}
                alt=""
              />
            </Box>
            <Box>
              <Text className="ui-d-debitcard__cardno ocrb" marginY={0}>
                {computedCardNo}
              </Text>
              <Box className="card__row" display="flex">
                <Text className="ui-d-debitcard__exp ocrb" marginY={0}>
                  EXP: {computedExp}
                </Text>
                <Text className="ui-d-debitcard__cvv ocrb" marginY={0}>
                  CVV: {computedCVV}
                </Text>
              </Box>
              <Text className="ui-d-debitcard__name ocrb" uppercase marginY={0}>
                {name}
              </Text>
            </Box>
          </Box>
          <Box className="ui-d-debitcard__column">
            <Box className="ui-d-debitcard__brand" is="img" src={cardBrand} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DebitCard;

DebitCard.propTypes = {
  logo: PropTypes.string,
  cardNo: PropTypes.string,
  exp: PropTypes.string,
  cvv: PropTypes.string,
  brand: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(CardBrands)]),
  width: PropTypes.string,
};

DebitCard.defaultProps = {
  cardNo: "5399415874124589",
  exp: "10/25",
  cvv: "123",
  name: "Eric Aprioku",
  brand: "mastercard",
  width: "336px",
  logo: "https://assets.ondeposits.com/img/logo/renapay/svg/logo_all_white.svg",
};
