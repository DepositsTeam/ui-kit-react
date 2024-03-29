import React from "react";
import PropTypes from "prop-types";
import "./CountryDropdown.scss";
import Dropdown from "../dropdown";
import countries from "./countries_states_cities.json";

const CountryDropdown = ({ onChange, ...props }) => {
  const options = countries.map((country) => ({
    text: country.name,
    value: country.iso2,
    states: country.states,
    icon: <span>{country.emoji}</span>,
  }));
  console.log(options);
  const handleChange = (option) => {
    if (option) {
      onChange(
        option.value,
        option.states.map((state) => ({
          text: state.name,
          value: state.state_code,
        }))
      );
    }
  };
  return (
    <Dropdown
      options={options}
      onChange={handleChange}
      returnObjModel
      {...props}
    />
  );
};

export default CountryDropdown;

CountryDropdown.defaultProps = {};

CountryDropdown.propTypes = {
  onChange: PropTypes.func,
};
