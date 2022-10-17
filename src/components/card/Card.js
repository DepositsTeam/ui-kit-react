import React, { useState } from "react";
import "./Card.scss";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import PropType from "prop-types";
import Icon from "../icon";
import Radio from "../radio";
import Checkbox from "../checkbox";
import CardIcon from "../icons/Card";

const Card = ({
  title,
  desc,
  children,
  radio,
  checkbox,
  icon,
  isSelected,
  className,
  ringedRadio,
  dashedCheckbox,
  wrapperClass,
  hoverColor,
  border,
  cardClass,
  header,
  footer,
  onChange,
  ...props
}) => {
  const [selected, setSelected] = useState(isSelected);

  const generatedClassName = classNames(
    {
      "ui-card": true,
      [`state__selected`]: selected,
      [wrapperClass]: wrapperClass,
      shouldHover: radio || checkbox || hoverColor,
      border,
      hasHeader: header,
      hasFooter: footer,
      selected,
      [cardClass]: true,
    },
    className
  );
  return (
    <Box
      is={radio || checkbox ? "label" : "div"}
      className={generatedClassName}
    >
      {(radio && (
        <Radio
          is={"input"}
          className={"ui-radio ui-card__form-selector"}
          type={"radio"}
          onClick={(e) => {
            setSelected(() => e.target.checked);
          }}
          {...props}
        />
      )) ||
        (checkbox && (
          <Checkbox
            is={"input"}
            className={"ui-checkbox ui-card__form-selector"}
            type={"checkbox"}
            onClick={(e) => {
              setSelected(() => e.target.checked);
            }}
            {...props}
          />
        ))}

      <div className="ui-card__content">
        <div className="ui-card__title">{title}</div>
        {(desc || children) && (
          <div className="ui-card__card-text">{desc || children}</div>
        )}
      </div>

      {icon && <Icon className={"ui-card__icon"} icon={CardIcon} />}
    </Box>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.bool,
  isSelected: PropType.bool,
  radio: PropType.bool,
  checkbox: PropType.bool,
  desc: PropType.string,
  ringedRadio: PropType.bool,
  dashedCheckbox: PropType.bool,
  wrapperClass: PropType.string,
  border: PropType.string,
  hoverColor: PropType.string,
  cardClass: PropType.string,
  header: PropType.object,
  footer: PropType.object,
};

Card.defaultProps = {
  title: "Title",
  icon: false,
  isSelected: false,
  radio: false,
  checkbox: false,
  // icon: ChevronFilledDown
};

export default Card;
