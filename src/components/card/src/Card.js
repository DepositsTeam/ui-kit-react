import React, { useState } from "react";
import "./Card.css";
import Box from "../../box";
import PropTypes from "prop-types";
import classNames from "../../../utils/classNames";
import PropType from "prop-types";
import Icon from "../../icon"
import Radio from "../../radio";
import Checkbox from "../../checkbox";
import CardIcon from "../../icons/Card";



const Card = ({ is, title, desc, children, radio, checkbox, icon, select, className, ...props }) => {
    const [selected, setSelected] = useState(select)
    const generatedClassName = classNames(
        {
            "ui-card": true,
            [`state__selected`]: selected,
        },
        className
    );



    return (
        // <Box is={is} >
        <Box is={"label"} className={generatedClassName} >
            {
                (radio && <Radio
                    is={"input"}
                    className={"ui-radio"}
                    type={"radio"}
                    onClick={(e) => { setSelected(() => e.target.checked) }}
                    {...props}
                />)
                ||
                (checkbox && <Checkbox
                    is={"input"}
                    className={"ui-checkbox"}
                    type={"checkbox"}
                    onClick={(e) => { setSelected(() => e.target.checked) }}
                    {...props}
                />)
            }

            <div className="ui-card__content">
                <div className="ui-card__title">{title}</div>
                {
                    (desc || children) &&
                    <div className="ui-card__card-text">
                        {desc || children}
                    </div>
                }
            </div>

            {icon && (
                <Icon
                    className={"ui-card__icon"}
                    icon={CardIcon}
                />
            )}
        </Box>
        // </Box>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.bool,
    selected: PropType.bool,
    radio: PropType.bool,
    checkbox: PropType.bool,
};

Card.defaultProps = {
    title: "Title",
    icon: false,
    selected: false,
    radio: false,
    checkbox: false,
    // icon: ChevronFilledDown
};

export default Card;
