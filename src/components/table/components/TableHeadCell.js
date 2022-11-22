import React from "react";
import Box from "../../box";
import Text from "../../text";
import Icon from "../../icon";
import ChevronFilledDown from "../../icons/ChevronFilledDown";

const TableHeadCell = ({ column, ...props }) => {
  return (
    <Box>
      <Box className={"ui-table__heading-cell__content"}>
        <Text
          marginY={0}
          className={"font-weight-600 ui-table__heading-cell-text"}
        >
          {column.uppercase ? column.display.toUpperCase() : column.display}
        </Text>
        {column.sortable !== false && (
          <Box className={"ui-table__heading-cell__icon"}>
            <Icon
              icon={ChevronFilledDown}
              height={"20px"}
              width={"20px"}
              className={"ui-table__heading-cell__icon"}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TableHeadCell;

TableHeadCell.propTypes = {};
