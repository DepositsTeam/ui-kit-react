import React, { useState, useRef, useEffect, createContext } from "react";
import Box from "../../box";
import Text from "../../text";
import Icon from "../../icon";
import ChevronFilledDown from "../../icons/ChevronFilledDown";
import TableHeadCellDropdown from "./TableHeadCellDropdown";
import classNames from "../../../utils/classNames";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";

const TableHeadCell = ({ column, ...props }) => {
  const trigger = useRef();
  const target = useRef();
  const thCell = useRef();

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSelected) {
      computePosition(trigger.current, target.current, {
        placement: "bottom-start",
        middleware: [offset(6), flip(), shift()],
      }).then(({ x, y }) => {
        Object.assign(target.current.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    }
  }, [isSelected]);

  const toggleSelection = (e) => {
    let shouldProceed = false;
    if (e === undefined) {
      shouldProceed = true;
    } else {
      [
        "ui-table__heading-cell__content",
        "ui-table__heading-cell-text",
        "ui-table__heading-cell__icon",
      ].map((target) => {
        if (e.target.classList.contains(target)) {
          shouldProceed = true;
        }
      });
    }

    if (shouldProceed) {
      setIsSelected(!isSelected);
    }
  };

  return (
    <Box ref={thCell}>
      <Box
        className={classNames({
          "ui-table__heading-cell__content": true,
          selected: isSelected,
        })}
        onClick={toggleSelection}
        ref={trigger}
      >
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
      {isSelected && (
        <TableHeadCellDropdown
          ref={target}
          column={column}
          toggleSelection={toggleSelection}
          thCell={thCell}
        />
      )}
    </Box>
  );
};

export default TableHeadCell;

TableHeadCell.propTypes = {};
