import React, { useState, useEffect } from "react";
import "./Card.scss";
import Box from "../box";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import PropType from "prop-types";
import Icon from "../icon";
import Radio from "../radio";
import Checkbox from "../checkbox";

const Card = ({
  title,
  subtitle,
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
  checked,
  ...props
}) => {
  const [selected, setSelected] = useState(isSelected);

  useEffect(() => {
    setSelected(checked);
  }, [checked]);

  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <Box className={"ui-card__wrapper"}>
      {header}
      <Box
        is={radio || checkbox ? "label" : "div"}
        className={classNames(
          {
            "ui-card": true,
            state__selected: selected,
            [wrapperClass]: wrapperClass,
            shouldHover: radio || checkbox || hoverColor,
            isForm: radio || checkbox,
            border,
            hasHeader: header,
            hasFooter: footer,
            selected,
            [cardClass]: true,
          },
          className
        )}
        marginLeft="0"
        marginRight="0"
        marginX="0"
        marginY="0"
        marginTop="0"
        marginBottom="0"
        width="100%"
      >
        {(radio && (
          <Radio
            is={"input"}
            className={"ui-radio ui-card__form-selector"}
            type={"radio"}
            onChange={handleChange}
            {...props}
            checked={checked}
          />
        )) ||
          (checkbox && (
            <Checkbox
              is={"input"}
              className={"ui-checkbox ui-card__form-selector"}
              type={"checkbox"}
              onChange={handleChange}
              {...props}
              checked={checked}
            />
          ))}

        <div className="ui-card__content">
          <div
            className={`ui-card__title ${classNames({
              centered_title: !radio && !checkbox,
            })}`}
          >
            {title}
          </div>
          <div className={"ui-card__subtitle"}>{subtitle}</div>
          {(desc || children) && (
            <div className="ui-card__card-text">{desc || children}</div>
          )}
        </div>

        {icon && <Icon className={"ui-card__icon"} icon={icon} />}
      </Box>
      {footer}
    </Box>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  selected: PropTypes.bool,
  subtitle: PropTypes.string,
  isSelected: PropType.bool,
  radio: PropType.bool,
  value: PropType.bool,
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
  checked: PropType.bool,
};

Card.defaultProps = {
  icon: false,
  isSelected: false,
  radio: false,
  checkbox: false,
  checked: undefined,
  // icon: ChevronFilledDown
};

export default Card;
