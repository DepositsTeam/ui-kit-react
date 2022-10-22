import PropTypes from "prop-types";
import "./DebitCardVertical.css";

const DebitCardVertical = ({
  brand,
  theme,
  width,
  name,
  cardNo,
  rotate,
  hoverFlip,
  defaultFace,
  exp,
  cvv,
  footnote,
  ...props
}) => {};

export default DebitCardVertical;

DebitCardVertical.propTypes = {
  brand: PropTypes.oneOf(["mastercard", "visa"]),
  theme: PropTypes.oneOf(["light", "dark", "grey"]),
  width: PropTypes.string,
  name: PropTypes.string,
  cardNo: PropTypes.string,
  rotate: PropTypes.bool,
  hoverFlip: PropTypes.bool,
  defaultFace: PropTypes.oneOf(["front", "back"]),
  bottomLeftText: PropTypes.string,
  exp: PropTypes.string,
  footnote: PropTypes.string,
};

DebitCardVertical.defaultProps = {
  brand: "mastercard",
  theme: "light",
  width: "300px",
  name: "Eric McWinNEr",
  cardNo: "5534631253547890",
  hoverFlip: true,
  bottomLeftText: "debit",
  exp: "12/33",
  cvv: "123",
  footnote: `For Support Visit: <br />
              ondeposits.com/cards/help <br />
              +1 (885-786-2114)`,
};
