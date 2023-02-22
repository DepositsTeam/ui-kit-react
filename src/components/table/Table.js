import React, { useState, useEffect, createContext, useRef } from "react";
import PropTypes from "prop-types";
import Box from "../box";
import Text from "../text";
import TextField from "../text-field";
import Search from "../icons/Search";
import Button from "../button";
import ExternalLink from "../icons/ExternalLink";
import Checkbox from "../checkbox";
import Pagination from "../pagination";
import TableHeadCell from "./components/TableHeadCell";
import "./Table.scss";
import classNames from "../../utils/classNames";
import { getColumnWidth } from "./utils/getColumnWidth";
import useExportCsv from "./hooks/useExportCsv";
import { search as searchItems, filter as filterItems } from "./utils/filter";
import { sort } from "./utils/sort";
import uniqueRandomString from "../../utils/uniqueRandomString";
import CustomizeViewModal from "./components/CustomizeViewModal";
import Icon from "../icon";
import Sort2 from "../icons/Sort2";
import Close from "../icons/Close";
import Funnel from "../icons/Funnel";
import TableActiveFiltersDropdown from "./components/TableActiveFiltersDropdown";
import { computePosition, flip, offset, shift } from "@floating-ui/dom";

export const TableContext = createContext({});

const Table = ({
  showCheckboxes,
  itemsPerPage,
  paginate,
  paginateRight,
  initialCurrentPage,
  currentPageSiblings,
  asyncPagination,
  columns,
  data,
  search,
  enableCsvExport,
  enableCustomizeView,
  searchPlaceholder,
  generatedCsvName,
  loading,
  checkboxDataSelector,
  buttonActionsAlignment,
  searchAlignment,
  caseSensitiveSearch,
  onPageChange,
  onRowSelected,
  exportCSVUrl,
  ...props
}) => {
  const [internalCurrentPage, setInternalCurrentPage] = useState();
  const { exportCsv } = useExportCsv(data, generatedCsvName);
  const [processedData, setProcessedData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [columnHashMap, setColumnHashMap] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [showCustomizeView, setShowCustomizeView] = useState(false);
  const [internalColumns, setInternalColumns] = useState([]);
  const [showActiveFiltersDropdown, setShowActiveFiltersDropdown] =
    useState(false);
  const [filter, setFilter] = useState({
    column: null,
    selectedFilter: null,
    selectedFilterValue: null,
    join: null,
    selectedFilter2: null,
    selectedFilterValue2: null,
  });
  const [sortConfiguration, setSortConfiguration] = useState(null);

  const target = useRef();
  const trigger = useRef();

  const toggleActiveFilters = (e) => {
    if (
      e !== false &&
      e &&
      e.target.classList.contains("activeFiltersTrigger")
    ) {
      setShowActiveFiltersDropdown(!showActiveFiltersDropdown);
    }
  };

  const initialContextState = {
    filter,
    setFilter,
    sortConfiguration,
    setSortConfiguration,
  };

  const updateInternalColumns = (columns) => {
    setInternalColumns(
      columns.map((column) => ({
        display: "",
        dataSelector: "",
        uppercase: true,
        sortable: true,
        sortNumerically: false,
        filterable: true,
        width: "",
        minWidth: "",
        maxWidth: "",
        excludeFromCSV: false,
        position: "left",
        visible: true,
        ...column,
      }))
    );
  };

  useEffect(() => {
    setInternalCurrentPage(initialCurrentPage);
    updateInternalColumns(columns);
  }, []);

  useEffect(() => {
    const hashMap = {};
    internalColumns.forEach((column) => {
      hashMap[column.dataSelector] = column;
    });
    setColumnHashMap(hashMap);
  }, [columns, internalColumns]);

  useEffect(() => {
    let detachedData = [...data];
    if (searchValue) {
      detachedData = searchItems(
        searchValue,
        detachedData,
        columnHashMap,
        caseSensitiveSearch
      );
    }

    if (filter && filter.column) {
      detachedData = filterItems(filter, detachedData);
    }

    if (sortConfiguration) {
      sort(sortConfiguration, detachedData);
    }

    setProcessedData(
      detachedData.map((item) => ({
        ...item,
        uuuid: uniqueRandomString(30, 8),
      }))
    );
  }, [data, searchValue, columnHashMap, filter, sortConfiguration]);

  useEffect(() => {
    if (onRowSelected && typeof onRowSelected === "function") {
      onRowSelected(selectedRows);
    }
  }, [selectedRows, onRowSelected]);

  useEffect(() => {
    if (onPageChange && typeof onPageChange === "function") {
      onPageChange(internalCurrentPage);
    }
  }, [internalCurrentPage, onPageChange]);

  useEffect(() => {
    if (showActiveFiltersDropdown) {
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
  }, [showActiveFiltersDropdown]);

  const filteredColumns = internalColumns.filter(
    (column) => column.visible !== false
  );

  const paginatedData =
    paginate && !asyncPagination
      ? [...processedData].splice(
          (internalCurrentPage - 1) * itemsPerPage,
          itemsPerPage
        )
      : [...processedData];

  const mappedHeadCells = filteredColumns.map((visibleColumn, index) => (
    <Box
      is={"td"}
      key={`${index}-heading-cell`}
      className={"ui-table__heading-cell"}
      style={{
        ...getColumnWidth(visibleColumn),
      }}
    >
      <TableHeadCell column={visibleColumn} />
    </Box>
  ));

  const handlePageChange = (page) => {
    setInternalCurrentPage(page);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const toggleSelectedRows = (uuuid) => {
    let newSelectedRows = [...selectedRows];
    if (newSelectedRows.includes(uuuid)) {
      newSelectedRows.splice(newSelectedRows.indexOf(uuuid), 1);
    } else {
      newSelectedRows.push(uuuid);
    }
    setSelectedRows(newSelectedRows);
  };

  const toggleAllRows = () => {
    if (selectedRows.length === paginatedData.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(paginatedData.map((datum) => datum.uuuid));
    }
  };

  const mappedRows = paginatedData.map((datum, index) => (
    <Box
      is={"tr"}
      className={classNames({
        "ui-table__body-row": true,
        checked: selectedRows.includes(datum[checkboxDataSelector]),
      })}
      key={`${index}-row`}
    >
      {showCheckboxes && (
        <Box
          is={"td"}
          className={"ui-table__body-cell is-checkbox"}
          style={{
            ...getColumnWidth(null, true),
          }}
        >
          <Checkbox
            value={datum.uuuid}
            checked={selectedRows.includes(datum.uuuid)}
            onChange={() => toggleSelectedRows(datum.uuuid)}
          />
        </Box>
      )}
      {filteredColumns.map((column, jindex) => (
        <Box
          is={"td"}
          key={`${jindex}-${index}-cell`}
          className={"ui-table__body-cell"}
          style={{
            ...getColumnWidth(column),
          }}
        >
          {typeof datum[column.dataSelector] === "string" ? (
            <Text
              fontFace={"circularSTD"}
              marginY={0}
              className={"ui-table__body-cell-text"}
            >
              {datum[column.dataSelector]}
            </Text>
          ) : (
            datum[column.dataSelector]
          )}
        </Box>
      ))}
    </Box>
  ));

  const buttonActionsEnabled = enableCustomizeView && enableCsvExport;

  const handleCsvExport = () => {
    if (exportCSVUrl) {
      window.open(exportCSVUrl, "_blank");
    } else {
      exportCsv();
    }
  };

  return (
    <TableContext.Provider value={initialContextState}>
      <Box className={"ui-table__container"}>
        <Box className={"ui-table__header"}>
          {search && (
            <Box
              className={classNames({
                "ui-table__header__search-wrapper": true,
                [searchAlignment]: buttonActionsEnabled
                  ? false
                  : searchAlignment,
              })}
            >
              <TextField
                leftIcon={Search}
                placeholder={"Placeholder"}
                size={"large"}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </Box>
          )}
          <Box
            className={classNames({
              "ui-table__header-btns": true,
              [buttonActionsAlignment]: search ? false : buttonActionsAlignment,
            })}
          >
            {enableCustomizeView && (
              <Button
                onClick={() => setShowCustomizeView(true)}
                size={"medium"}
              >
                Customize view
              </Button>
            )}
            {enableCsvExport && (
              <Button
                leftIcon={ExternalLink}
                size={"medium"}
                onClick={handleCsvExport}
              >
                Export
              </Button>
            )}
          </Box>
        </Box>
        <Box ref={trigger} className={"ui-table__active-filters"}>
          {sortConfiguration && (
            <Box
              className={classNames({
                "ui-table__active-filter-group activeFiltersBox": true,
              })}
            >
              <Icon icon={Sort2} className={"activeFiltersBox"} />
              <Text
                marginX={8}
                marginY={0}
                fontFace={"circularSTD"}
                scale={"p-16"}
                className={"activeFiltersBox"}
              >
                {sortConfiguration.column.display + " "}
                <Box color={"#8895A7"} is={"span"}>
                  is
                </Box>
                {sortConfiguration.direction === "asc"
                  ? " Ascending"
                  : " Descending"}
              </Text>
              <Icon icon={Close} onClick={() => setSortConfiguration(null)} />
            </Box>
          )}
          {filter.column && (
            <Box
              className={classNames({
                "ui-table__active-filter-group activeFiltersTrigger activeFiltersBox": true,
                active: showActiveFiltersDropdown,
              })}
              onClick={toggleActiveFilters}
            >
              <Icon
                icon={Funnel}
                className={"activeFiltersTrigger activeFiltersBox"}
              />
              <Text
                className={"activeFiltersTrigger activeFiltersBox"}
                marginX={8}
                marginY={0}
                fontFace={"circularSTD"}
                scale={"p-16"}
              >
                {filter.column.display + " "}
                <Box color={"#64748B"} is={"span"}>
                  {filter.selectedFilter.toLowerCase() + " "}
                </Box>
                {filter.selectedFilterValue + " "}
                {filter.join && (
                  <Box is={"span"}>
                    {filter.join}{" "}
                    <Box color={"#64748B"} is={"span"}>
                      {filter.selectedFilter2.toLowerCase()}{" "}
                    </Box>
                  </Box>
                )}
                {filter.selectedFilterValue2}
              </Text>
              <Icon
                onClick={() =>
                  setFilter({
                    column: null,
                    selectedFilter: null,
                    selectedFilterValue: null,
                    join: null,
                    selectedFilter2: null,
                    selectedFilterValue2: null,
                  })
                }
                icon={Close}
                className={"activeFiltersBox"}
              />
            </Box>
          )}
          {showActiveFiltersDropdown && (
            <TableActiveFiltersDropdown
              onClose={() => setShowActiveFiltersDropdown(false)}
              ref={target}
            />
          )}
        </Box>
        <Box className={"ui-table__wrapper"}>
          <Box is={"table"} className={"ui-table"}>
            <Box is={"thead"} className={"ui-table__heading"}>
              <Box is={"tr"} className={"ui-table__heading-row"}>
                {showCheckboxes && (
                  <Box
                    is={"td"}
                    className={"ui-table__heading-cell is-checkbox"}
                    style={{
                      ...getColumnWidth(null, true),
                    }}
                  >
                    <Checkbox
                      checked={selectedRows.length === paginatedData.length}
                      onChange={toggleAllRows}
                    />
                  </Box>
                )}
                {mappedHeadCells}
              </Box>
            </Box>
            <Box is={"tbody"} className={"ui-table__body"}>
              {mappedRows}
            </Box>
          </Box>
        </Box>
        {paginate && (
          <Box
            className={classNames({
              "ui-table__pagination": true,
              right: paginateRight,
            })}
            marginTop={"1rem"}
          >
            <Pagination
              currentPage={internalCurrentPage}
              currentPageSiblings={currentPageSiblings}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Box>
        )}
        <CustomizeViewModal
          show={showCustomizeView}
          onCloseModal={() => setShowCustomizeView(false)}
          columns={internalColumns}
          onColumnsOrderChanged={updateInternalColumns}
        />
      </Box>
    </TableContext.Provider>
  );
};

export default Table;

Table.propTypes = {
  showCheckboxes: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  paginate: PropTypes.bool,
  paginateRight: PropTypes.bool,
  currentPage: PropTypes.number,
  currentPageSiblings: PropTypes.number,
  asyncPagination: PropTypes.bool,
  columns: PropTypes.array,
  data: PropTypes.array,
  search: PropTypes.bool,
  enableCsvExport: PropTypes.bool,
  enableCustomizeView: PropTypes.bool,
  searchPlaceholder: PropTypes.string,
  generatedCsvName: PropTypes.string,
  loading: PropTypes.bool,
  checkboxDataSelector: PropTypes.string,
  buttonActionsAlignment: PropTypes.oneOf(["left", "right"]),
  searchAlignment: PropTypes.oneOf(["left", "right"]),
  onPageChange: PropTypes.func,
  caseSensitiveSearch: PropTypes.bool,
  onRowSelected: PropTypes.func,
  exportCSVUrl: PropTypes.string,
};

Table.defaultProps = {
  itemsPerPage: 10,
  showCheckboxes: false,
  paginate: false,
  paginateRight: false,
  currentPage: 1,
  currentPageSiblings: 3,
  asyncPagination: false,
  generatedCsvName: "Exported CSV",
  searchPlaceholder: "Search",
  checkboxDataSelector: "uuuid",
  buttonActionsAlignment: "left",
  searchAlignment: "left",
  caseSensitiveSearch: false,
};
