import React, {
  useRef,
  forwardRef,
  useState,
  useEffect,
  useContext,
} from "react";
import Box from "../../box";
import Icon from "../../icon";
import SortAscending from "../../icons/SortAscending.jsx";
import Text from "../../text";
import SortDescending from "../../icons/SortDescending.jsx";
import Funnel from "../../icons/Funnel.jsx";
import PropTypes from "prop-types";
import TableFilterDropdown from "./TableFilterDropdown.jsx";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";
import ChevronFilledRight from "../../icons/ChevronFilledRight.jsx";
import { TableContext } from "../Table.jsx";

const TableHeadCellDropdown = forwardRef(
  ({ column, thCell, toggleSelection, ...props }, ref) => {
    const trigger = useRef();
    const target = useRef();
    const { setSortConfiguration } = useContext(TableContext);
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);

    useEffect(() => {
      if (showFilterDropdown) {
        computePosition(trigger.current, target.current, {
          placement: "right-end",
          middleware: [offset(6), flip(), shift()],
        }).then(({ x, y }) => {
          Object.assign(target.current.style, {
            left: `${x}px`,
            top: `${y}px`,
          });
        });
      }
    }, [showFilterDropdown]);

    const closeFilterDropdownOnOutsideClick = (e) => {
      const elem = e.target;

      if (thCell.current && elem.closest(`#${thCell.current.id}`) === null) {
        toggleSelection();
      }
    };

    const closeFilterOnEsc = (e) => {
      if (e.key === "Escape") {
        toggleSelection();
      }
    };

    const triggerSort = (direction) => {
      const sortConfiguration = { direction, column };
      setSortConfiguration({ ...sortConfiguration });
      toggleSelection();
    };

    useEffect(() => {
      window.addEventListener("click", closeFilterDropdownOnOutsideClick);
      document.addEventListener("keydown", closeFilterOnEsc);
      return () => {
        window.removeEventListener("click", closeFilterDropdownOnOutsideClick);
        document.removeEventListener("keydown", closeFilterOnEsc);
        setShowFilterDropdown(false);
      };
    }, []);

    const closeFilterDropdown = () => {
      setShowFilterDropdown(false);
    };

    const toggleFilterDropdown = (e) => {
      if (
        e.target.classList.contains("ui-table-filter-trigger") ||
        e.target.closest(".ui-table-filter-trigger")
      ) {
        setShowFilterDropdown(true);
      }
    };

    return (
      <Box ref={ref} className={"ui-table__heading-cell__dropdown__wrapper"}>
        <Box ref={trigger} className={"ui-table__heading-cell__dropdown"}>
          {column.sortable && (
            <Box
              onClick={() => triggerSort("asc")}
              className={"ui-table__heading-cell__dropdown-item"}
            >
              <Box>
                <Icon icon={SortAscending} />
                <Text marginY={0} scale={"subhead"} fontFace={"circularSTD"}>
                  Sort ascending
                </Text>
              </Box>
            </Box>
          )}
          {column.sortable && (
            <Box
              onClick={() => triggerSort("desc")}
              className={"ui-table__heading-cell__dropdown-item"}
            >
              <Box>
                <Icon icon={SortDescending} />
                <Text marginY={0} scale={"subhead"} fontFace={"circularSTD"}>
                  Sort descending
                </Text>
              </Box>
            </Box>
          )}
          {column.filterable && (
            <Box
              className={
                "ui-table__heading-cell__dropdown-item ui-table-filter-trigger"
              }
              onClick={toggleFilterDropdown}
            >
              <Box>
                <Icon icon={Funnel} />
                <Text marginY={0} scale={"subhead"} fontFace={"circularSTD"}>
                  Filter
                </Text>
              </Box>
              <Icon icon={ChevronFilledRight} />
            </Box>
          )}
        </Box>
        {showFilterDropdown && (
          <TableFilterDropdown
            ref={target}
            column={column}
            onClose={closeFilterDropdown}
          />
        )}
      </Box>
    );
  }
);

export default TableHeadCellDropdown;

TableHeadCellDropdown.defaultProps = {};

TableHeadCellDropdown.propTypes = {
  column: PropTypes.object,
};
