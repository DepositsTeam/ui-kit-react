import React, { forwardRef, useState, useEffect, useContext } from "react";
import Box from "../../box";
import PropTypes from "prop-types";
import Text from "../../text";
import { availableFilters, availableFiltersTextMap } from "../utils/reused";
import classNames from "../../../utils/classNames";
import Radio from "../../radio";
import TextField from "../../text-field";
import { TableContext } from "../Table";

const TableFilterDropdown = forwardRef(({ column, onClose, ...props }, ref) => {
  const { setFilter } = useContext(TableContext);

  const [localFilter, setLocalFilter] = useState({
    column: null,
    selectedFilter: null,
    selectedFilterValue: null,
    join: null,
    selectedFilter2: null,
    selectedFilterValue2: null,
  });

  const updateLocalFilterSelectedFilterValue = (e) => {
    const value = e.target.value;
    setLocalFilter((localFilter) => ({
      ...localFilter,
      selectedFilterValue: value,
    }));
  };

  const updateLocalFilterSelectedFilter = (e) => {
    const value = e.target.value;
    setLocalFilter((localFilter) => ({
      ...localFilter,
      selectedFilter: value,
    }));
  };

  const applyFilter = () => {
    setFilter({ ...localFilter, column });
    onClose();
  };

  useEffect(() => {
    return () => {
      setLocalFilter({
        column: null,
        selectedFilter: null,
        selectedFilterValue: null,
        join: null,
        selectedFilter2: null,
        selectedFilterValue2: null,
      });
    };
  }, []);

  const closeDropdown = () => {
    onClose();
  };

  const mappedAvailableFilters = availableFilters.map((filter, index) => (
    <Box
      className={classNames({
        "ui-table__filters-item": true,
        bordered: index > 0 && index % 2 === 1,
      })}
      key={`filter-item-${index}`}
    >
      <Radio
        checked={filter.text === localFilter.selectedFilter}
        ringed
        value={filter.text}
        onChange={updateLocalFilterSelectedFilter}
      >
        <Text
          marginY={0}
          marginLeft={8}
          scale={"subhead"}
          className={"filterText"}
          fontFace={"circularSTD"}
        >
          {filter.text}
        </Text>
      </Radio>
      <Box marginTop={".5rem"}>
        {localFilter.selectedFilter === filter.text && filter.requiresText && (
          <TextField
            size={"medium"}
            label={"Value"}
            placeholder={"Type something"}
            fontFace={"circularSTD"}
            onChange={updateLocalFilterSelectedFilterValue}
          />
        )}
      </Box>
    </Box>
  ));

  const applyFilterColor = availableFiltersTextMap[localFilter.selectedFilter]
    ? localFilter.selectedFilterValue
      ? "text-blue-500"
      : "text-blue-300"
    : "text-blue-500";

  return (
    <Box ref={ref} className={"ui-table__filters"}>
      {localFilter.selectedFilter && (
        <Box paddingX={16} display={"flex"} justifyContent={"flex-end"}>
          <Text
            fontFace={"heroNew"}
            className={"text-grey-600"}
            scale={"footnote"}
            marginRight={10}
            onClick={closeDropdown}
          >
            Cancel
          </Text>
          <Text
            className={classNames({
              [applyFilterColor]: true,
            })}
            fontFace={"heroNew"}
            scale={"footnote"}
            onClick={applyFilter}
          >
            Apply filter
          </Text>
        </Box>
      )}
      {mappedAvailableFilters}
    </Box>
  );
});

export default TableFilterDropdown;

TableFilterDropdown.defaultProps = {};

TableFilterDropdown.propTypes = {
  column: PropTypes.object,
  toggleSelection: PropTypes.func,
  onClose: PropTypes.func,
};
