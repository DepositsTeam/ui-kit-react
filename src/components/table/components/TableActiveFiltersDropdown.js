import React, { useState, forwardRef, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "../../box";
import Select from "../../select-field";
import TextField from "../../text-field";
import Radio from "../../radio";
import Text from "../../text";
import Button from "../../button";
import { availableFilters } from "../utils/reused";
import Icon from "../../icon";
import Close from "../../icons/Close";
import Add from "../../icons/Add";
import { TableContext } from "../Table";

const TableActiveFiltersDropdown = forwardRef(({ onClose, ...props }, ref) => {
  const [showSecondOptions, setShowSecondOptions] = useState(false);
  const { filter, setFilter } = useContext(TableContext);

  const [localFilter, setLocalFilter] = useState({
    column: null,
    selectedFilter: null,
    selectedFilterValue: null,
    join: null,
    selectedFilter2: "Is",
    selectedFilterValue2: null,
  });

  useEffect(() => {
    setLocalFilter({ ...filter });
  }, [filter]);

  const handleFormChange = (e, field) => {
    setLocalFilter((localFilter) => ({
      ...localFilter,
      [field]: e.target.value,
    }));
  };

  const publishLocalFilters = () => {
    setFilter({ ...localFilter });
    onClose();
  };

  return (
    <Box ref={ref} className={"ui-table__active-filters-dropdown"}>
      <Box className={"filter__row"}>
        <Select
          size={"medium"}
          placeholder={"Select filter"}
          label={"Filter"}
          fontFace={"circularSTD"}
          options={availableFilters}
          value={localFilter.selectedFilter}
          onChange={(e) => handleFormChange(e, "selectedFilter")}
        />
        <TextField
          size={"medium"}
          label={"Value"}
          fontFace={"circularSTD"}
          placeholder={"Type something"}
          value={localFilter.selectedFilterValue}
          onChange={(e) => handleFormChange(e, "selectedFilterValue")}
        />
      </Box>
      {showSecondOptions && (
        <>
          <Box className={"filter__radios"}>
            <Radio
              ringed
              value={"and"}
              onChange={(e) => handleFormChange(e, "join")}
              checked={localFilter.join === "and"}
            >
              <Text
                marginY={0}
                scale={"subhead"}
                className={"text-grey-700"}
                fontFace={"circularSTD"}
              >
                And
              </Text>
            </Radio>
            <Radio
              ringed
              value={"or"}
              onChange={(e) => handleFormChange(e, "join")}
              checked={localFilter.join === "or"}
            >
              <Text
                marginY={0}
                scale={"subhead"}
                className={"text-grey-700"}
                fontFace={"circularSTD"}
              >
                Or
              </Text>
            </Radio>
          </Box>
          <Box className={"filter__row grey"}>
            <Select
              size={"medium"}
              placeholder={"Select Filter"}
              label={"Filter"}
              fontFace={"circularSTD"}
              options={availableFilters}
              value={localFilter.selectedFilter2}
              disabled={localFilter.join === null}
              onChange={(e) => handleFormChange(e, "selectedFilter2")}
            />
            <TextField
              size={"medium"}
              label={"Value"}
              fontFace={"circularSTD"}
              placeholder={"Type something"}
              value={localFilter.selectedFilterValue2}
              disabled={localFilter.join === null}
              onChange={(e) => handleFormChange(e, "selectedFilterValue2")}
            />
            <Box cursor={"pointer"} onClick={() => setShowSecondOptions(false)}>
              <Icon icon={Close} />
            </Box>
          </Box>
        </>
      )}
      <Box display={"flex"} marginTop={"16px"}>
        <Button
          colorScheme={"primary"}
          size={"medium"}
          onClick={publishLocalFilters}
        >
          Apply filter
        </Button>
        <Button
          background={"#202B3C"}
          marginLeft={16}
          size={"medium"}
          onClick={() => onClose()}
        >
          Cancel
        </Button>
      </Box>
      {!showSecondOptions && (
        <Box onClick={() => setShowSecondOptions(true)} className={"condition"}>
          <Box
            cursor={"pointer"}
            display={"inline-block"}
            className={"text-blue-500 text"}
          >
            <Icon icon={Add} />
            <Text marginY={0} scale={"footnote"} fontFace={"heroNew"}>
              Add condition
            </Text>
          </Box>
        </Box>
      )}
    </Box>
  );
});

export default TableActiveFiltersDropdown;

TableActiveFiltersDropdown.defaultProps = {};

TableActiveFiltersDropdown.propTypes = {
  onClose: PropTypes.func,
};
